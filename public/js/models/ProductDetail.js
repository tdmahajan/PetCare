define([
  'underscore',
  'backbone'
], function(_, Backbone){
   
   var ProductDetail = Backbone.Model.extend({

    urlRoot: "/ProductDetail",
    idAttribute: "_id"

   });
  
  return ProductDetail;
  
});

