module.exports = function(prefix = '') {
	const format = prefix ? 'my/theme' : 'css/variables';
	return {
		source: [
			'properties/**/*.json'
		],
		platforms: {
			css: {
				transformGroup: 'css',
				buildPath: 'src/variables/',
				transforms: ['attribute/cti', 'name/cti/kebab', 'time/seconds', 'content/icon', 'size/px', 'color/css'],
				files: [
					{
						destination: `_colors${ prefix }.css`,
						format,
						filter: {
							type: 'color'
						}
					},
					{
						destination: `_typography.css`,
						format: 'css/variables',
						filter: {
							type: 'typography'
						}
					},
					{
						destination: `_spacers.css`,
						format: 'css/variables',
						filter: {
							type: 'spacers'
						}
					},
					{
						destination: `_grids.css`,
						format: 'css/variables',
						filter: {
							type: 'grids'
						}
					},
					{
						destination: `_effects.css`,
						format: 'css/variables',
						filter: {
							type: 'effects'
						}
					},
					{
						destination: `_border-radius.css`,
						format: 'css/variables',
						filter: {
							type: 'border-radius'
						}
					}
				]
			}
		}
	};
};