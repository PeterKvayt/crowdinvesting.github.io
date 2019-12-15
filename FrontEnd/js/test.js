$(document).ready(function(){
  $('.slider-box').slick(
    {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows:true,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       infinite: true,
    //       arrows:true,
    //       dots: true
    //     }
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   }
    // ]
  }
  );

  $('.tests-answers').on('click','.fa', function(event){
    let parent = event.target.parentNode.parentNode;
    let chekcs = $(parent).children('p').children('.fa');
    for (let index = 0; index < chekcs.length; index++) {
      chekcs[index].className = 'fa fa-square fa-2x answer-check';
    }
    event.target.className = 'fa fa-check-square fa-2x answer-check';
  })
});