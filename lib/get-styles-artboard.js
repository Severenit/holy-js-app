const URL = require('url');
const fetch = require('node-fetch');
const headers = new fetch.Headers();
const devToken = process.env.DEV_TOKEN;
headers.append('X-Figma-Token', devToken);

const getFiles = require('./get-files.js');
const getFontStyles = require('./get-font-styles.js');
const getColorPlatte = require('./get-color-platte.js');
const getGrids = require('./get-grids.js');
const getEffect = require('./get-effect.js');

module.exports = async function (key, URLformat) {
	const figmaId = key;
	const figmaTreeStructure = await getFiles(key, URLformat)

	const { styles } = figmaTreeStructure;
	const stylesArr = Array.isArray(styles) ? styles : Object.keys(styles);

	const baseTokeensJSON = {
		color: {},
		size: {
			font: {},
			grids: {},
			lineheight: {}
		},
		font: {
			family: {},
			weight: {},
			spacing: {}
		},
		grids: {},
		effects: {}
	};

	for (const item of stylesArr) {
		let node_id = item;
		const styleType = styles[item].styleType;

		if (styleType === 'TEXT') {
			const fonts = await getFontStyles({
				node_id: node_id,
				file_key: figmaId
			}, URLformat);

			Object.assign(baseTokeensJSON.size.font, fonts.size.font);
			Object.assign(baseTokeensJSON.size.lineheight, fonts.size.lineheight);
			Object.assign(baseTokeensJSON.font.family, fonts.font.family);
			Object.assign(baseTokeensJSON.font.weight, fonts.font.weight);
			Object.assign(baseTokeensJSON.font.spacing, fonts.font.spacing);

		}

		if (styleType === 'FILL') {
			const color = await getColorPlatte({
				node_id: node_id,
				file_key: figmaId
			}, URLformat);
			Object.assign(baseTokeensJSON.color, color);
		}

		if (styleType === 'GRID') {
			const grids = await getGrids({
				node_id: node_id,
				file_key: figmaId
			}, URLformat);
			Object.assign(baseTokeensJSON.size.grids, grids.size.grids);
			Object.assign(baseTokeensJSON.grids, grids.grids);
		}

		if (styleType === 'EFFECT') {
			const effect = await getEffect({
				node_id: node_id,
				file_key: figmaId
			}, URLformat);

			Object.assign(baseTokeensJSON.effects, effect);
		}
	}

	return baseTokeensJSON;
}
