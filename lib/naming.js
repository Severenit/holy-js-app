const SEPARATOR_NAME = '-';

module.exports = function (name, separator = SEPARATOR_NAME) {
	return name
		.toLowerCase()
		.replace(/ /ig, `${separator}`)
		.replace(/\//ig, `${separator}`)
		.replace(/-/ig, `${separator}`);
}