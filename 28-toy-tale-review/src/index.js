/* DO NOT TOUCH */
let addToy = false;

const addBtn = document.querySelector("#new-toy-btn");
const toyFormContainer = document.querySelector(".container");
addBtn.addEventListener("click", () => {
  // hide & seek with the form
  addToy = !addToy;
  if (addToy) {
    toyFormContainer.style.display = "block";
  } else {
    toyFormContainer.style.display = "none";
  }
});
/* DO NOT TOUCH */


const toyCollection = document.getElementById('toy-collection');
const url = 'http://localhost:3000/toys';

// SHOWING ALL TOYS
fetch(url)
  .then(res => res.json())
  .then(toysJson => {
    // iterate and make a card for each toy
    for(const toy of toysJson) {
      addCardToDOM(toy);
    }
  })

// MAKE SINGLE CARD
function makeCard(toyObj) {
  const div = document.createElement('div');
  const h2 = document.createElement('h2');
  const img = document.createElement('img');
  const p = document.createElement('p');
  const btn = document.createElement('button');

  h2.innerText = toyObj.name;
  img.classList.add('toy-avatar');
  img.src = toyObj.image;
  p.textContent = `${toyObj.likes} Likes`;
  btn.classList.add('like-btn');
  btn.textContent = 'Like <3';

  // UPDATING FOR PATCH
  btn.addEventListener('click', e => {
    const options = {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        likes: ++toyObj.likes
      })
    };

    fetch(`${url}/${toyObj.id}`, options)
      .then(res => res.json())
      .then(toy => {
        p.textContent = `${toy.likes} Likes`;
      });
  });

  div.classList.add('card');
  div.append(h2, img, p, btn);

  return div;
}

// PATCH http://localhost:3000/toys/:id
// headers: 
// {
//   "Content-Type": "application/json",
//   Accept: "application/json"
// }

// body: JSON.stringify({
//   "likes": <new number>
// })

function addCardToDOM(toyObj) {
  const div = makeCard(toyObj);

  toyCollection.append(div);
}

// POSTING NEW TOY
const form = document.querySelector('.add-toy-form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const toyName = form[0].value;
  const toyImage = form[1].value;
  const options = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: toyName,
      image: toyImage,
      likes: 0
    })
  };

  fetch(url, options)
    .then(res => res.json())
    .then(toy => {
      addCardToDOM(toy);
      form.reset();
    });
});

// INCREASE LIKES WITH A PATCH REQUEST


// {
//   id: 1,
//   name: "Woody",
//   image: "http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png",
//   likes: 5
// }
