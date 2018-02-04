$(document).ready(function() {

    // Навігація по сайту
    function navigationScroll(element) {
        $(element).on('click', function(event) {
            event.preventDefault();
            var id = $(this).attr('href');
            var top = $(id).offset().top;
            $('body, html').animate({
                scrollTop: top
            }, 1000);
        });
    };
    navigationScroll('.toUp a[href="#home"]');
    navigationScroll('.content__more[href="#aboutUs"]');
    navigationScroll('.navScroll a[href="#home"]');
    navigationScroll('.navScroll a[href="#services"]');
    navigationScroll('.navScroll a[href="#portfolio"]');
    navigationScroll('.navScroll a[href="#aboutUs"]');
    navigationScroll('.navScroll a[href="#contactUs"]');
    
    // Section with history image. Img hide/show
    function historyImgDevices() {
        let width = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
        // console.log('width ', width);
        if (width <= 991) {
            $('.history__img--bigDevices').hide();
            $('.history__img--smallDevices').show();
        } else {
            $('.history__img--bigDevices').show();
            $('.history__img--smallDevices').hide();
        }
    }
    setInterval(historyImgDevices, 10);
    
    // Більше історій
    $('.history__img--more').on('click', () => {
         $('.history--more').slideDown('slow');
        $('.history--more').animate({
            
        }, 1000);
        $('.history .history__img--more').hide();
    });
    
    // Скролл
    function deviceAndScroll() {
        //console.log('scroll ', window.pageYOffset);
        //console.log('width ', document.documentElement.clientWidth+17);
        
        // Кнопка toUp при скролі
        if (window.pageYOffset >= 80) {
            $('.toUp').slideDown("easeOutBounce");
        } else {
            $('.toUp').slideUp("easeOutBounce");
        }
        
        // Фіксоване меню при скролі
        if ( document.documentElement.clientWidth+17 <= 767 ) {
            $('.fixedMenu').css({
                position: 'fixed',
                background: 'rgba(0,0,0,1)',
                transition: '.5s',
                padding: '15px 0'
            });
        } else {
            if (window.pageYOffset >= 50) {
                $('.fixedMenu').css({
                    position: 'fixed',
                    background: 'rgba(0,0,0,1)',
                    transition: '.5s',
                    padding: '25px 0'
                });
            } else {
                $('.fixedMenu').css({
                    position: 'absolute',
                    background: 'none',
                    transition: '.5s',
                    padding: '15px 0'
                });
            }   
        }
    }
    setInterval(deviceAndScroll, 10);
    
    // Показати меню на менших екранах
    $('.toggleSmallMenu .fa-bars').on('click', () => {
        $('.toggleSmallMenu .fa-bars').hide();
        $('.toggleSmallMenu .fa-times').show();
        $('.smallMenu').slideDown('slow');
    });
    
    // Приховати меню на менших екранах
    $('.toggleSmallMenu .fa-times').on('click', () => {
        $('.toggleSmallMenu .fa-bars').show();
        $('.toggleSmallMenu .fa-times').hide();
        $('.smallMenu').slideUp('slow');
    });
});