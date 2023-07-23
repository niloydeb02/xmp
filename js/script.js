// reaction button

$(document).ready(function(){

var mixer = mixitup('#con_pr', {
     animation: {
        duration: 300
    }
});


  $('.wrapper').slick({
         infinite: true,
         speed: 300,
         slidesToShow: 2,
         centerMode: true,
        
        nextArrow: '.next_icon',
        prevArrow: '.prev_icon',


          responsive: [
    {
      breakpoint: 991,
      settings: {
         arrows: false,
        centerMode: true,
        
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 767,
      settings: {
         arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {

      breakpoint: 575,
      settings: {
      	arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
   
  ]
});
         
     

});