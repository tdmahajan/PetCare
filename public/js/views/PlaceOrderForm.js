define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/PlaceOrderFormView.html'
], function($, _, Backbone, PlaceOrderFormTemplate){

 var PlaceOrderFormView = Backbone.View.extend({

    render: function() {
       var data = {};
       var compiledTemplate = _.template(PlaceOrderFormTemplate, data);
       return compiledTemplate;
    }
  });

  return PlaceOrderFormView;

});
