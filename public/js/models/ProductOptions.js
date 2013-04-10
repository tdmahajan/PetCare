define([
  'underscore',
  'backbone',
  'models/ProductOption'
], function(_, Backbone, ProductOption){
   
  var ProductOptions = Backbone.Collection.extend({

    model: ProductOption,

    url: "/ProductOptions"

  });
   
  return ProductOptions;
  
});
