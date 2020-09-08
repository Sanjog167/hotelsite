let header = document.querySelector('.header');
let hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerMenu.addEventListener('click', function () {
    header.classList.toggle('menu-open');
})

$(function() {
    AOS.init();
  });
  

$('#all_rooms .owl-carousel').owlCarousel({
    
    dots:false,
      loop: true,
     nav:true,
       autoplay: true,
     responsive:{
         0:{
             items:1
         },
         600:{
             items: 2
         },
         1000: {
             items: 3
         }
     }
});



$('#gallery_image .owl-carousel').owlCarousel({
    
    dots:true,
      loop: true,
     nav:false,
       autoplay: true,
     responsive:{
         0:{
             items:1
         },
         600:{
             items: 2
         },
         1000: {
             items: 3
         }
     }
   
});







