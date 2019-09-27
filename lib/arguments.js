module.exports = function (args, query) {
	const argsObj = args.reduce((o, item)  => {
		const res = item.split('=');
		if (res[0] === 'query') {
			const query = JSON.parse(res[1]);
			o.url = {...o.url};
			o.url.query = query;
			return o;
		} else if (res[0] === 'host' || res[0] === 'protocol' || res[0] === 'pathname') {
			o.url = {...o.url};
			o.url[res[0]] = res[1];
			return o;
		}
		o[res[0]] = res[1];

		return o;
	}, {});

	argsObj.url = Object.assign({}, query.url, argsObj.url);

	return Object.assign({}, query, argsObj);
}