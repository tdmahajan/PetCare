define([
  'underscore',
  'backbone',
  'models/ProductDetail'
], function(_, Backbone, ProductDetail){
   
  var ProductDetails = Backbone.Collection.extend({

    model: ProductDetail,
    url: "/ProductDetail"

  });
   
  return ProductDetails;
  
});
