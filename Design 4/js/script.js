$(document).on('ready', function(){
  "use strict";

  // Header Highlight
  var highlight = $("#owl-highlight");
  highlight.owlCarousel({
      navigation : false,
      pagination : false,
      autoPlay : true,
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
  });

  //instag
  var owl = $("#owl-instag");
  owl.owlCarousel({
      itemsCustom : [
        [0, 2],
        [450, 4],
        [1600, 6]
      ],
      navigation : false,
      pagination : true
  });

  //slider banner 4 content
  var slide4content = $("#owl-slide4content");
  slide4content.owlCarousel({
    items : 3,
    itemsDesktop : [1199,3],
    autoPlay : true,
    navigation : false
  });

  //slider banner 2 content
  var slide2content = $("#owl-slide2content");
  slide2content.owlCarousel({
    items : 2,
    itemsDesktop : [1199,2],
    autoPlay : true,
    navigation : false
  });

  //mobile menu click
  var mmenu = $('.mmenu a');
  var navmenu = $('ul.navmenu');
  mmenu.on('click',function(){
      $(this).toggleClass('opennav');
      navmenu.toggleClass('expand');
      return false;
  });

  //index 4 opensidemenu
  var opensidemenu = $('.opensidemenu');
  var hideonright = $('.hideonright');
  opensidemenu.on('click',function(){
      hideonright.toggleClass('slidein');
      return false;
  });

  //editor pick
  var pickeditor = $("#owl-pickeditor");
  pickeditor.owlCarousel({
      navigation : true,
      pagination : false,
      autoPlay : true,
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
  });

  //blog img hover
  var imgdefault = $('.imgdefault');
  imgdefault.on({
      mouseenter: function () {
        $(this).addClass('imghover');
      },
      mouseleave: function () {
        $(this).removeClass('imghover');
      }
  });

  // Submenu Setup
  var winwidth = $(window).width();
  var submenu = $('ul.submenu');

  if (winwidth > 1199){

      $(".hassubmenu").on({
          mouseenter: function () {
              $(this).addClass('open');
              submenu.addClass('open');
          },
          mouseleave: function () {
              $(this).removeClass('open');
              submenu.removeClass('open');
          }
      });
  }else{
      $(".hassubmenu").on('click',function(){
          $(this).toggleClass('open');
      });
  }

  //grid main home
  var $gridmain = $('.gridmain');
  $gridmain.masonry({
      columnWidth: '.grid-sizer',
      itemSelector: '.grid-item',
      percentPosition: true
  });

  $gridmain.imagesLoaded().progress( function() {
      $gridmain.masonry('layout');
  });

  //grid recent
  var $gridrecent = $('.gridrecent');
  $gridrecent.masonry({
    columnWidth: '.grid-sizer',
    gutter: '.gutter-sizer',
    itemSelector: '.grid-item',
    percentPosition: true
  });

  $gridrecent.imagesLoaded().progress( function() {
    $gridrecent.masonry('layout');
  });

  //navigation when scroll
  if (winwidth > 1199){
  
    $(window).on('scroll', function (e) { 
          var scroll = $(window).scrollTop();
          var winheight = '200';
          var classheader = $('.header');
          var classwrapnav = $('.subheader');
          if (scroll > winheight) {
              classheader.addClass('posab');
              classwrapnav.addClass('fixtop');
          }else{
              classheader.removeClass('posab');
              classwrapnav.removeClass('fixtop');
          }   
    });

  }

  // Setup loaders
  $(window).on('load', function (e) {
        $(".loadcontainer").fadeOut("slow");
  });
   
});