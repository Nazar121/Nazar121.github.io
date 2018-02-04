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

navigationScroll('.toUp');
navigationScroll('a[href="#portfolio"]');


// Скролл
$(window).on('scroll', ()=>{
//    console.log($(this).scrollTop());
    if($(this).scrollTop() >= 61){
        $('.toUp').css('opacity',1);
    }else{
        $('.toUp').css('opacity',0);
    }
});


// Портфоліо
let portfolio = [
    {
        name: 'Golden',
        url: 'https://nazar121.github.io/projects/golden/index.html',
        class: 'golden',
        img: 'src/img/portfolio__project4.jpg',
        skills: ['JavaScript','jQuery','Gulp','npm','Bootstrap4','HTML5','CSS3','SASS/SCSS'],
        adaptive: true
    },
    {
        name: 'BWE',
        url: 'https://nazar121.github.io/projects/bwe/index.html',
        class: 'bwe',
        img: 'src/img/portfolio__project1.jpg',
        skills: ['HTML5','CSS3','LESS','Bootstrap3','JavaScript','jQuery'],
        adaptive: true
    },
    {
        name: 'UDG',
        url: 'https://nazar121.github.io/projects/udg/index.html',
        class: 'udg',
        img: 'src/img/portfolio__project2.jpg',
        skills: ['HTML5','CSS3','LESS','Bootstrap3','JavaScript','jQuery'],
        adaptive: true
    },
    {
        name: 'Tinyone',
        url: 'https://nazar121.github.io/projects/tinyone/index.html',
        class: 'tinyone',
        img: 'src/img/portfolio__project3.jpg',
        skills: ['HTML5','CSS3','LESS','Bootstrap3','JavaScript','jQuery'],
        adaptive: true
    }
];

function createPortfolio(){
    portfolio.forEach((obj)=>{
        let result = '';
        result += `
        <div class="col-xs-offset-1 col-xs-10 col-sm-offset-0 col-sm-6 col-md-6 col-lg-4">
            <div class="portfolio__project">
                <img src="${obj.img}" class="project__img" alt="${obj.name}">
                <div class="project__overlay">
                    <div class="${obj.class} overlay__text draw meet" data-toggle="modal" data-target="#overlay__modal">Переглянути роботу</div>
                </div>
            </div>
        </div>`;
        $('.portfolio .row').append(result);
        /*$('.overlay__text').on('click', function(e){
            console.log($(this));
        });*/
    });
}
createPortfolio();


// Даний проект 
let index = null;

$('.portfolio .overlay__text').on('click', function(e){
    let el = $(this)[0].classList;
    for(let i=0; i<portfolio.length; i++){
        for(let j=0; j<el.length; j++){
            if(el[j] === portfolio[i].class){
                index = i;
//                console.log('index = '+index);
//                console.log(portfolio[i].class);
                project();
            }else{
                confirm;
            }
        }
    }
});

function project(){
    // console.log(portfolio[index]);
    
    let result = '';
    
    // записую назву проекта
    $('.modalWindow__title').text(`Проект ${portfolio[index].name}`);
    
    // записую фото проекта
    $('.project__img img').attr('src',portfolio[index].img);
    
    // записую адаптивний проект так/ні
    if (portfolio[index].adaptive){
        $('.info__adaptive').html(`<span>Адаптивний проект</span>: Так.`);
    }else{
        $('.info__adaptive').html(`<span>Адаптивний проект</span>: Ні.`);
    }
    
    // записую технології які використовував
    for(let i=0; i<portfolio[index].skills.length; i++){
        if(i == portfolio[index].skills.length-1){
            result += `<p>${portfolio[index].skills[i]}</p>`;
            break;
        }
        result += `<p>${portfolio[index].skills[i]},</p>`;
    }
    $('.info__tehnology').empty();
    $('.info__tehnology').append(`<span>Використані технології</span>: ${result}.`);
    
    // Записую URL адресу для проекта 
    $('.info__show').attr('href',portfolio[index].url);
}

/*----------------------------------------------------------------*/
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