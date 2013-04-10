define([
  'jquery',
  'underscore',
  'backbone',
  'views/SugestionListItem',
  'text!templates/SearchedProductListView.html'
], function($, _, Backbone, SugestionListItemView, SearchedProductListTemplate){

 var SearchedProductListView = Backbone.View.extend({

    	render: function() {
		//$(this.el).empty();
		$(this.el).html(_.template(SearchedProductListTemplate, {}));
		var items = this.model.models;
       		for(i = 0; i < items.length; i++) {
         		var sugestionListItemView = new SugestionListItemView();
         		$('ul.searhedProductList',this.el).append(sugestionListItemView.render(items[i]));
       		};

       	return this.el;
    }
  });

  return SearchedProductListView;

});
