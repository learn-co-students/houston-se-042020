// Set this when button is clicked to choose an object: Bjork, bubble or pizza
let objectType;
// Lookup table
const classNames = {
  bjork: Bjork,
  bubble: Bubble,
  pizza: Pizza
};

document.addEventListener('click', e => {
  // If clicking on image inside button, get the button
  const parent = e.target.parentElement;

  // Get the id storing the object type, but don't spawn on button click
  if (parent && parent.id) {
    objectType = parent.id;
    return;
  }

  // Spawn when clicking anywhere on page except buttons
  if (objectType) {
    new classNames[objectType]({ x: e.clientX, y: e.clientY });
  }
});