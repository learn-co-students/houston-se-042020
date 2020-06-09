// {
//   id: 1,
//   name: "Carlton",
//   image: "https://i.imgur.com/iM8ybeC.gif",
//   description: "20 years of experience in all forms of dance. Known for shiny outfits.",
//   likes: 30,
//   feedback: [
//    "Nice moves!",
//    "Never stop never stopping"
//   ]
//   }

const url = 'http://localhost:3000/dancers/1';

// See the first dancer's details, including their name, image, description, likes, and feedback, when the page loads
function showDancer(dancer) {
  const img = document.querySelector('#dancer-img');
  img.src = dancer.image;

  const h2 = document.querySelector('#dancer-name');
  h2.textContent = dancer.name;

  const likes = document.querySelector('#like-count');
  likes.textContent = dancer.likes;

  const description = document.querySelector('#dancer-description');
  description.textContent = dancer.description;

  // REFACTOR FLAG
  const feedbackUl = document.querySelector('.feedback ul');
  feedbackUl.innerHTML = '';

  for (const feedback of dancer.feedback) {
    // const li = document.createElement('li');

    // li.innerText = feedback;
    // feedbackUl.append(li);
    addFeedback(feedback);
  }
}

function getThis(url, options={}) {
  return fetch(url, options)
  .then(res => res.json());
}
// REFACTOR FLAG
getThis(url)
  .then(showDancer);

// Like the dancer and still see the new number of likes when reloading the page
const likeBtn = document.querySelector('#like');

likeBtn.addEventListener('click', () => {
  const likesSpan = document.querySelector('#like-count');
  let likes = parseInt(likesSpan.innerHTML, 10);
  // do a patch to increase likes
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      likes: ++likes
    })
  };
// REFACTOR FLAG
  getThis(url, options)
    .then(dancer => {
      likesSpan.textContent = dancer.likes;
    })
});

// Leave feedback for the dancer (no persistence needed, will disappear on refresh)
function addFeedback(feedback) {
  const li = document.createElement('li');
  li.innerText = feedback;

  const ul = document.querySelector('.feedback ul');
  ul.append(li);
}

const form = document.querySelector('.feedback form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const input = document.querySelector('#new-feedback');
  // need value of input
  // need to put it in DOM
  // put in UL
  addFeedback(input.value);
  form.reset();
});
