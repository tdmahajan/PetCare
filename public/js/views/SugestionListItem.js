define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/SugestionListItemView.html'
], function($, _, Backbone, SugestionListItemTemplate){

 var SugestionListItemView = Backbone.View.extend({

     render: function(item) {
       
       var compiledTemplate = _.template(SugestionListItemTemplate, item.toJSON());
       return compiledTemplate;
    }
  });

  return SugestionListItemView;

});
