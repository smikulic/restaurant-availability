/**
* Dependencies
*/
var express = require('express');
var parser = require('body-parser');
var path = require('path');
var logger = require('morgan');

var routes = require('./routes/index');

/**
* Bootstrap express app
*/
var app = new express();
app.set('port', process.env.PORT || 8080);

app.use(express.static(__dirname + '/../../build/client'))
.listen(8080);


/**
* Middleware setup
*/
app.use(parser.json());
app.use(parser.urlencoded({extended: false}));
app.use(logger('dev'));

app.use('/', routes);


/**
* View engine setup
*/
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


/**
* Catch 404 and forward to error handler
*/
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


/**
* Error handlers
*/ 
// development error handler, will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler,  no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
