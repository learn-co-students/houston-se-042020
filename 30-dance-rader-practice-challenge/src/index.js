// See the first dancer's details, including their name, 
// image, description, likes, and feedback, when the page loads

// {id: 1, 
//  name: "Carlton", 
  // image: "https://i.imgur.com/iM8ybeC.gif", 
  // description: "20 years of experience in all forms of dance. Known for shiny outfits.", 
  // likes: 23,
  // feedback: ['f1', 'f2']}
// REFACTOR
function makeSingleFeedback(feedback) {
  const li = document.createElement('li');

  li.innerText = feedback;
  return li;
}
// SHOW A DANCER ON THE PAGE
function showDancer(dancer) {
  const img = document.querySelector('#dancer-img');
  img.src = dancer.image;

  const h2 = document.querySelector('#dancer-name');
  h2.textContent = dancer.name;

  const likes = document.querySelector('#like-count');
  likes.textContent = dancer.likes;

  const description = document.querySelector('#dancer-description');
  description.textContent = dancer.description;

  // SLIGHTLY LONGER WAY TO GET FEEDBACK UL
  // const feedbackUl = document.querySelectorAll('ul')[1];
  // console.log(feedbackUl);

  const feedbackUl = document.querySelector('.feedback ul');
  feedbackUl.textContent = '';

  for (const feedback of dancer.feedback) {
    // const li = document.createElement('li');

    // li.innerText = feedback;
    //  refactor
    const li = makeSingleFeedback(feedback);
    feedbackUl.append(li);
  }
}

const url = 'http://localhost:3000/dancers/1';

// GET A SINGLE DANCER AND SHOW IT
// fetch(`${url}/1`)
//   .then(res => res.json())
//   .then(showDancer);

// REFACTOR
myFetch(url)
  .then(showDancer);

// Like the dancer and still see the new number of likes when reloading the page
const likeBtn = document.querySelector('#like');

likeBtn.addEventListener('click', () => {
  // make a PATCH request to increase the likes
  const likeCount = document.querySelector('#like-count');
  let likes = parseInt(likeCount.innerText, 10); // convert string to integer

  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      likes: ++likes
    })
  };

  // fetch(`${url}/1`, options)
  //   .then(res => res.json())
  //   .then(dancer => {
  //     likeCount.textContent = dancer.likes;
  //   })
  // REFACTOR
  myFetch(url, options)
    .then(dancer => {
      likeCount.textContent = dancer.likes;
    })
});

// Leave feedback for the dancer (no persistence needed, will disappear on refresh)
const form = document.querySelector('.feedback form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const input = document.querySelector('#new-feedback');

  // const li = document.createElement('li');
  // li.textContent = input.value;

  const feedbackUl = document.querySelector('.feedback ul');
  feedbackUl.append(makeSingleFeedback(input.value));

  form.reset();
});