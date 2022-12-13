$(function() {

  $(".hamburger").click(function(){
    $('.header_hidden').toggleClass("hidden_show")
    $('.dark').toggleClass("dark_show")
  });

  $(".header_close_box").click(function(){
    $('.header_hidden').toggleClass("hidden_show")
    $('.dark').toggleClass("dark_show")
  });

  $(".screen_button").click(function(){
    $('.test').toggleClass("test_start")
    $('.dark').toggleClass("dark_show")
  });
});