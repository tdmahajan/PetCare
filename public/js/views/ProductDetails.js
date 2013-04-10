define([
  'jquery',
  'underscore',
  'backbone',
  'mustache',
  'models/ProductOptions',
  'text!templates/ProductDetailsView.html'
], function($, _, Backbone, Mustache, ProductOptions, ProductDetailsTemplate){

 var ProductDetailsView = Backbone.View.extend({

    render: function() {

       var items = this.model.models;
       $(this.el).html(Mustache.to_html(ProductDetailsTemplate, items[0].toJSON()));
       var productId = items[0].toJSON()._id;
        
       var productOptions = new ProductOptions();
       productOptions.url = '/ProductOptions/'+ productId;
                     
       productOptions.fetch({success: function(){
          
            var Options = productOptions.model.models;
            for(i = 0; i < Options.length; i++) {
               $(".product_weight",this.el).append("<option>"+Options[i].toJSON().Content+"</option>");
	    }	
	  }
       });

       return this.el;

    }
  });

  return ProductDetailsView;

});
