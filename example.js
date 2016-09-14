var appSecretToken = 'your-app-secret-token';
var agreementGrantToken = 'your-agreement-grant-token';

var reviso = require('./index.js')(appSecretToken, agreementGrantToken);

reviso('/customers/', function (error, response, body) {
	console.log(body);
});
