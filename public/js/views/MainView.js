define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/MainView.html',
  'views/Header',
  'lib/menu_aim',
  'views/MiddleContainer',
  'views/Footer',
], function($, _, Backbone, MainTemplate, HeaderView, menu_aim, MiddleContainerView, FooterView){

  var MainView = Backbone.View.extend({
	el: $('body'),
	initialize: function () {
      var b = 0,c = 0;
    },
	render: function(){

	// Using Underscore we can compile our template with data
	var data = {};
	var compiledTemplate = _.template( MainTemplate, data );
	// Append our compiled template to this Views "el"
	this.$el.html(compiledTemplate)

	var headerView = new HeaderView();
	this.$('#outerContainer').append(headerView.render());

    var middleContainerView = new MiddleContainerView();
    this.$('#outerContainer').append(middleContainerView.render());

	var  footerView = new  FooterView();
    this.$('#outerContainer').append(footerView.render());

  },

  });
  // Our module now returns our view
  return MainView;
});
