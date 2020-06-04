const url = 'http://localhost:3000/posts';

function makeEditForm(comment) {
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
    // Example of a PATCH request
//   fetch('http://localhost:3000/posts/4', {
//     method: 'PATCH',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ 
//     comment: 'He is working hard' })
// })

  return form;
}

function createPost(gifUrl, comment, id) {
  // make post div
  const div = document.createElement('div');
  const img = document.createElement('img');
  const p = document.createElement('p');
  const btn = document.createElement('button');

  img.setAttribute('src', gifUrl);
  p.textContent = comment;
  btn.textContent = 'X';

  btn.addEventListener('click', () => {
    fetch(`${url}/${id}`, {
      method: 'DELETE'
    });

    div.remove();
  });

  div.dataset.postId = id;
  div.append(img, p, btn);

  const posts = document.querySelector('.posts');
  posts.append(div);
}

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const gifUrl = document.querySelector('#gif-url').value;
  const comment = document.querySelector('#comment').value;

  
  postCatGif(gifUrl, comment)
    .then(res => res.json())
    .then(json => {
      createPost(gifUrl, comment, json.id);
    })
  form.reset(); // clear the inputs in the form
});

function postCatGif(url, comment) {
  return fetch('http://localhost:3000/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 
      url: url,
      comment: comment })
  });
}

fetch(url)
  .then(res => res.json())
  .then(json => {
    for (const post of json) {
      createPost(post.url, post.comment, post.id);
    }
  });

