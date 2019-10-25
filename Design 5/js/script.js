$(window).on("load", function() {
    "use strict";


    /* ============ News Thumbs Carousel ================*/
    $('.carousel').owlCarousel({
        autoplay:true,
        autoplayTimeout:2500,
        smartSpeed:2000,
        loop:false,
        dots:false,
        nav:true,
        margin:30,
        mouseDrag:true,
        items:4,
        autoHeight:true,
        responsive :{
            1200 :{items:4},            
            980 :{items:4},         
            767 :{items:3},            
            480 :{items:3},                
            0 :{items:1}      
        }  
    });

    /* ============ Personalize Dropdown ================*/
    $(".personalize a").on("click",function(){
        $(this).parent().find(".personalize-drop").slideToggle();
        return false;
    });
    $("html").on("click",function(){
        $(".personalize-drop").slideUp();
    });
    $(".personalize-drop").on("click",function(e){
        e.stopPropagation();
    });


    /*=================== Popups ===================*/
    $(".call-popup").on("click",function(){
        var check_id = $(this).attr('href');
        check_id = check_id.replace('#', '');
        $(".popup-wrapper").each(function(){
            if($(this).attr('id') == check_id){
                $(this).fadeIn();
                $("html").addClass("stop-scroll");
                var popup_height = $(window).height();
                var popup_box_height = $(this).find(".popup").height();
                var extra_height = popup_height - popup_box_height;
                if(popup_box_height > popup_height){
                    $(".popup").css({"padding-top":"30px"});
                }
                else{
                    var top_padding = extra_height/2;
                    $(".popup").css({"padding-top":top_padding})
                }
            }
        });

        return false;
    });

    $(".close-popup").on("click",function(){
        $(this).closest('.popup-wrapper').fadeOut();
        $("html").removeClass("stop-scroll");
        return false;
    });


    /*=================== Comment Reply ===================*/
    $(".reply").on("click",function(){
        $(this).closest("li").find('.reply-drop').slideToggle();
        return false;
    });



    $(".responsive-btn").on("click",function(){
        $(this).parent().find("ul").slideToggle();
        return false;
    });

    
});