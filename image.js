require('dotenv').config();
const fetch = require('node-fetch');
let fs = require('fs');
let request = require('request');
const shell = require('shelljs');

const headers = new fetch.Headers();
const baseUrl = 'https://api.figma.com';

const fileKey = process.argv[2];
const nodeId = process.argv[3];
const version = process.argv[4];
const devToken = process.env.DEV_TOKEN;

const getNodeId = require('./lib/get-node-id');
const naming = require('./lib/naming.js');

headers.append('X-Figma-Token', devToken);

let query = {
	path: './src/',
	fileName: 'var',
	url: {
		host: 'api.figma.com',
		protocol: 'https',
	},
	prefixName: '$',
	extension: 'scss',
	separatorName: '-',
	style_type: 'FILL,EFFECT,TEXT'
};

if (version) {
	query.url = {
		...query.url,
		query: {
			version
		}
	}
}

const download = function(uri, filename, callback) {
	request.head(uri, function(err, res) {
		console.log('content-type:', res.headers['content-type']);
		console.log('content-length:', res.headers['content-length']);
		request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
	});
};

const IconJSX = (name, className) => (`import React from 'react';
import Icon from '../icon';

import './${name}.css'

export class ${className} extends React.Component {
\tstatic propTypes = Icon.propTypes;

\trender() {
\t\treturn (
\t\t\t<Icon
\t\t\t\t{ ...this.props }
\t\t\t\tname='${name}'
\t\t\t/>
\t\t);
\t}
}`);

const IconCSS = (name) => (`
.${name} {
    background-image: url('./${name}.svg');
}
`);

const getDirectories = source => fs.readdirSync(source)
	.filter(dirent => fs.lstatSync(`${source}${dirent}`).isDirectory());

async function main() {
	const fileNodeId = await getNodeId(nodeId, fileKey, query.url);
	const {
		document: {
			children
		}
	} = fileNodeId;

	children.map(async item => {
		if (item.type !== 'TEXT') {
			let resp = await fetch(`${ baseUrl }/v1/images/${ fileKey }?ids=${ item.id }&format=svg`, {headers});
			let data = await resp.json();
			const {images} = data;
			const name = naming(item.name);
			const pathIconsFolder = './src/icons/';
			const pathFolder = `${pathIconsFolder}${name}`

			if (!fs.existsSync(pathFolder)) {
				fs.mkdirSync(pathFolder);
			}

			download(`${ images[item.id] }`, `${pathFolder}/${name}.svg`, function() {


				fs.writeFile(`${pathFolder}/${ name }.jsx`, IconJSX(name, item.name.replace('/', '')), (err) => {
					if (err) console.log(err);
					shell.exec(`yarn prettier --write ${ pathFolder }/${ name }.jsx`);
					console.log(`wrote ${pathFolder}/${ name }.jsx`);
				});

				fs.writeFile(`${pathFolder}/${ name }.css`, IconCSS(name), (err) => {
					if (err) console.log(err);
					shell.exec(`yarn prettier --write ${ pathFolder }/${ name }.css`);
					console.log(`wrote ${pathFolder}/${ name }.css`);
				});


				const indexJS = getDirectories(pathIconsFolder).map(item => `export * from './${item}/${item}';\n`).join('');

				fs.writeFile(`${pathIconsFolder}index.js`, indexJS, (err) => {
					if (err) console.log(err);
					shell.exec(`yarn prettier --write ${pathIconsFolder}index.js`);
					console.log(`wrote ${pathIconsFolder}index.js`);
				});

				console.log('Done!');
			});
		}
	});

	return true;
};

main().catch((err) => {
	console.error(err);
	console.error(err.stack);
});