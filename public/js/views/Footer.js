define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/FooterView.html'
], function($, _, Backbone, FooterTemplate){

 var FooterView = Backbone.View.extend({

    render: function() {
       var data = {};
       var compiledTemplate = _.template(FooterTemplate, data);
       return compiledTemplate;
    }
  });

  return FooterView;

});
