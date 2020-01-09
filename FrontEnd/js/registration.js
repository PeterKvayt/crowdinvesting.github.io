$(document).ready(function(){

  $('.registration-check').on('click', function(event){
    let chekcs = $('.fa-check-square');
    chekcs.each(function(index){
      this.className = 'fa fa-square fa-lg';
    })
    if(event.target.className.includes('square')){
      event.target.className = 'fa fa-check-square fa-lg';
    }
    if(event.target.className.includes('registration-check')){
      $(event.target).children().first().attr('class', 'fa fa-check-square fa-lg');
    }
    else{
      $(event.target).prev().attr('class', 'fa fa-check-square fa-lg');
    }
  })
  
});