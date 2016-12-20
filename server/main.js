'use strict';

var path = require('path');
var chalk = require('chalk');
var express = require('express');
var bodyParser = require('body-parser');

var rootPath = path.join(__dirname, '../');
var indexPath = path.join(rootPath, './browser/index.html');

var app = express();
module.exports = app;

var binPath = path.join(rootPath, './bin');
var publicPath = path.join(rootPath, './public');
var browserPath = path.join(rootPath, './browser');
var npmPath = path.join(rootPath, './node_modules');

/* ---> serve static files <--- */
app.use(express.static(npmPath));
app.use(express.static(binPath));
app.use(express.static(publicPath));
app.use(express.static(browserPath));

/* ---> parse the POST and PUT bodies <--- */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*
 catch any URLs resembling a file extension
 This allows for proper 404s instead of the wildcard '/*' catching
 URLs that bypass express.static because the given file does not exist.
 */
app.use( (req, res, next) => {
    if (path.extname(req.path).length > 0) {
        res.status(404).end();
    } else {
        next(null);
    }
});

/* ---> serve files to corresponding URLs <--- */
app.get('/*', (req, res) => {
    res.sendFile(indexPath);
});

/* ---> error catching endware <--- */
app.use((err, req, res, next) => {
    console.error(err, typeof next);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
});

app.set('port', (process.env.PORT || 1337));
app.listen(app.get('port'), () => {
  console.log(chalk.blue(
    `Ooooooh, port #${chalk.magenta(
      app.get('port'))} is pinging`));
});
