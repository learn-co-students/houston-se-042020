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