define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/PopOverView.html'
], function($, _, Backbone, PopOverTemplate){

 var PopOverView = Backbone.View.extend({

    render: function() {
       var data = {};
       var compiledTemplate = _.template(PopOverTemplate, data);
       return compiledTemplate;
    }
  });

  return PopOverView;

});
