var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var ParseDashboard = require('parse-dashboard');
var app = express();
 
var api = new ParseServer({
  databaseURI: 'mongodb://192.168.1.107:27017/dev', // Connection string for your MongoDB database
  cloud: __dirname + '/cloud/main.js', // Absolute path to your Cloud Code
  appId: 'personalFinances',
  masterKey: 'kbIbkMrKAosttiFsd41B', // Keep this key secret!
  serverURL: 'http://localhost:1337/parse' // Don't forget to change to https if needed
});

var dashboard = new ParseDashboard({
  "apps": [
    {
      "serverURL": "http://localhost:1337/parse",
      "appId": "personalFinances",
      "masterKey": "kbIbkMrKAosttiFsd41B",
      "appName": "Personal Finances"
    },
  ],
  "users": [
    {
        user: "admin",
        pass: "$2y$12$9qJyS0c8m9FROVN5mLTUz.YnlTsvHO8moh.1PkwS377RCNxkT5voW"
    }
  ],
  useEncryptedPasswords: true
}, {allowInsecureHTTP: true});
 
// Serve the Parse API on the /parse URL prefix
app.use('/parse', api);

app.use('/dashboard', dashboard);
 
app.listen(1337, function() {
  console.log('parse-server-example running on port 1337.');
});