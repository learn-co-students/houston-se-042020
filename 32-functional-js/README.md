# Functional JS
This is an introduction to functional programming in JavaScript. It's not a deep dive - just an intro. We'll get our toes wet!

It's OK if you don't fully grasp all of this material. Some of these techniques will come in handy in the future, but please take your time. Let your understanding get there when it gets there. This one is a slow burn.

## By the end of this lesson you should be able to:
Talk about functional programming at a high level and explain how JavaScript supports this programming paradigm.

## But why?
You get to sound fancy in a techie way. But also, you'll be a better programmer and have more tools in your toolbox. And, when you get to Redux, you'll better understand how it works, since it uses functional programming. 

## How will we get there?
- [ ] Explain state
- [ ] Describe the properties of functional programming
    - [ ] Identify and define higher-order functions
    - [ ] Describe declarative programming
    - [ ] Explain what function composition is
- [ ] Identify pure functions
- [ ] Describe emulated private state in JS
    - [ ] Closures
    - [ ] IIFEs


## State in an application
When we talk about state in programming we generally talk about any data that is stored for our programs use, such as variables and properties. We've actually been using and manipulating state throughout this whole course.

In Ruby, we created state through variables and instantiated objects. This state was very temporary, in that those values lived and disappeared with the execution of our program.

In Rails and SQL, we saw how we could create almost permanent state by persisting data to a database. I've chosen to say almost permanent, because the database could be dropped or corrupted. In this case, it's not truly permanent, but it's as close as we can get.

In JS we have seen a mixture. Our programs have had temporary state stored in variables and objects, which have lived and disappeared upon refresh of the browser. We've also seen how we can emulate near-permanent state by fetching data from a database (or pretend database via JSON server).

In short, state is the remembered information of a program. How long it's remembered for varies.

## Properties of functional programming
- Functions are first-class citizens
- Declarative
- Functions are composable

### First-class citizens
In JS, functions are objects, and therefore, first-class citizens. Functions that are first-class citizens can:
- Be passed to other functions as arguments 
    - (callbacks, am I right!!)
- Can be returned from another function
    - `const pointless = () => () => 'This is a pretty pointless function.'`
    - `pointless()()`  // returns the string
- Assigned to variables and stored in data structures, like arrays and POJOs
    - `const sayHi = () => console.log('hi')`
    - `const arrayOfFunctions = [sayHi, sayHiAgain, sayBye]` // Pretend those are function names please

