define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/MiddleContainerView.html'
], function($, _, Backbone, MiddleContainerTemplate){

 var MiddleContainerView = Backbone.View.extend({

    render: function() {
       var data = {};
       var compiledTemplate = _.template(MiddleContainerTemplate, data);
       return compiledTemplate;
    }
  });

  return MiddleContainerView;

});
