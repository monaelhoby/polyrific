
    $(document).ready(function(){
        

        $('.nav-item').click(function(){
            $(this).addClass("active")
            $(this).siblings(".nav-item").removeClass("active")
        })

        $('.nav-item-last').click(function(){
            $(this).removeClass("active")
        })

        $('.navbar-nav .dropdown').click(function(){
          $(this).removeClass("active")
      })

        $('.process .owl-carousel').owlCarousel({items: 1});

        $('.owl-carousel2').owlCarousel({
            items: 5,
            loop: true,
            responsive:{
                0:{
                    items:2
                },
                868:{
                    items:4
                },
                1100:{
                    items:5
                }
            }
        });

        $('.carousel').slick({
        slidesToShow: 3,
        dots:false,
        centerMode: true,
        prevArrow: '<a class="slide-arrow prev-arrow"><i class="bi bi-chevron-left"></i></a>',
        nextArrow: '<a class="slide-arrow next-arrow"><i class="bi bi-chevron-right"></i></a>',
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        });

        new WOW().init();
      });
