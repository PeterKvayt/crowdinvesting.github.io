$(document).ready(function(){
  var users = [
    new UserCard(
      'images/user-stock.png',
      'Тим Кук',
      'profile.html'
    ),
    new UserCard(
      'images/user-stock.png',
      'Гейб Ньюел',
      'profile.html'
    ),
    new UserCard(
      'images/user-stock.png',
      'Просто пользователь',
      'profile.html'
    ),
    new UserCard(
      'images/user-stock.png',
      'Гейб Ньюел',
      'profile.html'
    ),
    new UserCard(
      'images/user-stock.png',
      'Зеленое общество',
      'profile.html'
    ),
  ]

  for (let i = 0; i < users.length; i++) {
    users[i].AddUserCard('#investors');
  }
});