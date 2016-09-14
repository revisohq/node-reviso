reviso 
======
This small module wraps [`request`](https://github.com/mikeal/request) in order to provide easy access to the [Reviso REST API](https://rest.reviso.com).

## Usage ##

Install via npm:

```
npm install reviso
```

Use it like you would use `request`. The main difference is that you only have to specify relative URLs and that authentication is handled for you. Just provide a valid access token and you're ready to go:

```js
var appSecretToken = 'your-app-secret-token';
var agreementGrantToken = 'your-agreement-grant-token';

var reviso = require('reviso')(appSecretToken, agreementGrantToken);

reviso('/customers', function (error, response, body) {
	console.log(body);
});
```

## Getting Access ##
In order to get access to the API you first need to register an app to get an `appSecretToken`. With that in place you need to run your users through a flow in order to obtain an `agreementGrantToken` that you can use to interact with their data.

The whole process is described in detail here: https://www.reviso.com/developer/connect

## API Documentation ##
The general Reviso REST API documenation can be found here: http://api-docs.reviso.com
