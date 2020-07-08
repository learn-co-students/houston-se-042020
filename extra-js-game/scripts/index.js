const container = document.querySelector('#game');

const hero = new Hero({ container, element: document.querySelector('#hero') });

const spawner = setInterval(() => {
  if (document.querySelector('#hero') === null) {
    clearInterval(spawner);
    return;
  }

  new Enemy(hero);
}, 500);


