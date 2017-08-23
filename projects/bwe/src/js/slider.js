$(document).ready(function() {
  var margin = 0; // відступи
  var count = $('.timeline').children().length; // кількість слайдерів
  
  for ( var i = 0; i < count; i++) {
    //$('.tab-box').append($('<span>').addClass('tab'));//додаємо спан в таб бокс 3 рази
    $('.tabs__box').append($('<div>').addClass('tab'));//додаємо спан в таб бокс 3 рази
  }
  
  $('.tab:first-child').addClass('tab-active'); // першому даємо клас таб актів

  $('.nav-prev').click(function() {
    margin += 100; // щоб дійти до попереднього елемента нам треба добавити відступ. Клік на ліву стрілку елементи йудть вправо.
    
    if (margin/100 > 0) { // якщо значення margin при діленні на 100 більше 0
      margin = (count - 1) * -100; // тоді від значення елементів слайдера - 1 і -100; Отримаємо потрібну кількість відступів.
    }
    
    update();
  });
  
  $('.nav-next').click(function() {
    margin -= 100; // щоб дійти до наступного елемента нам треба відняти відступ. Клік на праву стрілку, елементи йдуть вліво
    
    if (margin/100 < 1 - count) { // якщо якщо значення margin при діленні на 100 менше ніж 1 мінус значення елементів
      margin = 0; //присвоюєм значення margin 0
    }
    
    update();
  });
 
  $('.tab').toArray().forEach(function(element, index, array) {
    (function() {
      $(element).click(function() {
        margin = index * -100; // клік по спану перетягне слайдер в потрібну сторону
        update();
      });
    })();
  });  
  
  function update() {
    $('.timeline').css({'margin-left': margin + '%'});  // слайдерам даємо свої відступи;  

    $('.tabs__box .tab').removeClass('tab-active'); // знімаємо з неактивного спана клас актив   
    $('.tabs__box .tab:nth-child(' + (Math.abs(margin/100) + 1) + ')').addClass('tab-active'); // записуємо індекс кожного елемента якому дається клас актив
  }
});