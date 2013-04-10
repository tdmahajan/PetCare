define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/HeaderView.html'
], function($, _, Backbone, HeaderTemplate){

 var HeaderView = Backbone.View.extend({

    render: function() {
       var data = {};
       $(this.el).html(_.template(HeaderTemplate, data));
       //var compiledTemplate = _.template(HeaderTemplate, data);
       return this.$el;
    },
   events: {
        "click  #signIn" : "signinClick",
        "mouseenter .shopByCat": "shopByCatMouseenter",
        "click .closebtn" : "closebtnClick",
	"mouseleave .shopByCatDiv" : "shopByCatDivMouseleave",
	"mouseenter .searchContainer" : "shopByCatDivMouseleave",
        "click .signInContainer div.a" : "signInContainerClick",
    },

    signinClick: function() {

		if($('.signInContainer').css('display')=='none'){
			$('#signIn').addClass('hoverSignindiv');
			$('span','#signIn').addClass('hoverSignindiv');
			$('.downArrow','#signIn').addClass( "background-position" );
			//$('.signInContainer').slideDown('medium', function() {});
			$('.signInContainer').removeClass('hide');
		}
		else{
			//$('.signInContainer').slideUp('slow', function() {});
			$('.signInContainer').addClass('hide');
			$('#signIn').removeClass('hoverSignindiv');
			$('.downArrow','#signIn').removeClass( "background-position" );
			$('span','#signIn').removeClass('hoverSignindiv');
		}
    },

   signInContainerClick: function(event){
			$(event.target).parent().removeClass('opacity');
			$(event.target).parent().siblings('.a').addClass('opacity');
   },

   closebtnClick: function(){
			$('.signInContainer').addClass('hide');
			$('#signIn').removeClass('hoverSignindiv');
			$('#signIn span').removeClass('hoverSignindiv');
			$('#signIn .downArrow').removeClass( "background-position" );
   },

   shopByCatMouseenter: function(){
			$('.shopByCat').addClass('hoverSignindiv');
			$('span','.shopByCat').addClass('hoverSignindiv');
			$('.downArrow','.shopByCat').addClass( "background-position" );
			//$('.shopByCatContainer').slideDown('medium', function() {});
			$('.shopByCatContainer').removeClass('hide');
   },

   shopByCatDivMouseleave: function(){
			$('.shopByCatContainer').addClass('hide');
			$('.shopByCat').removeClass('hoverSignindiv');
			$('.downArrow','.shopByCat').removeClass( "background-position" );
			$('span','.shopByCat').removeClass('hoverSignindiv');
   },

  });

  return HeaderView;

});
