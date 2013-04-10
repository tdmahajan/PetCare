define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/AddSubmenuBarView.html'
], function($, _, Backbone, AddSubmenuBarTemplate){

 var AddSubmenuBarView = Backbone.View.extend({

    render: function() {
       var data = {};
       var compiledTemplate = _.template(AddSubmenuBarTemplate, data);
       return compiledTemplate;
    }
  });

  return AddSubmenuBarView;

});
