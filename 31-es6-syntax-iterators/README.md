# ES6 Syntax Iterators
Let's learn how to use ES6 syntax to shallow copy objects, create new arrays, and more!

## By the end of this lesson, you should be able to:
Replace manual iterators and older methods of copying objects in older code with ES6 syntax, as well as use this syntax in new code.

## But why?
ES6 syntax allows us to write code that is more concise (you know how I love my laziness!) and more declarative. This makes our code easier to maintain over time, while also making collaboration easier. Also, you might be tasked with modernizing an old codebase one day!

You'll need to understand each of these concepts when working with React in Mod 4. Also, you can start using it in your projects. Get fancy peeps, get real fancy!

## How we'll get there
- Convert functions to arrow functions
    - Write arrow functions that take no arguments, 1 argument and more than 1 argument
- Use built-in array iterators (forEach(), map(), find(), filter(), reduce()) in place of manual for loops
- Distinguish between for...in and for...of
- Create variables using destructuring
- Shorten our object key, value assignment using ES6 shorthand
- Shallow copy arrays and objects using spreading

## From function syntax to arrow function syntax
We are used to declaring and calling functions like so:
```
function sayHello() {
  console.log('Hello Houston!');
}

sayHello(); // logs 'Hello Houston!'
```

However, we can also declare functions using arrow syntax. There are some differences between arrow syntax and using the function keyword. We'll go into depth on that in a later lecture. For now, just know that you can also declare a function using arrow syntax and store it in a variable like so:
```
const sayHello = () => {
  console.log('Hello Houston!');
};

sayHello(); // logs 'Hello Houston!'
```

Declaring a function as we did above by storing it in a variable is called a **function expression**. You can't use function expressions before you create them, unlike with a traditional function declaration.

### Parameters and Syntax
It's important to understand how parameters affect arrow syntax. 

If you aren't passing any arguments to the function, empty parentheses are required:
```
const sayHello = () => {
  console.log('Hello Houston!');
};
```

If you're passing one argument, parentheses are optional. However, no parentheses is the preferred syntax.
```
// you can put parens around name, but people don't like it :(
const sayHello = name => {
  console.log(`Hello ${name}!`);
};

sayHello('Freddy'); // logs 'Hello Freddy!'
```

If you're passing more than one argument, parentheses are required.
```
const sayMessage = (message, name) => {
  console.log(`${message} ${name}`);
};

sayMessage('Hi', 'jingleberry jones'); // logs 'Hi jingleberry jones'
```

**Important: In the examples above we stored the functions in variables declared with the `const` keyword. These declarations are not hoisted!**

### Return and arrow syntax
With arrow syntax we can omit the curly braces around our code if the statements it contains (the body of the function) is one line long. When we omit the curlies, there is an implicit return. This means we don't and should not use the `return` keyword to return the value from the function.
```
const returnSomethingPlease = () => 'something';

console.log(returnSomethingPlease()); // logs 'something'
```

If the body of the function is more than one line long, we must use curly braces and `return`.
```
const returnSomethingPlease = () => {
  const someThing = 'something';
  return someThing;
};

console.log(returnSomethingPlease()); // logs 'something'
```

But what if we're trying to return a POJO (plain old JS object) from an arrow function?
```
const returnPOJO = () => {
  will: 'this',
  work: 'no'
};

returnPOJO();  // Uncaught SyntaxError: Unexpected token ':'
```
The above code doesn't work because JS is interpreting the curly braces as marking the opening and closing of the function declaration. So our POJO then becomes:
```
will: 'this',
work: 'no'
```
And that is not valid code! Key-value pairs must be in their own precious curlies.

In this case, our code will work if we wrap the curlies in parentheses:
```
const returnPOJO = () => ({
  will: 'this',
  work: 'yes'
});

returnPOJO();  // {will: "this", work: "yes"}
```

You could also do this, but I think you can probably guess which syntax I personally prefer:
```
const returnPOJO = () => {
  return {
    will: 'this',
    work: 'yes'
  };
};

returnPOJO();  // {will: "this", work: "yes"}
```

### Arrow syntax and callbacks
We can declare anonymous functions for use as callbacks just like we do with the function keyword.
```
function caller(cb) {
  cb('Caller called you');
}

caller(function(message) {
  console.log(message);
});  // logs 'Caller called you'

caller(msg => {
  console.log(msg);
});  // logs 'Caller called you'
```

You can read more about arrow syntax [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions). Don't worry if you don't fully understand the first paragraph on that page. We'll get there.

