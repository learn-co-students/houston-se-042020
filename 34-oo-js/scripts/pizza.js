class Pizza extends Controller {
  constructor({ x, y }) {
    // required in children containing a constructor, otherwise no inheritance
    super({ x, y, velocity: 2, img: './assets/pizza.png', dir: 'right' });
    this.destroy();
  }

  move() {
    const diagonals = [[1, 1], [-1, -1], [1, -1], [-1, 1]];
    const choice = Pizza.makeChoice(diagonals.length);

    this.direction = diagonals[choice];
    this.velocity = Pizza.makeChoice(5) + 2;
    super.move();
  }

  destroy() {
    setTimeout(() => {
      this.element.remove();
    }, 3000);
  }
}