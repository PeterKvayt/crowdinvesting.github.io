$(document).ready(function(){
  // инициализация проектов
  var projects = [
    new ProjectCard(
      'images/controller-main.jpg',
      'Стартап',
      'Project Spark',
      'К громкому событию - 30-летнему юбилею легендарной панк-стёб-группы,'+ 
      'представляем сбор на новый альбом, который обещает стать настоящим феноменом '+
      'музыкальной индустрии.',
      '10000',
      '100',
      '0',
      '20д.'
    )
  ]

  var sketches = [
    new ProjectCard(
      'images/exampleProjectPict.png',
      'Стартап',
      'Project Spark',
      'К громкому событию - 30-летнему юбилею легендарной панк-стёб-группы,'+ 
      'представляем сбор на новый альбом, который обещает стать настоящим феноменом '+
      'музыкальной индустрии.',
      '10000',
      '100',
      '6д.'
    ),
    new ProjectCard(
      'images/vr.jpg',
      'Стартап',
      'Виртуальные радости 2019: Зима близко',
      'Вестник игрового мира в оффлайне, журнал "Виртуальные радости" объявляет подписку до конца 2019 года',
      '1000',
      '3402',
      '2д.'
    ),
    new ProjectCard(
      'images/vr.jpg',
      'Стартап',
      'Пример 1',
      'Вестник игрового мира в оффлайне, журнал "Виртуальные радости" объявляет подписку до конца 2019 года',
      '1000',
      '3402',
      '5д.'
    ),
    new ProjectCard(
      'images/vr.jpg',
      'Стартап',
      'Черновик',
      'Вестник игрового мира в оффлайне, журнал "Виртуальные радости" объявляет подписку до конца 2019 года',
      '1000',
      '3402',
      '12ч.'
    ),
    new ProjectCard(
      'images/vr.jpg',
      'Стартап',
      'пример 2',
      '',
      '1000',
      '3402',
      '1ч.'
    ),
  ]
  // добавление проектов в разметку
  for (let i = 0; i < projects.length; i++) {
    projects[i].AddProjectCard('#project-box');
    projects[i].ShowProgressStatusPict();
  }
  
  // добавление черновиков в разметку
  for (let i = 0; i < sketches.length; i++) {
    sketches[i].AddSketchCard('#sketch-box');
  }

  // смена таба
  $('.row').on('click', '.category', function(){
    let projectsBox = $('#project-box');
    let supportBox = $('#supported-box');
    let sketchBox = $('#sketch-box');
    let active = $('.active-category');
    let point;
    if(event.target.className.includes('fa')){
      point = event.target.parentNode;
    }
    else{
      point = event.target;
    }
    active.attr('class', 'category');
    point.className = 'active-category';
    switch(active.attr('id')){
      case 'about':
        projectsBox.hide(200);
        break;
      case 'support':
        supportBox.hide(200);
        break;
      case 'sketch':
        sketchBox.hide(200);
        break;
      default: break;
    }
    switch(point.id){
      case 'about':
        projectsBox.show(200);
        break;
      case 'support':
        supportBox.show(200);
        break;
      case 'sketch':
        sketchBox.show(200);
        break;
      default: break;
    }
  })
})