function makeEditForm(id, comment) {
  const form = document.createElement('form');
  const input = document.createElement('input');
  const submitBtn = document.createElement('input');

  input.type = 'text';
  input.value = comment;
  submitBtn.type = 'submit';
  submitBtn.value = 'Edit Post';
  form.append(input, submitBtn);
  form.classList.add('edit-form'); // style the form

  // How do we make the PATCH request and update the DOM?

  return form;
}

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

const url = 'http://localhost:3000/posts';

fetch(url)
  .then(res => res.json())
  .then(json => {
    for (const post of json) {
      createPost(post.url, post.comment);
    }
  });