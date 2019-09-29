$(document).ready(function () {
    //Dropdown
    $(".dropdown_arrow").click(function () {
        $(".dropdown_list").toggleClass("d-none");
    });
    $("main").click(function () {
        $(".dropdown_list").addClass("d-none");
    });

    //OWL Carousel
    $('.main-content .owl-carousel').owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        rtl:true,
        dots:true,
        navText: [
            '<img src="img/Right_arrow.png" alt="" class="arrow">',
            '<img src="img/Left_arrow.png" alt="" class="arrow">'
        ],
        navContainer: '.main-content .custom-nav',
        responsive:{
            0:{
                items: 1,
                nav:false
            },
            600:{
                items: 1,
                nav:false

            },
            1000:{
                items: 1
            }
        }
    });
    $('.main-content-two #owl_two').owlCarousel({
        loop: false,
        margin: 15,
        nav: true,
        rtl:true,
        dots:true,
        navText: [
            '<img src="img/Left_bottom.png" alt="" class="arrow_min">',
            '<img src="img/Right_bottom.png" alt="" class="arrow_min">'

        ],
        navContainer: '.main-content-two .custom-nav',
        responsive:{
            0:{
                items: 1,
                nav:false

            },
            600:{
                items: 2
            },
            1000:{
                items: 4
            }
        }
    });
});