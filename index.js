var request = require('request');

module.exports = function(appSecretToken, agreementGrantToken) {
	return request.defaults({}, function(options, callback) {
		if (options.url) {
			options.uri = options.url;
			delete options.url;
		}
		if (options.uri[0] === '/') {
			options.uri = 'https://rest.reviso.com' + options.uri;
		}
		options.jar = false;
		options.headers = options.headers || {};
		options.headers['X-AppSecretToken'] = appSecretToken;
		options.headers['X-AgreementGrantToken'] = agreementGrantToken;
		if (!('json' in options) && callback) {
			options.json = true;
		}
		return request(options, callback);
	});
};
