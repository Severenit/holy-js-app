require('dotenv').config();
const fetch = require('node-fetch');
const shell = require('shelljs');
const fs = require('fs');
const Css = require('json-to-css');
const headers = new fetch.Headers();
const devToken = process.env.DEV_TOKEN;
const fileKey = process.argv[2];
const nodeId = process.argv[3];

const getNodeId = require('./lib/get-node-id');

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

let STY;
let STYLE_CSS = {};

function preOrder(node) {
	if (!Array.isArray(node)) return node.style;

	return node.map(item => {
		const { style } = item;
		console.log(type);

		preOrder(item.children);
	});
}

async function main() {
	const fileNodeId = await getNodeId(nodeId, fileKey, query.url);
	const {
		components,
		styles
	} = fileNodeId;
	STY = styles;
	let content = '';
	Object.keys(components).map(async item => {
		if (item === '15:23') {
			const component = await getNodeId(item, fileKey, query.url);
			const {
				document
			} = component;
			const JSX = createJSONTree(document);
			content = makeReactTreeJSX(JSX);
			const css = cssStyle(JSX)
			console.log('####: JSX', JSX);
			console.log('####: css', css);

			const result = `
	import React, { PureComponent } from 'react';
	import './button.css';
	
	class Button extends PureComponent {
        render() {
            return (${content});
        }
    }

    export default Button;
	`;
			const pathWriteFile = `./src/components/button.jsx`;

			fs.writeFile(`./src/components/button.css`, `@import './var.css'; ${Css.of(css)}`, (err) => {
				if (err) console.log(err);
				//yarn prettier --write src/components/button.jsx
				shell.exec('yarn prettier --write src/components/button.css');
				console.log(`wrote ./src/components/button.css`);
			});

			fs.writeFile(pathWriteFile, result, (err) => {
				if (err) console.log(err);
				//yarn prettier --write src/components/button.jsx
				shell.exec('yarn prettier --write src/components/button.jsx');
				console.log(`wrote ${pathWriteFile}`);
			});
		}

	});

}


function createJSONTree(document) {
	const {
		children
	} = document;
	let arr = [];
	let styleCSS = {};

	children.map(item => {
		if (item.type === 'RECTANGLE') {
			const {styles, strokeWeight, absoluteBoundingBox, strokes, rectangleCornerRadii} = item;
			console.log('####: item', item);
			styleCSS = {
				'.button': {
					'width': `${absoluteBoundingBox.width}px`,
					'height': `${absoluteBoundingBox.height}px`,
					'border-radius': `${rectangleCornerRadii[0]}px ${
						rectangleCornerRadii[1]
						}px ${rectangleCornerRadii[2]}px ${rectangleCornerRadii[3]}px`
				}
			};
			Object.keys(styles).map(item => {
				if (item === 'fill') {
					styleCSS['.button'] = {
						...styleCSS['.button'],
						'background-color': `var(--color-${STY[styles[item]].name})`
					};
				}

				if (item === 'stroke') {
					styleCSS['.button'] = {
						...styleCSS['.button'],
						'border': `${strokeWeight}px ${strokes[0].type} var(--color-${STY[styles[item]].name})`
					};
				}
			});

			arr.push({
				type: 'div',
				props: {
					className: 'button'
				},
				children: [],
				styles: {
					...styleCSS
				}
			});
		}

		if (item.type === 'GROUP') {
			let child;
			if (Array.isArray(item.children)) {
				child = item.children.map(item => {
					console.log('####: item', item);
					if (item.type === 'TEXT') {
						return `{ this.props.${item.name.slice(1, item.name.length)} }`;
					}
				});
			}
			arr[0].children.push({
				type: 'span',
				props: {},
				children: child
			});
		}
	});

	return arr[0];
}

function cssStyle(node) {
	let css = {}
	const newFun = function(node) {
		if (!Array.isArray(node)) {
			const {styles} = node;
			css = {
				...css,
				...styles
			};

			return node.styles;
		}

		return node.map(item => {
			const { styles, children } = item;
			css = {
				...css,
				...styles
			};
			return newFun(item.children);
		});
	}

	newFun(node);

	return css;
}

function stringifyProps(props) {
	return Object.entries(props)
		.map(([key, value]) => {
			if (typeof value === 'string') {
				return `${key}='${value}'`;
			}

			if (value === true) {
				return `${key}`;
			}

			return `${key}={${JSON.stringify(value)}}`;
		})
		.join(' ');
}

function makeReactTreeJSX(root, count = null) {
	const globalProps = count === null ? '{ ...this.props }' : null;

	if (typeof root === 'string') return root;

	const {type, props, children = []} = root;
	const fixedChildren = Array.isArray(children) ? children : [children];
	const propsAsString = stringifyProps(props);

	if (children.length > 0) {
		return `
		      <${type} ${globalProps} ${propsAsString}>
		          ${fixedChildren.map(makeReactTreeJSX).join('\n')}
		      </${type}>
		  `;
	}

	return `<${type} ${globalProps} ${propsAsString}>`;
}

main().catch((err) => {
	console.error(err);
	console.error(err.stack);
});