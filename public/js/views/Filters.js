define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/FiltersView.html'
], function($, _, Backbone, FiltersTemplate){

 var FiltersView = Backbone.View.extend({

    render: function() {
       var data = {};
       var compiledTemplate = _.template(FiltersTemplate, data);
       return compiledTemplate;
    }
  });

  return FiltersView;

});