## Array Iterators
So far we've been using regular for loops and for...of loops to iterate over arrays. However, we have more options available to us, just like we do in Ruby. For full details, be sure to check MDN. MDN is our friend! Long live MDN!!

### forEach(callback(element, index, array))
forEach() is similar to Array#each in Ruby. forEach() takes a callback and runs it for each element of the array. Array#each in Ruby does the same thing when it's passed a block.
```
const numbers = [1, 2, 3];

numbers.forEach(console.log); // logs 1 0 [1, 2, 3] element, index, array
                                   // 2 1 [1, 2, 3]  
                                   // 3 2 [1, 2, 3]

numbers.forEach((el, index) => {
  console.log(`${el} is at index ${index}`); // logs 1 is at index 0
                                                     2 is at index 1
                                                     3 is at index 2
});
```

Use forEach() whenever you need to do something with the elements in an array.

### map(callback(element, index, array))
map() is similar to Array#map in Ruby. It takes a callback, and runs that callback for each element of the array. It returns a new array with whatever values resulted from running the callback using the elements in the array.

```
const numbers = [1, 2, 3];

const mappedNumbers = numbers.map((el, idx) => el * idx);

mappedNumbers; // [0, 2, 6]
```

Use map() any time you want to return a new array with the same number of elements as the array you called map() upon, but you want the elements in the new array to have different values. In other words, you want to map the values of one array to another array.

### find(callback(element, index, array))
find() is similar to Ruby's Array#find. It takes a callback, and that callback must return `true` or `false`. The first element that causes the callback to return `true` is returned by find(). If a matching element isn't found, it returns `undefined`.

```
const numbers = [1, 2, 3];

numbers.find(el => el === 2); // 2
numbers.find(el => el === 300); // undefined
```

Use find() any time you need to find one matching value and return it, so you can do something with it.

### filter(callback(element, index, array))
filter() is similar to Ruby's Array#select. It returns a brand new array containing all values for which the callback returned true.
```
const numbers = [1, 2, 3];

numbers.filter(el => el % 2 === 0); // [2]
```
User filter() any time you need to filter or select certain elements from an array.

### reduce(callback(accumulator, element, index, array), initialValue)
reduce() is similar to Ruby's Array#reduce or Array#inject. Use it when you want to transform an array to another datatype, such as a string or number. You can also use it when the other array methods simply don't makes sense - maybe you need to do a lot more with the array than those other methods allow.
```
const numbers = [1, 2, 3];

numbers.reduce((total, el) => total + el, 0); // 6
```

## for...in vs for...of
The short story: We can use for...in to iterate over the keys of an object, aka POJO. We can use for...of to iterate over the elements stored in an array. Feel free to play around with trying to use each of these with both POJOs and arrays, and see what happens.

```
const musicPreference = {
  radiohead: 100,
  sublime: 2,
  refused: 100
};

for (const key in musicPreference) {
  console.log(key); 
} // logs radiohead, sublime, refused
```

```
const numbers = [1, 2, 3];

for (const num of numbers) {
  console.log(num); 
} // logs 1, 2, 3
```

## Object and array destructuring
Sometimes we want to take specific values from an object and store them in variables, so we can do something with those values. We could do this:
```
const musicPreference = {
  radiohead: 100,
  sublime: 2,
  refused: 100
};

const radioheadValue = musicPreference.radiohead;  // equals 100
const sublimeValue = musicPreference.sublime;  //  equals 2
```

This is kind of long. I don't like it.

Instead we can use destructuring:
```
const musicPreference = {
  radiohead: 100,
  sublime: 2,
  refused: 100
};
// For the below line to work, the variable names must match the keys in
// the original object
const {radiohead, sublime} = musicPreference;

console.log(radiohead); // 100
console.log(sublime); // 2
```

We can do the same thing with arrays. With arrays, the order matters, because arrays are all about order.
```
const bands = ['Radiohead', 'At the Drive In', 'Refused'];
const [radiohead, atdi, refused] = bands;

console.log(radiohead); // Radiohead
console.log(atdi); // At the Drive In
```

More info: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

## Shortcut for assigning values to keys in POJOs
Let's say we have a bunch of values stored in variables, and we want to get those variables associated with some keys in a POJO. Here's what we're used to:
```
const bjork = 'Bjork is awesome!';
const pelican = 'Pelican is also awesome';

const bandObject = {
  bjork: bjork,
  pelican: pelican
};

bandObject; // {bjork: "Bjork is awesome!", pelican: "Pelican is also awesome"}
```

