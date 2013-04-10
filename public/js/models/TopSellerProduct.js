define([
  'underscore',
  'backbone'
], function(_, Backbone){
   
   var TopSellerProduct = Backbone.Model.extend({

    urlRoot: "/TopSellerProducts",
    idAttribute: "_id"

   });
  
  return TopSellerProduct;
  
});

