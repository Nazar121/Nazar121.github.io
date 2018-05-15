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
$(window).on('scroll', function (event) {
//    console.log($(this).scrollTop());
    if($(this).scrollTop() >= 61){
        $('.toUp').css('opacity',1);
    }else{
        $('.toUp').css('opacity',0);
    }
});


const technologies = {
    js: {
        name: 'JavaScript',
        img: 'dist/img/technologies/js.svg',
    },
    ts: {
        name: 'TypeScript',
        img: 'dist/img/technologies/ts.svg',
    },
    angular: {
        name: 'Angular5',
        img: 'dist/img/technologies/angular.svg',
    },
    redux: {
        name: 'Redux',
        img: 'dist/img/technologies/redux.svg',
    },
    firebase: {
        name: 'Firebase',
        img: 'dist/img/technologies/firebase.svg',
    },
    git: {
        name: 'Git',
        img: 'dist/img/technologies/git.svg',
    },
    github: {
        name: 'GitHub',
        img: 'dist/img/technologies/github.svg',
    },
    gulp: {
        name: 'Gulp',
        img: 'dist/img/technologies/gulp.svg',
    },
    npm: {
        name: 'npm',
        img: 'dist/img/technologies/npm.svg',
    },
    jquery: {
        name: 'jQuery',
        img: 'dist/img/technologies/jquery.svg',
    },
    bootstrap: {
        name: 'Bootstrap4',
        img: 'dist/img/technologies/bootstrap.svg',
    },
    css: {
        name: 'CSS3',
        img: 'dist/img/technologies/css.svg',
    },
    html: {
        name: 'HTML5',
        img: 'dist/img/technologies/html.svg',
    },
    less: {
        name: 'LESS',
        img: 'dist/img/technologies/less.svg',
    },
    sass: {
        name: 'SCSS',
        img: 'dist/img/technologies/sass.svg',
    }
};

// Портфоліо
let portfolio = [
    {
        name: 'Weather',
        url: 'https://weather-com.firebaseapp.com',
        class: 'weather',
        img: 'dist/img/portfolio__project4.jpg',
        technologies: [technologies.angular, technologies.redux, technologies.ts, technologies.firebase, technologies.git, technologies.npm, technologies.bootstrap, technologies.html, technologies.css, technologies.sass],
        adaptive: true,
        github: 'https://github.com/Nazar121/app-weather'
    },
    {
        name: 'Golden',
        url: 'https://nazar121.github.io/projects/golden/index.html',
        class: 'golden',
        img: 'dist/img/portfolio__project4.jpg',
        technologies: [technologies.js, technologies.jquery, technologies.npm, technologies.gulp, technologies.bootstrap, technologies.html, technologies.css, technologies.sass],
        adaptive: true,
        github: 'https://github.com/Nazar121/Nazar121.github.io/tree/master/projects/golden'
    },
    {
        name: 'BWE',
        url: 'https://nazar121.github.io/projects/bwe/index.html',
        class: 'bwe',
        img: 'dist/img/portfolio__project1.jpg',
        technologies: [technologies.js, technologies.jquery, technologies.bootstrap, technologies.html, technologies.css, technologies.less],
        adaptive: true,
        github: 'https://github.com/Nazar121/Nazar121.github.io/tree/master/projects/bwe'
    },
    {
        name: 'UDG',
        url: 'https://nazar121.github.io/projects/udg/index.html',
        class: 'udg',
        img: 'dist/img/portfolio__project2.jpg',
        technologies: [technologies.js, technologies.jquery, technologies.bootstrap, technologies.html, technologies.css, technologies.less],
        adaptive: true,
        github: 'https://github.com/Nazar121/Nazar121.github.io/tree/master/projects/udg'
    },
    {
        name: 'Tinyone',
        url: 'https://nazar121.github.io/projects/tinyone/index.html',
        class: 'tinyone',
        img: 'dist/img/portfolio__project3.jpg',
        technologies: [technologies.js, technologies.jquery, technologies.bootstrap, technologies.html, technologies.css, technologies.less],
        adaptive: true,
        github: 'https://github.com/Nazar121/Nazar121.github.io/tree/master/projects/tinyone'
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
                    <div class="${obj.class} overlay__text draw meet" data-toggle="modal" data-target="#overlay__modal">See work</div>
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
    $('.modalWindow__title').text(`Project ${portfolio[index].name}`);
    
    // записую фото проекта
    $('.project__img img').attr('src',portfolio[index].img);
    
    // силка на GitHyb
    $('.info__github').html(`<span>GitHub</span>: <a href="${portfolio[index].github}" target="_blank">Link to this project.</a>`);
    
    // записую адаптивний так/ні
    if (portfolio[index].adaptive){
        $('.info__adaptive').html(`<span>Responsive design</span>: Yes.`);
    }else{
        $('.info__adaptive').html(`<span>Responsive design</span>: No.`);
    }
    
    // записую технології які використовував
    portfolio[index].technologies.map(obj => {
        result += `
        <div class="technology">
            <img src="${obj.img}" alt="${obj.name}" class="technology__img"/>
            <div class="technology__desc">${obj.name}</div>
        </div>`;
    });
    $('.info__tehnology').empty();
    $('.info__tehnology').append(`<span>Used technologies</span>: ${result}`);
    
    // Записую URL адресу для проекта 
    $('.info__show').attr('href',portfolio[index].url);
}
