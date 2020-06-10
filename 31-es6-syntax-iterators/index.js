// CONVERT THE FOLLOWING FUNCTIONS TO ARROW SYNTAX
function sayKrysta() {
  const name = 'Krysta';
  console.log(name);
}

console.log('Run sayKrysta');
sayKrysta();
console.log(' ');

function plusTwo(x) {
  return x + 2;
}

console.log('Run plusTwo');
console.log(plusTwo(5));
console.log(' ');

function sumTwoNumbers(a, b) {
  return a + b;
}

console.log('Run sumTwoNumbers');
console.log(sumTwoNumbers(134, 21));
console.log(' ');

// REPLACE THE FOR OF LOOP WITH FOREACH
const goodFoods = ['thai curry', 'pockey', 'sushi', 'pasta'];

for (const food of goodFoods) {
  const sentence = `I like ${food}`;
  console.log(sentence);
}

// CREATE AN ARRAY WHERE EVERY NAME IS REPEATED, e.g. ['Taiye Taiye', 'Freddy Freddy',...]
// LOG THAT TO THE CONSOLE
const names = ['Taiye', 'Freddy', 'Lauren', 'Eric', 'Thach'];


// IF 'cat in bowl' IS IN THE ARRAY, PRINT 'CAT IS IN THE BOWL' IN THE CONSOLE
const sentences = ['dog in soup', 'sloth in party', 'cat in bowl', 'truthiness is real', 'cat in bowl'];


// RETURN AN ARRAY CONTAINING ONLY THE WORDS WITH A LENGTH GREATER THAN 5
// PRINT ARRAY TO CONSOLE
const words = ['sloth', 'parakeets', 'cat', 'doggies', 'kitties'];


// CREATE AN OBJECT (POJO) FROM THE ARRAY WHERE THE FIRST VALUE IN A NESTED ARRAY
// IS A KEY AND THE SECOND VALUE IS A VALUE ASSIGNED TO THAT KEY
// Example: [['cats', 'awesome'], ['peeps', 'microwave']] => { cats: 'awesome', peeps: 'microwave' }
const students = [['Phyllis', 'emoji tank'], ['Luis', 'glasses'], ['Richard', 'solid t-shirt']];


// PRINT THE KEYS AND VALUES OF THE POJO TO THE CONSOLE BY ITERATING OVER THE POJO
// USING THE CORRECT FOR LOOP. Example log: Cole: hat
const moreStudents = {
  cole: 'hat',
  edwin: 'solid tee',
  lili: 'over-ear headphones'
};


// USE DESTRUCTURING ASSIGNMENT TO ASSIGN THE VARIABLES CORRECTLY
let tasty;
let icky;

const foods = {
  icky: 'pineapple on a pizza', // you do you pineappleans
  tasty: 'potato on a pizza',
  stephanie: 'is not a food'
};

console.log(' ');
console.log(`${tasty} is tasty`);
console.log(`${icky} is icky`);

// USE DESTRUCTURING ASSIGNMENT TO ASSIGN THE FIRST TWO VALUES FROM THE ARRAY
// TO THE VARIABLES
let first;
let second;

const singers = ['Jeff Buckley', 'Bjork', 'Wailing Cats'];

console.log(`${first} is an amazing singer`);
console.log(`${second} is also an amazing singer`);

// MAKE THIS SHORTER
const snake = 'slithers';
const cat = 'walks';
const horse = 'gallops';

const animalMovements = {
  cat: cat,
  horse: horse,
  snake: snake
};

console.log(animalMovements);

// CLEAR THE RED ERROR, WHAT IS GOING WRONG?
const values = ['hold', 'it', 'right', 'there'];
const valuesCopy = values;

valuesCopy.push('pants');
// Join joins the values of an array to create a string
if (values.join(' ') === valuesCopy.join(' ')) {
  console.error(values.join(' '));
} else {
  console.log(values.join());
}

// COMBINE THE POJOS INTO ONE NEW POJO
const pojo1 = {
  cat: 'good',
  sloth: 'good',
  spider: 'alright'
};

const pojo2 = {
  sloth: 'splendorous',
  cat: 'fantasmagasticus',
  dog: 'slobber party',
  duck: 'quack this quack that'
};

let combinedPojos; // Using let because const causes an error when a value isn't assigned

console.log(combinedPojos);


// function sumTwoNumbers(a, b) {
//   return a + b;
// }
// WE HAVE ALREADY DEFINED THE FUNCTION sumTwoNumbers AT THE TOP OF THIS FILE
// IT TAKES TWO ARGUMENTS. RIGHT NOW THE ARGUMENTS ARE IN AN ARRAY. WITHOUT
// MANUALLY PROVIDING EACH ARRAY ELEMENT AS AN ARGUMENT, PROVIDE THE VALUES FROM
// THE ARRAY AS ARGUMENTS TO THE FUNCTION
// !! Don't do this: sumTwoNumbers(array[0], array[1]) !!
const numbersToSum = [56, 78];

console.log(sumTwoNumbers(numbersToSum)); // this doesn't do the right thing yet
