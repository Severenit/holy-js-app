const naming = require('./naming.js');
const getNodeId = require('./get-node-id');

module.exports = async function(node_id, key, URLformat) {
	const figmaTreeStructure = await getNodeId(node_id, key, URLformat);
	const {
		document
	} = figmaTreeStructure;
	const spacers = {}

	document.children.map(item => {
		if (item.type === 'TEXT') {
			return;
		}
		const radius = item.children.filter(item => (item.type === 'RECTANGLE' && item.cornerRadius && item.visible !== false));
		if (radius.length === 0) {
			return;
		}
		let value;
		if (radius[0].rectangleCornerRadii && radius[0].rectangleCornerRadii.length > 0) {
			value = `${ radius[0].rectangleCornerRadii[0] }px ${ radius[0].rectangleCornerRadii[1] }px ${ radius[0].rectangleCornerRadii[2] }px ${ radius[0].rectangleCornerRadii[3] }px`
		} else {
			value = `${radius[0].cornerRadius}px`;
		}

		const res = {
			[naming(item.name).replace('ui-kit-', '')]: {
				value,
				type: "border-radius"
			}
		}
		Object.assign(spacers, res);
	});

	return spacers;
}