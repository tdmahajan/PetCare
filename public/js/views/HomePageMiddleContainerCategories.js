define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/HomePageMiddleContainerCategoriesView.html'
], function($, _, Backbone,HomePageMiddleContainerCategoriesTemplate){

 var HomePageMiddleContainerCategoriesView = Backbone.View.extend({

    render: function() {
       var data = {};
       var compiledTemplate = _.template(HomePageMiddleContainerCategoriesTemplate, data);
       return compiledTemplate;
    }
  });

  return HomePageMiddleContainerCategoriesView;

});
