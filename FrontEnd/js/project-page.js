$(document).ready(function(){
  let profit  = document.getElementById('profit').firstChild.data.trim();
  let financialAim = document.getElementById('financial-aim').firstChild.data.trim();

  // устанавливает пробелы
  document.getElementById('profit').firstChild.data = SetSpace(profit);
  document.getElementById('financial-aim').firstChild.data = SetSpace(financialAim);

  let progress = profit / financialAim * 100;
  progress = progress.toFixed(2);
  // задает ширину прогресс бара
  $('.progress-bar').width(progress+'%');
  // устанавливаем прогресс в процентах
  document.getElementById('profit-value').innerHTML = progress+'%';

  // показать/скрыть тему/вопрос
  $('.accordion-section').on('click', '.accordion-btn', function(event){
    let target = $(event.target);
    if (target.next().css('display') != 'block') {
      target.next().slideDown(200);
      target.children().first().attr('class', 'fa fa-times fa-fw');
    }
    else{
      target.children().first().attr('class', 'fa fa-plus fa-fw');
      target.next().slideUp(200);
    }

    let parent = event.target.parentNode;
    let articles = $(parent).children('.accordion-btn');
    for (let i = 0; i < articles.length; i++) {
      if (i != (target.index())/2) {
        $(articles[i]).children().first().attr('class', 'fa fa-plus fa-fw');
        $(articles[i]).next().slideUp(200);
      }
    }

    
  })

  // задает пробелы между числами
  function SetSpace(str){
    let result = str;
    for (let i = str.length - 2; i >= 0; i--) {
      if(i % 3 == 0){
        result = result.substr(0, i) + result[i]+' '+ result.substr(i + 1);
      }      
    }
    return result;
  }
});