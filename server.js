'use strict';

var http = require( 'http' );

var express        = require( 'express' );
var fetch          = require( 'request' );
var glob           = require( 'glob' );
var lessMiddleware = require( 'less-middleware' );
var fetchConfig    = require( 'zero-config' );

var config = fetchConfig( __dirname );

var app = express();
var server = http.createServer( app );

app.set( 'view engine', 'ejs' );
app.set( 'views', process.cwd() );
app.engine( 'html', require( 'ejs').renderFile );


app.use( express.static( process.cwd() ) );

var apiUrlBase = config.get( 'api.protocol' ) + '://' + config.get( 'api.host' ) + ':' + config.get( 'api.port' );

server.listen( config.get( 'port' ), function () {
	console.log( 'Server listening on port: %s', config.get( 'port' ) );
	console.log( 'Using proxy api server located at: %s', apiUrlBase );
} );