class Bubble extends Controller {
  constructor({ x, y }) {
    // required in children containing a constructor, otherwise no inheritance
    super({ x, y, velocity: 0.5, img: './assets/bubble.png', dir: 'up' });
  }

  cleanUp() {
    // call cleanUp() defined on parent, then extend its functionality
    super.cleanUp();
    if (this.outOfBounds()) {
      const bubbleSound = new Sound('./assets/pop.wav');

      // lazy way to remove sound element from DOM, not dynamic!
      setTimeout(() => {
        bubbleSound.sound.remove();
      }, 1000);
    }
  }
}
