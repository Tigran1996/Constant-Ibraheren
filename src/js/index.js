$(document).ready(function () {
    $('.see_password').on('click', function () {
        if($(this).siblings(".pass1").attr('type') === "password"){
            $(this).siblings(".pass1").attr('type', 'text');
        }else{
            $(this).siblings(".pass1").attr('type', 'password')
        }
    });

//     //Dropdown
//     $('.dropdown').on('show.bs.dropdown', function(e){
//         $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
//     });
//
// // ADD SLIDEUP ANIMATION TO DROPDOWN //
//     $('.dropdown').on('hide.bs.dropdown', function(e){
//         $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
//     });

    //dropdown menu
    $(".dropdown").on("click",function () {
        $(this).toggleClass("clicked");
    });
    $("section,footer").on("click",function () {
        $(".dropdown").removeClass("clicked");
    });

    var origin   = window.location.origin+window.IMAGE_FOLDER;

    //OWL Carousel
    $('.main-content .owl-carousel').owlCarousel({
        loop: false,
        margin: 10,
        nav: false,
        rtl:true,
        dots:true,
        responsive:{
            0:{
                items: 1,
                nav:false,
                autoHeight: true
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
        margin: 10,
        nav: true,
        rtl:true,
        dots:true,
        navText: [
            '<img src="'+origin+ 'Left_bottom.png" alt="" class="arrow_min">',
            '<img src="'+origin+'Right_bottom.png" alt="" class="arrow_min">'

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
    $("#myform").validate();
    $(".valid-login").validate({
        errorPlacement: function(error, element) {
            $(element).closest('.error_append').append(error);
        },
        rules: {
            'entry[email]': {
                required: true,
                email: true
            },
            password : {
                minlength :8
            }
        }
    });
    $(".password-recovery").validate({
        errorPlacement: function(error, element) {
            $(element).closest('.error_append').append(error);
        },
        rules: {
            password : {
                minlength : 5
            },
            password_confirm : {
                minlength : 5,
                equalTo : "#pass1"
            }
        }
    });

    $(".valid-login input").on("blur",function () {
        if ($(this).hasClass("valid")){
            $(this).parent(".input").addClass("valid-inp");
        }else{
            $(this).parent(".input").removeClass("valid-inp");

        }
    });

    $(".password-recovery #Password2").on("blur",function () {
        if ($(this).hasClass("valid")){
            $(this).parent(".input").addClass("valid-inp");
        }else{
            $(this).parent(".input").removeClass("valid-inp");

        }
    });
});

//progress
xhr.upload.onprogress = function(event) {
    alert( 'Загружено на сервер ' + event.loaded + ' байт из ' + event.total );
};

xhr.upload.onload = function() {
    alert( 'Данные полностью загружены на сервер!' );
};

xhr.upload.onerror = function() {
    alert( 'Произошла ошибка при загрузке данных на сервер!' );
};
xhr.onprogress = function(event) {
    alert( 'Получено с сервера ' + event.loaded + ' байт из ' + event.total );
};

document.forms.upload.onsubmit = function() {
    var input = this.elements.myfile;
    var file = input.files[0];
    if (file) {
        upload(file);
    }
    return false;
};