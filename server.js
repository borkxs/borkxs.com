var connect = require('connect'),
    serveCurrDir = require('serve-static')(__dirname);

connect()
    .use( serveCurrDir )
    .listen( 2233 );