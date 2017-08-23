$('.xsMenu__img').on('click', function(){   
    $('.menu__xs').toggle(100);
});

$('.xsMenuScroll__img').on('click', function(){   
    $('.xsMenuScroll__xs').toggle(100);
});


// Навігація по сайті
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

//  email
let arrEmail = [];
let bool = false;
function validEmail(){
    let email = /^([a-z0-9\.-]{1,}){1,}@([a-z]{1,})\.(ua|com|com\.ua)$/i;
    
    $(".subcrible__input").on("blur",function(){
        if ($(this).val().match(email)){
            $(".subcrible__err").hide();
            $(".subcrible__good").show();
            bool = true;
        } 
        else if ($(this).val() == ' '){
            $(".subcrible__err").show();
            $(".subcrible__good").hide();
            bool = false;
        }
        else{
            $(".subcrible__err").show();
            $(".subcrible__good").hide();
            bool = false;
        }
    });
    
    return bool;
}
validEmail();

// add email
function sendEmail(){
    $('.subcrible__btn').on('click', function(){
        if(validEmail()){
            alert('Success');
            arrEmail.push($(".subcrible__input").val());
            $(".subcrible__input").val('');
            //console.log(arrEmail);
        }else {
            alert('Wrrong email');
        }
    });
} 
sendEmail();


let height = document.documentElement.clientHeight;
let width = document.documentElement.clientWidth + 17;
let heightMenu = height + 120;
//console.log(height);
//console.log(width);
//console.log(window.pageYOffset);

setInterval(scrollMenu, 10);

function scrollMenu (e){
    if (width >= 768){
        //console.log('>768');
        if(window.pageYOffset >= 120) {
            $('.menuScroll').show(100);
            $('.toUp').show(100);
            //console.log('YES');
        }else {
            $('.menuScroll').hide(100);
            $('.toUp').hide(100);
        }
    }else {
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
    }  
}