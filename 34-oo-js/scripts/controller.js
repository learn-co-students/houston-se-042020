class Controller {
  // FIX this, what's wrong with it?
  constructor({x, y, velocity, dir, img}) {
  // constructor(pojo) {
    // this.x = pojo.x;
    // this.y = pojo.y;
    // this.velocity = pojo.velocity;
    this.x = x;
    this.y = y;
    this.velocity = velocity;
    this.bounds = {
      x: window.innerWidth,
      y: window.innerHeight
    };
    this.element = document.createElement('img');
    this.element.src = img;

    // Call setDirection with the dir
    this.setDirection(dir);
    // Call render() to kick off the animation
    this.render();
  }

  place([deltaX, deltaY]=[0, 0]) {
    this.element.style.left = `${this.x += deltaX}px`;
    this.element.style.top = `${this.y += deltaY}px`;
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

  // check if image el is off screen
  outOfBounds() {
    return (this.x < 0 || this.x > this.bounds.x ||
      this.y < 0 || this.y > this.bounds.y);
  }

  // DECLARE cleanUp()
  // if element is outOfBounds
  // remove element from DOM
  // stop the animation (the interval is stored in this.animate)
  cleanUp() {
    if (this.outOfBounds()) {
      this.element.remove();
      clearInterval(this.animate);
    }
  }

  // put el on screen and animate
  // !!DO NOT USE SETINTERVAL TO ANIMATE IN SERIOUS PROJECTS!!
  // Look into requestAnimationFrame instead
  render() {
    this.place();
    document.body.append(this.element);

    this.animate = setInterval(() => {
      this.move();
      this.cleanUp();
    }, 10);
  }

  // DECLARE a class method that
  // chooses a random number up to a limit
  static makeChoice(limit) {
    return Math.floor(Math.random() * limit);
  }
}