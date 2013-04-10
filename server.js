var express = require('express'),
    path    = require('path'),
    http    = require('http'),
    bcdsn   = require('./routes/bcdsn');

var app = express();

app.configure(function () {
    app.set('port', process.env.PORT || 3004);
    app.use(express.logger('dev'));  /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser()),
    app.use(express.static(path.join(__dirname, 'public')));
});

app.get('/ProductsByCategory/:cat', bcdsn.getProductsbyCategory);
app.get('/TopSellerProducts', bcdsn.getTopSellerProducts);
app.get('/ProductDetail/:id', bcdsn.getProductDetail);
app.get('/ProductOptions/:id', bcdsn.getProductOptions);


/*app.get('/catitems/:id',  bcdsn.findItemsByCats);
app.get('/search/:freeText',  bcdsn.findItemsFreeText);
*/

http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});
