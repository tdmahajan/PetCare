define([
 'lib/bootstrap',
 'bxslider',
 'views/MainView',
 'views/Slider',
 'views/HomePageMiddleContainerCategories',
 'views/SugestionList',
 'views/MyCartList',
 'views/MyWishList',
 'views/PlaceOrderForm',
 'views/Filters',
 'views/AddSubmenuBar',
 'views/SearchedProductList',
 'views/ProductDetails',
 'models/TopSellerProducts',
 'models/ProductList',
 'models/ProductDetails',
], function(bootstrap, Bxslider, MainView, SliderView, HomePageMiddleContainerCategoriesView, SugestionListView, MyCartListView, MyWishListView, PlaceOrderFormView, FiltersView, AddSubmenuBarView, SearchedProductListView, ProductDetailsView, TopSellerProducts, ProductList, ProductDetails){
	var AppRouter = Backbone.Router.extend({

		routes: {
	    ""                       : "homePage",
		"mycart"                 : "mycart",
		"mywishlist"             : "mywishlist",
		"category/:catid"        : "catSearch",
		"product/:prodid"        : "prod_details",
	   	},

	   	initialize: function (){}
	});

	var initialize = function(){

		var app_router = new AppRouter;

	    	app_router.on('route:homePage', function(){
			$('body').empty();
			var mainView = new MainView();
			mainView.render();

			var sliderView = new SliderView();
			$('.middleContainer').html(sliderView.render());
			$('#slider').bxSlider({
				   adaptiveHeight: true,
				   mode: 'fade',
				   auto: true
			});

			var homePageMiddleContainerCategoriesView = new HomePageMiddleContainerCategoriesView();
			$('.middleContainer').append(homePageMiddleContainerCategoriesView.render());
                        
                        var topSeller = new TopSellerProducts(); 
                        topSeller.fetch({success: function(){
       	                   $('.middleContainer').append(new SugestionListView({model: topSeller}).render());
                          }
                        });
		});

		app_router.on('route:mycart', function(){
			$('body').empty();
			var mainView = new MainView();
			mainView.render();

			var myCartListView = new MyCartListView();
			$('.middleContainer').append(myCartListView.render());

			var placeOrderFormView = new PlaceOrderFormView();
			$('.middleContainer').append(placeOrderFormView.render());
		});

		app_router.on('route:mywishlist', function(){
			$('body').empty();
			var mainView = new MainView();
			mainView.render();

			var myWishListView = new MyWishListView();
			$('.middleContainer').append(myWishListView.render());
		});

		app_router.on('route:catSearch', function(cat){
			$('body').empty();
			var mainView = new MainView();
			mainView.render();

			var filtersView = new FiltersView();
			$('.middleContainer').append(filtersView.render());

			var addSubmenuBarView = new AddSubmenuBarView();
			$('.middleContainer').append(addSubmenuBarView.render());
			
			var productList = new ProductList(); 
			productList.url = '/ProductsByCategory/'+ cat;

                        productList.fetch({success: function(){
       	                   $('.middleContainer').append(new SearchedProductListView({model: productList}).render());
                          }
                        });

			/*
			var searchedProductListView = new SearchedProductListView();
			$('.middleContainer').append(searchedProductListView.render());
			*/

		});

		app_router.on('route:prod_details', function(prod){
			$('body').empty();
			var mainView = new MainView();
			mainView.render();

			var productDetails = new ProductDetails(); 
			productDetails.url = '/ProductDetail/'+ prod;
                          

                        productDetails.fetch({success: function(){
                           $('.middleContainer').append(new ProductDetailsView({model: productDetails}).render());
                          }
                        });

			//var sugestionListView = new SugestionListView();
			//$('.middleContainer').append(sugestionListView.render());
		});
		Backbone.history.start();
 	}

	 return {

	     initialize: initialize
	 };
});
