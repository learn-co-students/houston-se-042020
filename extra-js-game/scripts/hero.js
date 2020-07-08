class Hero extends Character {
  constructor(settings) {
    settings.dir = 'right';
    settings.velocity = 8;
    super(settings);

    this.trackKeys();
  }

  trackKeys() {
    document.addEventListener('keydown', e => {
      switch(e.key) {
        case 'ArrowRight':
        case 's':
          this.setDirection('right');
          this.move();
          break;
        case 'a':
        case 'ArrowLeft':
          this.setDirection('left');
          this.move();
      }
    });
  }
}