Instead, we can use this shortcut. It requires our variable names to be the same as our keys:
```
const bjork = 'Bjork is awesome!';
const pelican = 'Pelican is also awesome';

const bandObject = {
  bjork,
  pelican
};

bandObject; // {bjork: "Bjork is awesome!", pelican: "Pelican is also awesome"}
```

## Shallow copying and more with the spread operator ...
Sometimes we want to copy the values of an array or object to a new array or object. The following won't produce a copy. If we try to mutate the new array or object, we'll actually be mutating the original (so it's not new at all!):
```
const originalArray = [1, 2, 3];
const newArray = originalArray;
newArray.push(5);
console.log(originalArray);  // [1, 2, 3, 5]
console.log(newArray);  // [1, 2, 3, 5]

const originalObject = {a: 1, b: 3};
const newObject = originalObject;
newObject.haha = 'fooled you';
console.log(originalObject);  // {a: 1, b: 3, haha: "fooled you"}
console.log(newObject);  // {a: 1, b: 3, haha: "fooled you"}
```

To make a shallow copy, i.e. copy the top level of an array or POJO, we can use the spread operator like so:
```
const originalArray = [1, 2, 3];
const newArray = [...originalArray];
newArray.push(5);
console.log(originalArray);  // [1, 2, 3]
console.log(newArray);  // [1, 2, 3, 5]

const originalObject = {a: 1, b: 3};
const newObject = {...originalObject};
newObject.haha = 'fooled you';
console.log(originalObject);  // {a: 1, b: 3}
console.log(newObject);  // {a: 1, b: 3, haha: "fooled you"}
```

This will not create the copy you're expecting when arrays/objects are nested in arrays/objects. The nested arrays and objects will still refer to the original nested arrays or objects!

### Combining arrays or objects using ...
We can also combine arrays and objects to create new arrays and objects:
```
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [...array1, ...array2];

const pojo1 = { a: 'Letter A', b: 'Letter B' };
const pojo2 = { c: 'Letter C', d: 'Letter D' };
const pojo3 = { ...pojo1, ...pojo2 };

console.log(array3); // [1, 2, 3, 4, 5, 6]
console.log(pojo3); // { a: 'Letter A', b: 'Letter B', c: 'Letter C', d: 'Letter D' }
```

What will happen if pojo1 has a key that matches a key in pojo2? How could you find out?

### Using spread ... to provide arguments to a function
Sometimes, we have a function that takes many arguments, but the values for those arguments are stored in an array. Luckily the spread operator can handle this for us:
```
function giveMeTheArgs(arg1, arg2, arg3) {
  console.log(`Argument 1: ${arg1}, Argument 2: ${arg2}, Argument 3: ${arg3}`);
}

const myArgs = ['making', 'it', 'difficult'];

giveMeTheArgs(...myArgs); // Argument 1: making, Argument 2: it, Argument 3: difficult
```

## Nested Arrays and Objects Destructuring Plus Deeper Copying

```
const sayings = {
  cat: 'meow',
  dog: 'woof',
  sloths: {
      tyson: 'abra',
      jancy: 'cadabra'
  },
  people: {
    students: {
      henrietta: 'tell me more',
      henry: 'also tell me',
      henri: 'parlez vous francais ?'
    }
  }
};

const { cat, 
        sloths: { 
          tyson
        }, 
        people: { 
          students: { 
            henrietta, 
            henri 
          } 
        } 
      } = sayings
```

In the above code, we use the keys to enter into our nested objects, pull out values, and assign them to variables. Therefore, our variables are cat, tyson, henrietta, henri.

We can do similar work with nested arrays:
```
const values = [1, 2, [3, 4, [5]], 6]
let [a, b, [c, d, [e]], f] = values
let [g,, [h], i] = values
```
Which values will be assigned to the variables?

We can also make 'deep' copies of objects using the spread operator, if we know how to traverse the object:
```
const sayings = {
  cat: 'meow',
  dog: 'woof',
  sloths: {
    tyson: 'abra',
    jancy: 'cadabra'
  },
  people: {
    students: {
      henrietta: 'tell me more',
      henry: 'also tell me',
      henri: 'parlez vous francais ?'
    }
  }
}

const sayingsCopy = {
  ...sayings,
  sloths: {
    ...sayings.sloths
  },
  people: {
    ...sayings.people,
    students: {
      ...sayings.people.students
    }
  }
}

sayingsCopy.people.students.henri = 'J'aime la pizza !'
```