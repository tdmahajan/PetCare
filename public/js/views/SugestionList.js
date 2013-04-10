define([
  'jquery',
  'underscore',
  'backbone',
  'views/SugestionListItem',
  'text!templates/SugestionListView.html'
], function($, _, Backbone, SugestionListItemView, SugestionListTemplate){

 var SugestionListView = Backbone.View.extend({
    render: function() {
	$(this.el).empty();
       	$(this.el).html(_.template(SugestionListTemplate, {}));
       //var compiletemplate = _.template(SugestionListTemplate, {});

       var items = this.model.models;

       for(i = 0; i < items.length; i++) {

         var sugestionListItemView = new SugestionListItemView();

         $('ul.sugestionList',this.el).append(sugestionListItemView.render(items[i]));

       };

       return this.el;

    }
  });

  return SugestionListView;

});
