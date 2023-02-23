//typing script
var typed = new Typed(".typing",{
    strings:[ "Frontend Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
}) 

//highlight nav-items on scroll
$(window).on("scroll", function (event) {
  var $scrollPos = $(document).scrollTop(),
      $links = $('.nav li a');
  $links.each(function () {
      var $currLink = $(this),
          $refElement = $($currLink.attr("href"));
      if ($refElement.position().top <= $scrollPos + 100 && $refElement.position().top + $refElement.height() > $scrollPos) {
          $links.removeClass("active").blur();
          $currLink.addClass("active");
      } else {
          $currLink.removeClass("active");
      }
  });

});


//Show menu toggler on small screens

$(document).ready(function() {
  $('#menu').click(function() {
      $('.aside').toggleClass('toggle');
      if ($('#menu').hasClass('fa-bars')) {
          $('#menu').removeClass('fa-bars').addClass('fa-times').text('');
      } else {
          $('#menu').removeClass('fa-times').addClass('fa-bars').text('');
      }
  });

});

//Hide logo on scroll

$(function() {

    $(window).scroll(function() {
      var x = $(window).scrollTop();
  
      if (x >= 42) {
        $(".home-logo").hide();
      } else {
        $(".home-logo").show();
      }
  
    });
  
  });


//Testimonail slider js
$(document).ready(function(){
  $('.testimonial-content').owlCarousel({
    loop:true,
    nav:false,
    dots:true,
    margin:50,
    autoplay:true,
    autoplayTimeout:4000,
    smartSpeed:800,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})
});


//Email send script
function sendEmail(){
  Email.send({
    Host : "smtp.gmail.com",
    Username : "austinmwaramu@gmail.com",
    Password : "mwanamziki1995",
    To : 'blackbuddy54@gmail.com',
    From : document.getElementById("email").value,
    Subject : "Contact Form EnquIry",
    Body : "Name: " + document.getElementById("name").value
    + "<br> Email: " + document.getElementById("email").value
    + "<br> Message: " + document.getElementById("message").value
  }).then(
  message => alert("Thank you for contacting me!")
  );
}

