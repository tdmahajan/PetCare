define([
  'underscore',
  'backbone'
], function(_, Backbone){
   
   var TopSellerProduct = Backbone.Model.extend({

    urlRoot: "/TopSellerProducts",
    idAttribute: "_id"

   });
  
  return TopSellerProducts;
  
});

define([
  'underscore',
  'backbone'
], function(_, Backbone){
   
  var TopSellerProducts = Backbone.Collection.extend({

    model: TopSellerProduct,

    url: "/TopSellerProducts"

  });
   
  return TopSellerProducts;
  
});


/*
window.Item = Backbone.Model.extend({

    urlRoot: "/catitems",

    idAttribute: "_id"

});
window.Items = Backbone.Collection.extend({

    model: Item,

    url: "/catitems"

});
window.CartItem = Backbone.Model.extend({

    idAttribute: "_id"

});
window.CartItems = Backbone.Collection.extend({

    model: CartItem,

    localStorage: new Backbone.LocalStorage("NearByShoppingCart")
});
*/




