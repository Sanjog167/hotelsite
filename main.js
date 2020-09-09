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

$("#submit").click(function(){


var name = $("#ifirstName").val();
var lastname = $("#ilastName").val();
var address = $("#iaddress").val();
var city = $("#icity").val();
var postalcode = $("#ipostalCode").val();
var country = $("#icountry").val();
var phone = $("#iphone").val();
var feedback = $("#ifeedback").val();
var card = $("#icard").val();
var email = $("#iemail").val();
var cardNumber = $("#icardNumber").val();
var date = $("#idate").val();


if(name == '' || lastname== '' || email=='' || cardNumber == '' || date == '' || card == '' || address == '' || lastname =='' || city == '' || postalcode=='' || country == '' || phone == '' || feedback == ''){
    swal({
        title: "Fields Empty!",
        text: "Please check the missing fields!",
        icon: "warning",
      });
    }

    else{
        swal({
            title: "Successfully submited!",
            text: "Click Ok to continue",
            icon: "success",
          });
    }


})







