$(document).ready(function() {
    
    var width = document.documentElement.clientWidth;
    
    //  menu mousemove
    $('.mav__menu li').on('mousemove',function(event){
        var index = $(this).index();
        for(var i=0; i < $('.mav__menu').children().length; i++){
            if($('.mav__menu li a')[i].className == 'a__active'){
                $('.mav__menu li a')[i].classList.remove("a__active");
                $('.mav__menu li a')[index].classList.add('a__active');
                //$('.mav__menu li a')[0].classList.add('a__active');
            }
        }
    }); 
    
    
    // mobile menu 
    
    $('.mobile__show').on('click',function(){
        $('.header').css({
            background: 'url(./src/img/open__menu.png) no-repeat',
            'background-size': 'cover',
            //'transition': '0.2s'
        });
        
        $('.header__title').css({
            display: 'none'
        });
        
        $(this).hide(200);
        
        $('.mobile__hide').css({
            display: 'block'
        });
        
        $('.mobile__menu').css({
            display: 'flex',
            transition: '0.5s'
        });
    });
    
    $('.mobile__hide').on('click',function(){
        $('.header').css({
            background: 'url(./src/img/header__bg.png) no-repeat',
            'background-size': 'cover',
            'transition': '0.1s'
        });

        $('.header__title').css({
            display: 'block'
        });

        $(this).hide(200);

        $('.mobile__show').css({
            display: 'block'
        });

        $('.mobile__menu').css({
            display: 'none',
            transition: '0.5s'
        });
    });
    
    /* mousemove and mouseout on section. Style title*/
    function titleMove(block, elem){
        $(block).on('mousemove', function(){
            $(elem).css({
                color: 'rgb(190,214,47)',
                transition: '1s'
            });
        });
    }    
        
    titleMove('.content__who','.who__title p');
    titleMove('.content__project','.project__title p');
    titleMove('.content__news','.news__nTitle p');
    titleMove('.top__contact','.contact__contactTitle p');
    titleMove('.contact__write','.write__writeTitle p');
    
    function titleOut(block, elem){
        $(block).on('mouseout', function(){
            $(elem).css({
                color: '#414042',
                transition: '1s'
            });
        });
    } 
    
    titleOut('.content__who','.who__title p');
    titleOut('.content__project','.project__title p');
    titleOut('.content__news','.news__nTitle p');
    titleOut('.top__contact','.contact__contactTitle p');
    titleOut('.contact__write','.write__writeTitle p');
    
    
    /* mousemove and mouseout on section. Style more*/
    function moreMove(block, elem){
        $(block).on('mousemove', function(){
            $(elem).css({
                border: 'none',
                color: 'rgb(190,214,47)',
                transition: '1s'
            });
        });
    }
    moreMove('.text__more','.more__text, .more__arrow');
    moreMove('.title__see','.see__text, .see__arrow');
    
    function moreOut(block, elem1, elem2){
        $(block).on('mouseout', function(){
            $(elem1).css({
                'border-bottom': '1px solid #439c92',
                color: '#439c92',
                transition: '1s'
            });
            $(elem2).css({
                color: '#439c92',
                transition: '1s'
            });
        });
    }
    moreOut('.text__more','.more__text','.more__arrow');
    moreOut('.title__see','.see__text','.see__arrow');
    
    
    /* mousemove and mouseout on project block amd btn more. Style*/
    function projectBlockMove(block, btn,width,hover,center,title){
        $(block).on('mousemove', function(){
            $(this).css({
                'box-shadow': '0px 0px 37px 0px rgba(0,0,0,0.5)'
            });
            if (width >= 768 || width >= 992 || width >= 1200){
                $(this).stop(true).queue('fx', function() {
                $(this).animate({
                    top: '-7px',
                    left: '-7px',
                    width: '364px',
                    height: '364px',
                    cursor: 'pointer'
                }, 300)
                    .dequeue('fx');
                });
                $(hover).stop(true).queue('fx', function() {
                    $(this).animate({
                        top: '0',
                        left: '0',
                    }, 300)
                        .dequeue('fx');
                });
                $(center).css({
                    opacity:'0'
                });
                $(title).css({
                    'border-bottom':'1px solid #7dbe1f'
                });
                }
            else {
                $(this).stop(true).queue('fx', function() {
                    $(this).animate({
                        top: '-5px',
                        left: '-5px',
                        width: '300px',
                        height: '376px'
                    }, 300)
                        .dequeue('fx');
                });
                $(hover).stop(true).queue('fx', function() {
                    $(this).animate({
                        height: '380px',
                        top: '0',
                        left: '0',
                    }, 300)
                        .dequeue('fx');
                });
                $(center).css({
                    opacity:'0'
                });
                $(title).css({
                    'border-bottom':'1px solid #7dbe1f'
                });
            }
            
            $(btn).css({
                'background': 'none',
                'border': '1px solid #439c92'
            });

            $(btn).on('mousemove',function(){
                $(btn).css({
                    width: '120px',
                    height: '32px',
                    'line-height': '32px'
                });
            });
            $(btn).on('mouseout',function(){
                $(btn).css({
                    width: '110px',
                    height: '26px',
                    'line-height': '26px'
                });
            });
        });
    }
    
    projectBlockMove('.desc__block1','.block1__more',document.documentElement.clientWidth,'.desc__block1 .hover','.desc__block1 .center','.block1__title p');
    projectBlockMove('.desc__block2','.block2__more',document.documentElement.clientWidth,'.desc__block2 .hover','.desc__block2 .center','.block2__title p');
    projectBlockMove('.desc__block3','.block3__more',document.documentElement.clientWidth,'.desc__block3 .hover','.desc__block3 .center','.block3__title p');
    projectBlockMove('.desc__block4','.block4__more',document.documentElement.clientWidth,'.desc__block4 .hover','.desc__block4 .center','.block4__title p');
    
    function projectBlockOut(block,btn,width,hover,center,title){
        $(block).on('mouseout', function(){
            $(this).css({
                'box-shadow': 'none'
            });
            if (width >= 768 || width >= 992 || width >= 1200){
                $(this).stop(true).queue('fx', function() {
                $(this).animate({
                    top: '0',
                    left: '0',
                    width: '350px',
                    height: '350px'
                }, 300)
                    .dequeue('fx');
            });
                $(hover).stop(true).queue('fx', function() {
                    $(this).animate({
                        top: '400px',
                        left: '0',
                    }, 200)
                        .dequeue('fx');
                });
                $(center).css({
                    opacity:'1'
                });
                $(title).css({
                    'border-bottom':'none'
                });
                }
            else {
                $(this).stop(true).queue('fx', function() {
                    $(this).animate({
                        top: '0',
                        left: '0',
                        width: '290px',
                        height: '366px'
                    }, 300)
                        .dequeue('fx');
                });
                $(hover).stop(true).queue('fx', function() {
                    $(this).animate({
                        top: '400px',
                        left: '0',
                    }, 200)
                        .dequeue('fx');
                });
                $(center).css({
                    opacity:'1'
                });
                $(title).css({
                    'border-bottom':'none'
                });
            }
            $(btn).css({
                'background': '#439c92',
                'border': 'none'
            });
        });
    }

    projectBlockOut('.desc__block1','.block1__more',document.documentElement.clientWidth,'.desc__block1 .hover','.desc__block1 .center','.block1__title p');
    projectBlockOut('.desc__block2','.block2__more',document.documentElement.clientWidth,'.desc__block2 .hover','.desc__block2 .center','.block2__title p');
    projectBlockOut('.desc__block3','.block3__more',document.documentElement.clientWidth,'.desc__block3 .hover','.desc__block3 .center','.block3__title p');
    projectBlockOut('.desc__block4','.block4__more',document.documentElement.clientWidth,'.desc__block4 .hover','.desc__block4 .center','.block4__title p');
    
    
    /* mousemove and mouseout on news block amd btn more. Style*/
    function newsBlockMove(block, link, width){
        $(block).on('mousemove', function(){
            $(this).css({
                'box-shadow': '0px 0px 37px 0px rgba(0,0,0,0.5)'
            });
            if (width >= 768 || width >= 992 || width >= 1200){
                $(this).stop(true).queue('fx', function() {
                $(this).animate({
                    top: '-10px',
                    left: '-5px',
                    width: '360px',
                    height: '552px'
                }, 300)
                    .dequeue('fx');
            });
            }
            else {
                $(this).stop(true).queue('fx', function() {
                    $(this).animate({
                        top: '-10px',
                        left: '-5px',
                        width: '300px',
                        height: '560px'
                    }, 300)
                        .dequeue('fx');
                });
            }
            
            $(link).on('mousemove',function(){
                $(this).css({
                    color: 'rgb(190,214,47)',
                    'border-bottom': 'none',
                    transition: '1s'
                });
            });
            $(link).on('mouseout',function(){
                $(this).css({
                    color: '#439c92',
                    'border-bottom': '1px solid #439c92',
                    transition: '1s'
                });
            });
            
        });
    }
    newsBlockMove('.newsBlock__block','.autor__pib',document.documentElement.clientWidth);
    
    function newsBlockOut(block, width){
        $(block).on('mouseout', function(){
            $(this).css({
                'box-shadow': '0px 0px 10px 0px rgba(0,0,0,0.5)'
            });
            if (width >= 768 || width >= 992 || width >= 1200){
            $(this).stop(true).queue('fx', function() {
                $(this).animate({
                    top: '0',
                    left: '0',
                    width: '350px',
                    height: '532px'
                }, 300)
                    .dequeue('fx');
            });
            }
            else {
                $(this).stop(true).queue('fx', function() {
                    $(this).animate({
                        top: '0',
                        left: '0',
                        width: '290px',
                        height: '540px'
                    }, 300)
                        .dequeue('fx');
                });
            }
        });
    }
    newsBlockOut('.newsBlock__block',document.documentElement.clientWidth);
    
    
    /* focus and blur on input amd btn . Style*/
    function inputFocus(block, elem){
        $(block).on('focus',function(){
            $(elem).css({
                opacity: '1'
            });
        });
    }
    
    inputFocus('.nameBlock__input','.nameBlock__text');
    inputFocus('.nameBlock2__input','.nameBlock2__text');
    inputFocus('.messBlock__area','.messBlock__text');
    
    function inputBlur(block, elem){
        $(block).on('blur',function(){
            $(elem).css({
                opacity: '0'
            });
        });
    }

    inputBlur('.nameBlock__input','.nameBlock__text');
    inputBlur('.nameBlock2__input','.nameBlock2__text');
    inputBlur('.messBlock__area','.messBlock__text');
    
    

    
    
        
    
});