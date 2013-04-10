define([
  'underscore',
  'backbone'
], function(_, Backbone){
   
   var Product = Backbone.Model.extend({

    urlRoot: "/ProductsByCategory",
    idAttribute: "_id"

   });
  
  return Product;
  
});

