define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/SliderView.html'
], function($, _, Backbone, SliderTemplate){

 var SliderView = Backbone.View.extend({

    render: function() {
       var data = {};
       var compiledTemplate = _.template(SliderTemplate, data);
       return compiledTemplate;
    }
  });

  return SliderView;

});
