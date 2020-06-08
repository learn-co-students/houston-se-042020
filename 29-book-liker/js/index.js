// document.addEventListener("DOMContentLoaded", function() {});

// {
//   id: 1,
//   title: "Picture Perfect",
//   description: "When her seven-year-old nephew, a hemophiliac, mysteriously disappears during their camping trip, pediatrician Lorrie Ryan races against time to find the missing boy with the help of FBI agent Stuart Saunders. Previously published as Panda Bear Is Critical. Reprint.",
//   img_url: "http://books.google.com/books/content?id=CEMZ1OoPDIAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
//   users: [
//   {
//    id: 2,
//    username: "auer"
//   },
//   {
//    id: 8,
//    username: "goodwin"
//   }
//   ]
//  }

// Refactor fetch
function myFetch(url, options={}) {
  return fetch(url, options)
    .then(res => res.json());
}

const url = 'http://localhost:3000/books';

// Make a menu of list items that are clickable, one LI per book
// fetch(url)
//   .then(res => res.json())
//   .then(books => {
//     // Populate menu
//     for (const book of books) {
//       makeMenuItem(book);
//     }
//   });
// GET all books to populate menu request
myFetch(url)
  .then(books => {
    // Populate menu
    for (const book of books) {
      makeMenuItem(book);
    }
  });

function makeMenuItem(book) {
  const li = document.createElement('li');

  li.innerText = book.title;
  // Identify which book we're dealing with when clicked
  li.dataset.bookId = book.id;

  const menuUl = document.querySelector('#list');

  menuUl.append(li);

  // Put code for showing each book here
  // li.addEventListener('click', () => {
  //   console.log(book);
  // });
}

// Be able to click on a book, you should see the book's thumbnail and 
// description and a list of users who have liked the book.

// PATCH request to http://localhost:3000/books/:id
// Be able to like a book, add yourself (currentUser) to the list of users

const currentUser = {"id":1, "username":"pouros"};

function makeLikeBtn(book) {
  const likeBtn = document.createElement('button');
  likeBtn.innerText = 'Like';

  likeBtn.addEventListener('click', () => {
    const usersArray = book.users;

    if (!usersArray.find(user => user.id === currentUser.id)) {
      usersArray.push(currentUser);
    }

    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        users: usersArray
      })
    };

    myFetch(`${url}/${book.id}`, options)
      .then(book => {
        // Update the users in the DOM
        showBook(book);
      });
  });

  return likeBtn;
}

function showBook(book) {
  const thumbnail = document.createElement('img');
  thumbnail.src = book.img_url;

  const title = document.createElement('h2');
  title.innerText = book.title;

  const description = document.createElement('p');
  description.innerText = book.description;

  const usersList = document.createElement('ul');

  // Populate list of users
  for (const user of book.users) {
    const li = document.createElement('li');
    li.innerText = user.username;

    usersList.append(li);
  }
  
  const likeBtn = makeLikeBtn(book);
  // Refactor to make like button in own function
  // const likeBtn = document.createElement('button');
  // likeBtn.innerText = 'Like';

  // likeBtn.addEventListener('click', () => {
  //   const usersArray = book.users;

  //   if (!usersArray.find(user => user.id === currentUser.id)) {
  //     usersArray.push(currentUser);
  //   }

  //   const options = {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       users: usersArray
  //     })
  //   };

  //   myFetch(`${url}/${book.id}`, options)
  //     .then(book => {
  //       // Update the users in the DOM
  //       showBook(book);
  //     });
  // });

  // Clear the panel and adding book details
  const showPanel = document.querySelector('#show-panel');
  showPanel.innerText = '';
  showPanel.append(thumbnail, title, description, usersList, likeBtn);
}

const menuUl = document.querySelector('#list');

// Event delegation: show the correct book when clicking in the parent
// UL
menuUl.addEventListener('click', e => {
  // console.log(e.target.dataset.bookId);
  const bookId = e.target.dataset.bookId;

  fetch(`${url}/${bookId}`)
    .then(res => res.json())
    .then(book => {
      // We need to show the book on the page
      showBook(book);
    });
});
