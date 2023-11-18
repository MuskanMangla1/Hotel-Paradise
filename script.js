$(document).ready(function() { 

    // Smooth scrolling for anchor links 

    $('a[href^="#"]').on('click', function(event) { 

      event.preventDefault(); 

   

      var target = $(this.getAttribute('href')); 

      if (target.length) { 

        $('html, body').animate({ 

          scrollTop: target.offset().top 

        }, 1000); 

      } 

    }); 

   

    // Toggle mobile navigation menu 

    $('.menu-toggle').on('click', function() { 

      $('nav ul').toggleClass('show'); 

    }); 

   

    // Form submission 

    $('form').submit(function(event) { 

      event.preventDefault(); 

      // Add your form submission logic here 

    }); 

  }); 