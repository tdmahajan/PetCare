define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/MyWishListView.html'
], function($, _, Backbone, MyWishListTemplate){

 var MyWishListView = Backbone.View.extend({

    render: function() {
       var data = {};
       var compiledTemplate = _.template(MyWishListTemplate, data);
       return compiledTemplate;
    }
  });

  return MyWishListView;

});
