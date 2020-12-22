/*global console $*/
$(document).ready(function () {
    'use strict';
    $(".carousel").carousel({
        interval: 2000
    });
    
    $(".circle-check").click(function () {
        $(".color-option").fadeToggle();   
    });
    
    // Change theme color on click
    
    var colorLi = $(".color-option ul li");
    
    colorLi
         .eq(0).css("backgroundColor","#e41b17").end()
        .eq(1).css("backgroundColor","#ff0").end()
        .eq(2).css("backgroundColor","#00f").end()
        .eq(3).css("backgroundColor","#f0f").end()
        .eq(4).css("backgroundColor","#080");
        
    
    colorLi.click(function () {
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
    });
    
    
    // loading screen
    $(window).load(function () {
        $(".loading-overlay .spinner").fadeOut(5000, function () {
            $(this).parent().fadeOut(2000, function () {
                
                $("body").css("overflow", "auto");
                $(this).remove();
            });
        });
    });
    
    // Caching The Scroll Top Element
    
    var ScrolButton = $("#scroll-Top");
    
    $(window).scroll(function () {
        
        
        
             if ( $(this).scrollTop() >= 700) {
            ScrolButton.show();
        } else { 
ScrolButton.hide();
 }   
         });
            
        ScrolButton.click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, 1000);
        });
   
 
       
    
});