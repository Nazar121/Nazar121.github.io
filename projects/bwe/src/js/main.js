// Наведення на елементи в блоці сервіс
function servicesMove (block, elem){
    $(block).on('mousemove', function(){
        $(elem).stop(true).queue('fx', function() {
        $(this).animate({
            opacity: 1
        }, 1)
            .dequeue('fx');
        });
    });
}
servicesMove ('.services__blockCom', '.block__pos1-com');
servicesMove ('.services__blockDom', '.block__pos1-dom');
servicesMove ('.services__blockInd', '.block__pos1-ind');


// Втрата фокусу з елементів в блоці сервіс
function servicesOut (block, elem){
    $(block).on('mouseout', function(){
        $(elem).stop(true).queue('fx', function() {
        $(this).animate({
            opacity: 0,
        }, 10)
            .dequeue('fx');
        });
    });
}
servicesOut ('.services__blockCom', '.block__pos1-com');
servicesOut ('.services__blockDom', '.block__pos1-dom');
servicesOut ('.services__blockInd', '.block__pos1-ind');


// Навігація по сайту
function navigationScroll(element) {
    $(element).on('click', function(event) {
        event.preventDefault();
        var id = $(this).attr('href');
        var top = $(id).offset().top;
        $('body, html').animate({
            scrollTop: top
        }, 1500);
    });
};

navigationScroll('.toUp');
navigationScroll('.header__menu a[href="#services"]');
navigationScroll('.header__menu a[href="#about"]');
navigationScroll('.header__menu a[href="#reviewes"]');
navigationScroll('.header__menu a[href="#contact"]');
navigationScroll('.header__menu a[href="#wrapper"]');
navigationScroll('.sm__toggleMenu a[href="#services"]');
navigationScroll('.sm__toggleMenu a[href="#about"]');
navigationScroll('.sm__toggleMenu a[href="#reviewes"]');
navigationScroll('.sm__toggleMenu a[href="#contact"]');
navigationScroll('.sm__toggleMenu a[href="#wrapper"]');


// Скролл меню
let height = document.documentElement.clientHeight;
let width = document.documentElement.clientWidth + 17;
let heightMenu = height + 120;
//console.log(height);
//console.log(width);
//console.log(window.pageYOffset);

setInterval(scrollMenu, 10);

function scrollMenu (e){
    if (width >= 1200){
        if(window.pageYOffset >= 801) {
            $('.header__menuPosition').css({
                position: 'fixed',
                top: 0,
                left: 0,
                height: '50px'
            });
        }else {
            $('.header__menuPosition').css({
                position: 'absolute',
                bottom: 0,
                left: 0,
                top: '94%',
                height: '50px'
            });
        }
    }else if (width >= 992 && width < 1200){
        if(window.pageYOffset >= 615) {
            $('.header__menuPosition').css({
                position: 'fixed',
                top: 0,
                left: 0,
                height: '50px'
            });
        }else {
            $('.header__menuPosition').css({
                position: 'absolute',
                bottom: 0,
                left: 0,
                top: '92.4%',
                height: '50px'
            });
        }
    }/*else {
        console.log('<768');
        //$('.menuScroll').show(100);
        if(window.pageYOffset >= 120) {
            $('.menuScroll').show(100);
            $('.toUp').show(100);
            //console.log('YES');
        }else {
            $('.menuScroll').hide(100);
            $('.toUp').hide(100);
        }
    } */ 
}

/*setInterval(function(){
    console.log(window.pageYOffset);
}, 10);*/


// Валідація форми
//  email
let arrUser = [];
let boolEmail = false;
let boolName = false;
function validEmail(){
    let email = /^([a-z0-9\.-]{1,}){1,}@([a-z]{1,})\.(ua|com|com\.ua)$/i;
    
    $(".contact__inputEmail").on("blur",function(){
        if ($(this).val().match(email)){
            $(".contact__err2").hide();
            $(".contact__good2").show();
            boolEmail = true;
        } 
        else if ($(this).val() == ' '){
            $(".contact__err2").show();
            $(".contact__good2").hide();
            boolEmail = false;
        }
        else{
            $(".contact__err2").show();
            $(".contact__good2").hide();
            boolEmail = false;
        }
    });
    
    return boolEmail;
}
validEmail();

//  name
function validName(){
    let regName = /^([a-z]+)$/i;
    
    $('.contact__inputName').on('blur',function(){
        if ($(this).val().match(regName)){
            $(".contact__err").hide();
            $(".contact__good").show();
            boolName = true;
        } 
        else if ($(this).val() == ' '){
            $(".contact__err").show();
            $(".contact__good").hide();
            boolName = false;
        }
        else{
            $(".contact__err").show();
            $(".contact__good").hide();
            boolName = false;
        }
    });
    
    return boolName;
}
validName();

// add sendMess
function sendEmail(){
    $('.contact__sendMes').on('click', function(){
        if(validEmail() && validName){
            alert('Success');
            let obj = {};
            obj.name = $('.contact__inputName').val();
            obj.emaile = $('.contact__inputEmail').val();
            obj.massage = $('.contact__inputMessage').val();
            arrUser.push(obj);
            $('.contact__inputName').val('');
            $('.contact__inputEmail').val('');
            $('.contact__inputMessage').val('');
            $(".contact__good").hide();
            $(".contact__good2").hide();
        }else {
            alert('Wrrong data');
        }
    });
} 
sendEmail();


// mobile menu
$('.top__openMenu').on('click', function(){
    $(this).hide();
    $('.top__closeMenu').show();
    $('.sm__toggleMenu').show(50);
});

$('.top__closeMenu').on('click', function(){
    $(this).hide();
    $('.top__openMenu').show();
    $('.sm__toggleMenu').hide(50);
});