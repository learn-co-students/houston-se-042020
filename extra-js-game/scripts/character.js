class Character {
  constructor({ container, element, velocity, dir }) {
    Character.container = Character.container || container;
    this.bounds = {
      x: Character.container.offsetWidth - element.offsetWidth,
      y: Character.container.offsetHeight - element.offsetHeight
    };

    this.element = element;
    this.velocity = velocity;
    this.x = element.offsetLeft;
    this.y = element.offsetTop;
    this.setDirection(dir);
  }

  place([deltaX, deltaY]=[0, 0]) {
    const newX = this.x + deltaX;
    const newY = this.y + deltaY;

    if (!this.outOfBounds(newX, newY)) {
      this.element.style.left = `${this.x += deltaX}px`;
      this.element.style.top = `${this.y += deltaY}px`;
    }
  }

  setDirection(dir) {
    const dirs = {
      up: [0, -1],
      down: [0, 1],
      left: [-1, 0],
      right: [1, 0]
    }
  
    this.direction = dirs[dir] || [0, 0];
  }

  move() {
    let [dX, dY] = this.direction.map(delta => delta * this.velocity);
    this.place([dX, dY]);
  }

  outOfBounds(x, y) {
    return x < 0 || x > this.bounds.x || y < 0 || y > this.bounds.y;
  }
  
}
