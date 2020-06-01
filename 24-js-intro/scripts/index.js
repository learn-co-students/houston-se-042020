console.log('Hello Houston!! Are you ready to JavaScript?!');

// const means we can't reassign, aka no more equals after this!
const h1 = document.querySelector('h1');
h1.textContent = 'Hello Houston';
h1.textContent = 'Hello Houston Again';
h1.setAttribute('style', 'color: blue');

const myName = document.querySelector('#sub-name');
myName.style.color = 'pink';
myName.style.color = 'red';

const lis = document.querySelectorAll('li');
for (const li of lis) {
  li.textContent = 'Mwa ha ha ha ha';
}

const p = document.createElement('p');
p.textContent = 'I am a new paragraph';
p.classList.add('special');
document.body.append(p);

const div = document.createElement('div');
document.body.append(div);
const html = '<p>I was made using innerHTML</p>';
div.append(html); // don't do this, you'll see why on the page
// UNCOMMENT LINE BELOW FOR CORRECT WAY
// div.innerHTML = html;

const img = document.createElement('img');
img.src = './cat.gif';
div.append(img);