const TYPE = ['colors', 'typography', 'spacers', 'grids', 'effects', 'border-radius'];

module.exports = function(params) {
	const {
		prefix = '',
		type = null
	} = params;

	const files = TYPE.map(item => {
		if (type === item) {
			return {
				destination: `_${ item }-${ prefix }.css`,
				format: 'my/theme',
				filter: {
					type: item
				}
			};
		}

		return {
			destination: `_${ item }.css`,
			format: 'css/variables',
			filter: {
				type: item
			}
		};
	});

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