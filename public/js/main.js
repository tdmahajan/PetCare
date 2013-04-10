require.config({
  paths: {
    jquery:      'lib/jquery',
    underscore:  'lib/underscore',
    backbone:    'lib/backbone-min',
    templates:   '../tpl',
    bxslider:    'lib/bxslider',
    mustache:    'lib/mustache'
  },

  shim: {
	  'jquery': {
	  		  exports: '$'
	  },
	  'backbone': {
		  //These script dependencies should be loaded before loading
		  //backbone.js
		  deps: ['underscore', 'jquery'],
		  //Once loaded, use the global 'Backbone' as the
		  //module value.
		  exports: 'Backbone'
	  },
	  'underscore': {
		  exports: '_'
	  },
      'bxslider': {
		  //These script dependencies should be loaded before loading
		  //backbone.js
		  deps: ['jquery'],
	  },
  }
});

require([
  // Load our app module and pass it to our definition function
  'app'
], function(App){
  // The "app" dependency is passed in as "App"
  App.initialize();
});
