const TYPE = ['colors', 'typography', 'spacers', 'grids', 'effects', 'border-radius'];

module.exports = function(params) {
	const {
		prefix = '',
		type = null
	} = params;

	let files = [];

	if (type && prefix) {
		files.push({
			destination: `_${ type }-${ prefix }.css`,
			format: 'my/theme',
			filter: {
				type: type
			}
		});
	} else if(type && !prefix) {
		files.push({
			destination: `_${ type }.css`,
			format: 'css/variables',
			filter: {
				type: type
			}
		});
	} else {
		files = TYPE.map(item => {
			return {
				destination: `_${ item }.css`,
				format: 'css/variables',
				filter: {
					type: item
				}
			};
		});
	}

	return {
		source: [
			'properties/**/*.json'
		],
		platforms: {
			css: {
				transformGroup: 'css',
				buildPath: 'src/variables/',
				transforms: ['attribute/cti', 'name/cti/kebab', 'time/seconds', 'content/icon', 'size/px', 'color/css'],
				files
			}
		}
	};
};