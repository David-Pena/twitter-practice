const express = require('express');
const serveStatic = require('serve-static');
const history = require('connect-history-api-fallback');
const enforce = require('express-sslify');

const app = express();

// this will force to use the secure version of the website
app.use(enforce.HTTPS({ trustProtoHeader: true }));

// give a place to all our production compiled files after heroku reads build command
// from package.json
app.use(serveStatic(__dirname + '/dist'));

app.use(history());

// our app will listen on port heroku give us or by default at 5000
app.listen(process.env.PORT || 5000);