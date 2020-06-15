class Bjork extends Controller {
  constructor({ x, y }) {
    // required in children containing a constructor, otherwise no inheritance
    super({ x, y, velocity: 1, img: './assets/bjork.png', dir: 'down' });
    this.addCustomAction();
  }

  // When a Bjork is clicked, make more Bjorks but send them in different directions
  // at different speeds
  addCustomAction() {
    this.element.addEventListener('click', () => {
      const directions = ['up', 'down', 'left', 'right'];
      const bjork = new Bjork({ x: this.x, y: this.y });
      const choice = Bjork.makeChoice(directions.length);

      bjork.setDirection(directions[choice]);
      bjork.velocity = Bjork.makeChoice(6) + 1;
    });
  }
}