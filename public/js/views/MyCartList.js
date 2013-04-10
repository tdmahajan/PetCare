define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/MyCartListView.html'
], function($, _, Backbone, MyCartListTemplate){

 var MyCartListView = Backbone.View.extend({

    render: function() {
       var data = {};
       var compiledTemplate = _.template(MyCartListTemplate, data);
       return compiledTemplate;
    }
  });

  return MyCartListView;

});
