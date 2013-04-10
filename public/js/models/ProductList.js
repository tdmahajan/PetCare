define([
  'underscore',
  'backbone',
  'models/Product'
], function(_, Backbone, Product){
   
  var ProductList = Backbone.Collection.extend({

    model: Product,

    url: "/ProductsByCategory"

  });
   
  return ProductList;
  
});

