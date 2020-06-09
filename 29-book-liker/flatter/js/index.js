// "books": [
//   {
//     "id": 1,
//     "title": "Picture Perfect",
//     "description": "When her seven-year-old nephew, a hemophiliac, mysteriously disappears during their camping trip, pediatrician Lorrie Ryan races against time to find the missing boy with the help of FBI agent Stuart Saunders. Previously published as Panda Bear Is Critical. Reprint.",
//     "img_url": "http://books.google.com/books/content?id=CEMZ1OoPDIAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
//     "users": [
//       {
//         "id": 2,
//         "username": "auer"
//       },
//       {
//         "id": 8,
//         "username": "goodwin"
//       }
//     ]
//   }
// ]

const url = 'http://localhost:3000/books';
const currentUser = {
  "id": 1,
  "username": "pouros"
};

// Return a single list item for the menu. Useful if I think I want to add
// the ability to add new books to the website.
// Put a book id on each li as a data attribute so I can use event delegation
// to fetch the right book when an li is clicked
function generateMenuItem(book) {
  const li = document.createElement('li');

  li.textContent = book.title;
  li.dataset.bookId = book.id;

  return li;
}

// Iterate through books and add each one to the menu in the DOM
function showMenu(books) {
  const booksMenu = document.querySelector('#list');

  for (const book of books) {
    booksMenu.append(generateMenuItem(book));
  }
}

// Create the users list in a UL
function generateUsersList(users) {
  const usersUl = document.createElement('ul');

  for (const user of users) {
    const li = document.createElement('li');

    li.textContent = user.username;
    usersUl.append(li);
  }

  return usersUl;
}

// Show a book in the DOM
function showBook(book) {
  const thumbnail = document.createElement('img');
  thumbnail.src = book.img_url;

  const title = document.createElement('h2');
  title.textContent = book.title;

  const description = document.createElement('p');
  description.textContent = book.description;

  // Instead of adding the event listener in here, I'm going to
  // use event delegation. That's why I've added the data-book-id
  // attribute to the button. Unlike the HTML attr. id, we can reuse
  // the same data attribute as many times as we want!
  const likeBtn = document.createElement('button');
  // Set the text to Like if pouros isn't in the list, otherwise Unlike
  likeBtn.textContent = (book.users.find(user => user.id === currentUser.id)) ?
    'Unlike' : 'Like';
  likeBtn.dataset.bookId = book.id;

  // Pass the array of users to our function that creates the UL
  // of usernames who have liked the book
  const usersList = generateUsersList(book.users);

  // Append all of our elements to the DOM, but clear it first
  // Eric, I know you don't approve of my placement of the Like button :)
  const showPanel = document.querySelector('#show-panel');
  showPanel.textContent = '';
  showPanel.append(thumbnail, title, description, likeBtn, usersList);
}

// Fetch all books and create menu
myFetch(url)
  .then(showMenu); // using a named callback

// Use event delegation to show each book when a menu item is clicked
const booksMenu = document.querySelector('#list');

booksMenu.addEventListener('click', e => {
  // get the book id from the li that was clicked
  const bookId = e.target.dataset.bookId;

  // fetch the specific book!
  myFetch(`${url}/${bookId}`)
    .then(showBook); // oooh, look at that named callback
});

// Listen for clicks on the Like button using event delegation
// This is why we added the data attribute for the book id to the button
// The Like button is in the showPanel when showing a book
const showPanel = document.querySelector('#show-panel');

showPanel.addEventListener('click', e => {
  // Check the button was clicked and not something else
  if (e.target.tagName === 'BUTTON') {
    const bookId = e.target.dataset.bookId;

    // If our users were listed under RESTful routes, i.e. there was a 
    // join table associating users with specific books, we wouldn't 
    // need this fetch to get the book. Instead we could just go straight 
    // to patch or delete. Since our users list is nested within the entry
    // for a book, we have to patch an updated list of users.
    myFetch(`${url}/${bookId}`)
      .then(book => {
        const users = book.users;
        const currentUserIndex = users.findIndex(user => user.id ===
          currentUser.id);

        // -1 means the user wasn't found in the users array
        // We'll update the list of users, and then use that list
        // in our PATCH request
        (currentUserIndex === -1) ? users.push(currentUser) :
          users.splice(currentUserIndex, 1);

        const options = makeOptions('PATCH', {
          users: users
        });
        // Remove the user from the users list in the database if they've 
        // already liked the book and from the DOM. Otherwise add the user 
        // to the database and the DOM
        myFetch(`${url}/${bookId}`, options)
          .then(showBook); // ooh, named callback, so beautiful
      });
  }
});