What do we mean that a function is an object? Once, long ago, in a far away land called Netscape, JavaScript was created. And along with it the mighty Object. And from that Object more objects were created, like functions. Also, we can do objecty things with functions like the following (But please don't do it because it's weird and doesn't really make sense):
```
function whyAreYouDoingThisToMe() {
  return 'why are you doing this to me?';
}

whyAreYouDoingThisToMe.theReason = 'just cuz';
whyAreYouDoingThisToMe.theReason; // returns 'just cuz'
```

Seriously though, if you need to assign properties to something, use a POJO!

**Higher-order functions**

Higher-order functions make functional programming possible, and we've already seen some! Whooooo!! They help us write more reusable and modular code (little pieces that work together in different ways and interchangeably kind of like LEGOs).

So what are they? They are functions that take other functions as arguments (remember those callbacks!), and/or return a function.

Can you think of some higher-order functions?

Some examples include array iterators, such as .map(), setTimeout(), and addEventListener().

Higher-order function taking a callback:
```
function tellMeWhatToDo(thingToDo, task) {
  console.log('This is Dad speaking.');
  return thingToDo(`Please ${task}`);
}

tellMeWhatToDo((string) => `${string} NO!!`, 'be nice to your sister!');
```

Higher-order function returning a function:
```
function sayTwoThings(firstThing) {
  return function(secondThing) {
    console.log(`${firstThing} and ${secondThing}`);
  }
}

sayTwoThings('I am the first thing')('I am the second thing');
```

You can also redefine the above function using arrow syntax:
```
const sayTwoThings = firstThing => secondThing => console.log(`${firstThing} and ${secondThing}`);

sayTwoThings('I am the first thing')('I am the second thing');
```

Higher-order function that does all the things:
```
function doEverything(cb) {
  console.log(cb());

  return function() {
    console.log('I did not do much but hey, I tried.');
  }
}

doEverything(() => 'I need you to do all of my work now.')();
```

***Task: Write a higher-order function that takes a callback. Write a higher-order function that returns a function***

### Declarative
There are multiple definitions for declarative programming. However, they all have one thing in common: they say that declarative programming is not imperative programming. Drop the mic! I'm done. Best description ever. 

- Who is Beyonce? 
- _She's not Madonna._
- Never speak to me again.

We can think of imperative programming as being more procedural, less abstracted, and more concerned with describing the specific steps of how something is done. In contrast, we can think of declarative programming as being closer to how we speak when we tell people what to do. It's very refactored looking (sorry, running out of good words here), and it's easier to read what's happening.

In programming terms, we can think of using a for loop to manually iterate through an array and push values to a new array as being imperative. We can think of array methods, like map() as being declarative.
```
// Imperative
const values = [1, 2, 3];
const mappedValues = [];

for (let i = 0; i < values.length; i++) {
  mappedValues[i] = values[i] * 2;
}

mappedValues; // [2, 4, 6]
```
```
// Declarative
const values = [1, 2, 3];
const mappedValues = values.map(val => val * 2);

mappedValues; // [2, 4, 6]
```

JS allows us to combine imperative and declarative programming techniques. HTML, CSS, and RegEx can be thought of as declarative languages. For example, we're not concerned with how those p tags get on the page, we just say 'Hey Browser, make this paragraph!'

### Function Composition
If functions are composable, it means we can combine two or more functions to return a result.

This is a simple example where the result of calling a function is passed to another:
```
const add = (x, y) => x + y;
const mult = (x, y) => x * y;

add(2, mult(2, 3)); // 8, it follow the order of operations! Maffs!
```

Here is a more complicated example where two functions are combined to produce a new function:
```
const sum = a => b => a + b;
const mult = a => b => a * b;
const sumAndMult = a => b => sum(a)(mult(a)(b));

sumAndMult(2)(3); // 8, more Maffs!
```

## Pure Functions
Purely functional programming is a subset of functional programming where there can be no side effects. This will make sense momentarily.

Pure functions have the following properties:
- Given the same input values (arguments), it returns the same output
- Not dependent on outside state (e.g. do not internally reference a global variable)
    - Can't get data from the DOM
    - Can't directly reference outer scoped variables
- Doesn't mutate outside state (no side effects!)
    - Can't write to the DOM
    - Can't make HTTP requests
    - Can't mutate an outer scoped object, such as an array
    - Can't call a function that causes side effects
    - Can't write to a file
    - And so much more!

Which is the pure function?

**A**
```
const x = 'hey dude!';

function tellMeSomething() {
  return `Telling you ${x}`;
}

tellMeSomething(); // "Telling you hey dude!"
```  

**B**
```
const x = 'hey dude!';

function tellMeSomething(y) {
  return `Telling you ${y}`;
}

tellMeSomething(x); // "Telling you hey dude!"
```  

Which is the pure function?

**A**
```
const pantsTypes = ['jeans', 'trousers', 'leggings'];

function oneLessPant(pants) {
  pants.pop();
  return pants;
}

oneLessPant(pantsTypes); // ["jeans", "trousers"]
```

**B**
```
const pantsTypes = ['jeans', 'trousers', 'leggings'];

function oneLessPant(pants) {
  const pantsAgain = [...pants];
  pantsAgain.pop();
  return pantsAgain;
}

oneLessPant(pantsTypes); // ["jeans", "trousers"]
```

Benefits:
- easier to test since they're more predictable
- can cache the results due to consistency of return values
- self documenting since no reliance on outside dependencies
- easier to work with due to lack of side effects

Use pure functions when it makes sense. If it's making your code really hard to understand, you've gone too far. JS tends to be a mix of impure and pure functions. We have to make HTTP requests and mess with the DOM - that's all about side effects and outside dependencies!!

## Closures
A closure gives you access to an outer function's scope from an inner function. They let you associate data with a function that requires that data to work correctly. Closures are created every time a function is created. So all functions are closures in that they maintain a reference to the outer and inner state that is available to them at all times.

```
let x = 5;

function loveXAlways() {
  const y = x + 10;
  return y;
}
```

In the above code, `x` is in `loveXAlways`'s outer scope. When `loveXAlways` is created, it maintains a reference to `x`. It also maintains references to everything inside of it.

Closures also allow us to emulate private state. So if you need to define a function or variable that shouldn't be easily available by name to any other part of your code, you can consider using a closure. Check out the module design pattern to see a better use of closures for this purpose. Or ask me. I'll talk to you about it.
```
function neighborhood() {
	const city = 'land of the brums';

	function house() {
		const street = 'spaghetti junction';

		function address() {
			return `I live in ${city} on ${street}`;
		}
		
		return address();
	}

	return house();
}

neighborhood();  // 'I live in land of the brums on spaghetti junction'
```
In the example above, we can only access `neighborhood`.

Using closures to modify an array of clothes (maintaining inner state):
```
function staticClothingOrder() {
    const items = ['shirt', 'pants', 'tie']

    return function() {
        return items.pop()
    }
}

const shipClothes = staticClothingOrder();
shipClothes(); // 'tie'
shipClothes(); // 'pants'
shipClothes(); // 'shirt'
shipClothes(); // undefined

function dynamicClothingOrder(clothes) {
    return function () {
        return clothes.pop()
    }
}

const shipMoreClothes = dynamicClothingOrder(['shirt', 'pants', 'skirt']);
shipMoreClothes(); // 'skirt'
shipMoreClothes(); // 'pants'
shipMoreClothes(); // 'shirt'
shipMoreClothes(); // undefined
```

## IIFE
Immediately invoked function expressions have also been used for scoping, or emulating privacy, in JS. In other words, you can use them to make certain variables and functions unavailable to outer scopes. It's like the stuff in your house: it's available to you because you live in your house. But people outside of your house can't get in and therefore, can't get your stuff. The first set of parentheses is your house.

```
(function () {
  const saying = 'You can\t catch me!';
  
  function saySomething(string) {
    console.log(string);
    console.log('Na na na na na');
  }

  saySomething(saying);
  return 'Done';
})();

// 'You can't catch me'
// 'Na na na na na'
// 'Done'

saying; // ReferenceError
saySomething('hi'); // ReferenceError
```

The first set of parentheses are called the grouping operator, officially. They cause the function declaration inside to be evaluated as an expression. This is necessary because you can't call a function declaration. The second set of parentheses are the call, which cause excecution.

Example of not being able to call a function declaration:
```
function test() {
  return 'not gonna do it';
}()  // SyntaxError: Unexpected token ')'
```
Just wrap that function up, and it'll do your bidding. Give it a little hug from its old friend parentheses.

IIFEs are used in the module pattern, which allows us to emulate public and private access to variables and functions.

Oh yes, and you can pass arguments:
```
(function (saying) {
  function saySomething(string) {
    console.log(string);
    console.log('I don\'t know. You should be sleeping.');
  }

  saySomething(saying);
  return 'Done';
})('What am I doing here?');

// What am I doing here?
// I don't know. You should be sleeping.
// "Done"
```
