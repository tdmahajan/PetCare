define([
  'underscore',
  'backbone',
  'models/TopSellerProduct'
], function(_, Backbone,TopSellerProduct){
   
  var TopSellerProducts = Backbone.Collection.extend({

    model: TopSellerProduct,

    url: "/TopSellerProducts"

  });
   
  return TopSellerProducts;
  
});

