/*global $ */

$(document).ready(function () {
    'use strict';
    
    // Toggle navbar
    
    $(".navbar-toggler").on("click", function () {
        $("nav .one").toggleClass("top");
        $("nav .two").toggleClass("hidden");
        $("nav .three").toggleClass("bottom");
    });
    
    // mixitup;
    
    var mixer = mixitup(".gallery");
    
    // venobox
    
    $(document).ready(function () {
        
    $('.venobox').venobox(); 
        
    });

    $("nav li a").on("click", function () {
        
        // add class active on nav links
        
  $(this).addClass("active").parent().siblings().find("a").removeClass("active");
        $("html, body").animate({
            scrollTop: $("#" + $(this).data("scroll")).offset().top - 80
        }, 1000);
    });
    
    
    $(window).scroll(function () {
       if($(this).scrollTop() >= 1000){
           $(".up").fadeIn()
       }else{
           $(".up").fadeOut()
       }
    })
    
    $(".up").on("click", function(){
        $("html, body").animate({
            scrollTop: 0
        })
    })
    
    // scroll to top;
    /*
    var sscrolTop = (".up");
    
    sscrolTop.on("click", function(){
        $("html, body").animate({
            scrollTop: 0
        }, 1000)
    })
    */
});