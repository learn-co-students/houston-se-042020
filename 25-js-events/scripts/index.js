function createPost(gifUrl, comment) {
  // make post div
  const div = document.createElement('div');
  const img = document.createElement('img');
  const p = document.createElement('p');

  img.setAttribute('src', gifUrl);
  p.textContent = comment;
  div.append(img, p);

  const posts = document.querySelector('.posts');
  posts.append(div);
}

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const gifUrl = document.querySelector('#gif-url').value;
  const comment = document.querySelector('#comment').value;

  createPost(gifUrl, comment);
  form.reset(); // clear the inputs in the form
});

const catActions = document.querySelector('.actions');

catActions.addEventListener('click', function(e) {
  switch(e.target.id) {
    case 'meow':
      console.log('meow');
      break;
    case 'purr':
      console.log('purr');
      break;
    case 'howl':
      console.log('howl');
  }
});


// I was asked early in lecture about the TypeError that occurs when passing
// a callback that is not a function, and I don't think I explained it well
// I hope this example helps clear things up
// function returnFive() {
//   return 5;
// }

// function logWhatever(cbFn) {
//   console.log(cbFn());
// }

// returnFive(logWhatever); // passed function by reference, no error
// returnFive(logWhatever()); // executed function, essentially passing in the integer 5
    // Results in Uncaught TypeError, cbFn is not a function
    // cbFn is the name of the parameter in logWhatever(), and is not a function


// Someone asked how to pass a named function to addEventListener, and I don't think I answered the Q properly
// function createPostOnSubmit() {
//   event.preventDefault();

//   const gifUrl = document.querySelector('#gif-url').value;
//   const comment = document.querySelector('#comment').value;
//   // make post div
//   const div = document.createElement('div');
//   const img = document.createElement('img');
//   const p = document.createElement('p');

//   img.setAttribute('src', gifUrl);
//   p.textContent = comment;
//   div.append(img, p);

//   const posts = document.querySelector('.posts');
//   posts.append(div);
// }

// form.addEventListener('submit', createPostOnSubmit);


// And here's another way
// function createPostOnSubmit(gifUrl, comment, e) {
//   e.preventDefault();
//   // make post div
//   const div = document.createElement('div');
//   const img = document.createElement('img');
//   const p = document.createElement('p');

//   img.setAttribute('src', gifUrl);
//   p.textContent = comment;
//   div.append(img, p);

//   const posts = document.querySelector('.posts');
//   posts.append(div);
// }

// form.addEventListener('submit', function () {
//   const gifUrl = document.querySelector('#gif-url').value;
//   const comment = document.querySelector('#comment').value;

//   createPostOnSubmit(gifUrl, comment, event);
// });