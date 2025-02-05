
(function($) {
  
  "use strict";  

  $(window).on('load', function() {

  /*Page Loader active
    ========================================================*/
    $('#preloader').fadeOut();

  // Sticky Nav
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 200) {
            $('.scrolling-navbar').addClass('top-nav-collapse');
        } else {
            $('.scrolling-navbar').removeClass('top-nav-collapse');
        }
    });

    /* ==========================================================================
       countdown timer
       ========================================================================== */
     jQuery('#clock').countdown('2025/03/15',function(event){
      var $this=jQuery(this).html(event.strftime(''
      +'<div class="time-entry days"><span>%-D</span> Days</div> '
      +'<div class="time-entry hours"><span>%H</span> Hours</div> '
      +'<div class="time-entry minutes"><span>%M</span> Minutes</div> '
      +'<div class="time-entry seconds"><span>%S</span> Seconds</div> '));
    });
    
    /* slicknav mobile menu active  */
    $('.mobile-menu').slicknav({
        prependTo: '.navbar-header',
        parentTag: 'liner',
        allowParentLinks: true,
        duplicate: true,
        label: '',
      });

      /* WOW Scroll Spy
    ========================================================*/
     var wow = new WOW({
      //disabled for mobile
        mobile: false
    });
    wow.init();

    /* Nivo Lightbox 
    ========================================================*/
    $('.lightbox').nivoLightbox({
        effect: 'fadeScale',
        keyboardNav: true,
      });

    // one page navigation 
    $('.navbar-nav').onePageNav({
            currentClass: 'active'
    }); 

    /* Back Top Link active
    ========================================================*/
      var offset = 200;
      var duration = 500;
      $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
          $('.back-to-top').fadeIn(400);
        } else {
          $('.back-to-top').fadeOut(400);
        }
      });

      $('.back-to-top').on('click',function(event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: 0
        }, 600);
        return false;
      });

  });      

}(jQuery));


window.addEventListener("load", function() {
  setTimeout(() => {
      document.getElementById("loader").style.display = "none";
  }, 5000);
});

gsap.to("#loader img", {
  top: -369,
  left: -621,
  opacity: 1,   
  duration: 4,
  ease: "power2.out",
  delay: 1 // Start animation after 1 second
})

gsap.to("#loader", {
  
  opacity: 0,   
  duration: 5,
  ease: "power2.out",
 delay:1.5
})

gsap.registerPlugin(ScrollTrigger);

gsap.from(".s1", {
  x: "100vw",  // Start completely off-screen (right)
  opacity: 0,  // Start hidden
  duration: 1.5,
  ease: "power2.out",
  scrollTrigger: {
      trigger: ".s1",   // Element that triggers animation
      start: "top 87%", // Start when image enters viewport
      end: "top 50%",   // End at 50% of viewport
      scrub: true,     // No smooth scroll effect
      markers: false     // Shows start/end markers (for debugging)
    
  }
});

gsap.from(".s2", {
  x: "-100vw",  // Start completely off-screen (right)
  opacity: 0,  // Start hidden
  duration: 1.5,
  ease: "power2.out",
  scrollTrigger: {
      trigger: ".s2",   // Element that triggers animation
      start: "top 87%", // Start when image enters viewport
      end: "top 50%",   // End at 50% of viewport
      scrub: true,     // No smooth scroll effect
      markers: false     // Shows start/end markers (for debugging)
    
  }
});