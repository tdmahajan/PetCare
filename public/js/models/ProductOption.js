define([
  'underscore',
  'backbone'
], function(_, Backbone){
   
   var ProductOption = Backbone.Model.extend({

    urlRoot: "/ProductOptions",
    idAttribute: "_id"

   });
  
  return ProductOption;
  
});

