var mongo = require('mongodb');

var Server   = mongo.Server,
    Db       = mongo.Db,
    ObjectID = mongo.ObjectID,
    BSON     = mongo.BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('BCDSN', server, {safe: true});


exports.getProductsbyCategory = function(req, res) {
    var id = req.params.cat;
    console.log('Retrieving child Categories: ' + id);

    db.collection('tradeitems', function(err, collection) {
        collection.find({Categories: { $in: [id] } },{_id: 1, SKUName: 1, Content: 1, UOM: 1, PackagingType: 1, OurPrice:1, MRP:1,Rating:1,WebImageUrl:1,MobileImageUrl:1}).toArray(function(err, items) {
            res.send(items);
        });
    });
}

exports.getTopSellerProducts = function(req, res) {
    var id = req.params.id;
    console.log('getTopSellerProducts: ' + id);

    db.collection('tradeitems', function(err, collection) {
        collection.find({},{_id: 1, SKUName: 1, Content: 1, UOM: 1, PackagingType: 1, OurPrice:1, MRP:1,Rating:1,WebImageUrl:1,MobileImageUrl:1}).sort({Rating: -1}).limit(5).toArray(function(err, items) {
            res.send(items);
        });
    });
}

exports.getProductDetail = function(req, res) {
    var id = req.params.id;
    console.log('getProductDetail: ' + id);
    db.collection('tradeitems', function(err, collection) {
        collection.find({'_id': ObjectID(id)}).toArray(function(err, items) {
            res.send(items);
        });
    })    
}

exports.getProductOptions = function(req, res) {
    var id = req.params.id;
    console.log('getProductOptions: ' + id);
    db.collection('tradeItemOptions', function(err, collection) {
        collection.find({'_id': id}).toArray(function(err, items) {
            res.send(items);
        });
    })    
}


/*
exports.findChildCats = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving child Categories: ' + id);
    db.collection('categories', function(err, collection) {
        collection.find({parent:id}).toArray(function(err, items) {
            res.send(items);
        });
    });
}

exports.findItemsByCats = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving items from category: ' + id);
    db.collection('items', function(err, collection) {
        collection.find({Categories: { $in: [id] } },{SKUName:1,TradeOptions:1}).toArray(function(err, items) {
            res.send(items);
        });
    });
}

exports.findItemsFreeText = function(req, res) {
    var freeText = req.params.freeText;
    console.log('Free Text: ' + freeText);
    db.collection('items', function(err, collection) {
        collection.find({SKUName: { $regex: freeText, $options: 'i' }},{SKUName:1,TradeOptions:1}).toArray(function(err, items) {
            res.send(items);
        });
    });
}*/


