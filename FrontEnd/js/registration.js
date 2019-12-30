$(document).ready(function(){
  $('.registration-check').on('click','.fa-square', function(event){
    let chekcs = $('.fa-check-square');
    chekcs.each(function(index){
      this.className = 'fa fa-square fa-lg';
      console.log('clear');
    })
    event.target.className = 'fa fa-check-square fa-lg';
  })
});