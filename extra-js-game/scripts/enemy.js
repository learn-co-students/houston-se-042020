class Enemy extends Character {
  constructor(hero) {
    Enemy.hero = Enemy.hero || hero;
    const enemy = document.createElement('div');
    enemy.classList.add('enemy');
    enemy.style.top = '0';
    Character.container.append(enemy);
    enemy.style.left = `${Math.floor(Math.random() * Character.container.offsetWidth)}px`;
    super({ element: enemy, velocity: 10, dir: 'down' });

    this.render();
  }

  outOfBounds() {
    return this.y === this.bounds.y;
  }

  destroy() {
    if (this.outOfBounds()) {
      clearInterval(this.animate);
      this.element.remove();
    }
  }

  collision() {
    const heroBox = Enemy.hero.element.getBoundingClientRect();
    const enemyBox = this.element.getBoundingClientRect();

    if (!(heroBox.right < enemyBox.left || 
      heroBox.left > enemyBox.right || 
      heroBox.bottom < enemyBox.top || 
      heroBox.top > enemyBox.bottom)) {
        Enemy.hero.element.remove();
        console.error('YOU LOSE SUCKER!!');
      }
  }

  render() {
    this.animate = setInterval(() => {
      this.move();
      this.collision();
      this.destroy();
    }, 33);
  }
}
