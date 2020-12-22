/*global $, console*/

$(function () {
    'use strict';

    console.log($(".navbar").height());
    console.log($(window).scrollTop());

    var navbar = $(".navbar");

    $(window).scroll(function () {

         $(window).scrollTop() >= navbar.height() ? navbar.addClass("scrolled") :
         navbar.removeClass("scrolled");
        });

        // Deal With Tabs

        $(".tab-switch li").click(function () {

        // Add Selected Class To Active line
          $(this).addClass("selected").siblings().removeClass("selected");
          // Hide All Divs
          $(".tabs-section .tabs-content > div").hide();
          // Show Div Connected With This line
          $("." + $(this).data("class")).show();
        })

        
});
