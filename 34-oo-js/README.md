# Object-Oriented JavaScript
Here's what we'll be building together today using JS class syntax (brought to you by a giant dose of Edwinspiration):
![](assets/example.gif)

Some of this has already been built out. We'll be adding some functionality to the parent class and creating one child class to practice our OO JS skills.

## By the end of the lesson, you should be able to:
Declare a class in JavaScript - including prototype (instance) methods, static (class) methods, and instance properties (variables) - and instantiate new objects from it. 

We also have two secondary goals:
- Declare a child class
- Be able to explain context (`this`) at a high level and recognize errors that occur when `this` is no longer what we expect it to be. You are not expected to walk away today having fully understood `this`. It takes practice, a lot of experimenting with code, and reading to fully grasp, so be kind to yourself if you find `this` confusing.

## Wait, but why?
- Easier to organize our code
- Easier to share, reuse, and edit code at a later date
- Necessary for React development (aka MOD 4)
- Don't have a dumpster fire of functions and variables floating around, unless you're into that sort of thing

## How we'll get there:
- [ ] Declare a class, including instance variables, instance methods, and class methods
- [ ] Distinguish between `this` in JS and `self` in Ruby
- [ ] Declare a child class and get familiar with `super` (`super` is the same in Ruby)
- [ ] Finish the silly webpage using class syntax
    - You can see the completed code here: https://github.com/helloRupa/oojs-lecture-project

## Declaring a class in JS
In Ruby, we place any functionality which we want to run as soon as an object is instantiated inside of #initialize. In JS, we use constructor(). Similar to Ruby, constructor() is optional. You only include it when you need it.
```
class Superstar {
  constructor(name, talent) {
    // public instance variables can be accessed from outside
    // the class
    this.name = name;
    this.talent = talent;
  }
}
```

We don't need to add special methods for accessing instance variables defined like this: `this.name = 'my name'`. They are automatically available for reading and writing to in JS.
```
const star = new Superstar('Namey McNameFace');
star.name = 'Jarvis Cocker';
console.log(star.name);
```

We declare instance methods like so (However, _the proper name in JS is prototype methods_):
```
class Superstar {
  speak() {
    console.log(`My name is ${this.name}`);
  }

  moreSpeak = () => {
    console.log(`You can use arrow syntax too!`);
  }
}
```

We declare class methods like so (However, _the proper name in JS is static methods_):
```
class Superstar {
  static about() {
    console.log('Call me on the class just like I want you to.');
  }
}
```

**Task: Let's declare a class called Candle, with a property called scent, a prototype method called tellMeYourSmell, and a static method called burnCandle**

## JS's `this` vs Ruby's `self`
In Ruby, we have `self`, which refers to the specific instance of an object. `self` never changes. It knows who it is and who it will be in the future. It doesn't need to go on any personal journeys to discover who it is.
```
class IamWhoIAm
  attr_reader :name

  def initialize(name)
    @name = name
  end

  def say_name
    # We're using self.name in place of @name
    # In this method, they're the same thing
    # I just needed to put self somewhere
    puts "I am #{self.name}"
  end
end

honey_badger = IamWhoIAm.new('Honey Badger')
puts honey_badger.say_name # I am Honey Badger
```
In Ruby, it doesn't matter how or where we call honey_badger.say_name, it always prints the name in the object you expect it to be associated with: 'Honey Badger'

In JS, there is no `self` of even anything truly like it. Instead we have `this`. `this` refers to the context in which a function was called. The value of `this` can change depending on how/where the function was called as well as which syntax was used to define the function (function syntax or arrow syntax). 

Think of it like this: You go to a restaurant called Subways Fancy Feasts and are served by a waiter...let's call him Cire. In Ruby, Cire only works at Subways Fancys Feasts, and he only offers items off of that restaurant's menu. In JS, Cire can be a waiter anywhere: Maybe you see him at Truffle Village, Subways Fancy Feasts, and Black Cat Cafe. He's a bit of a chameleon, and what he offers you off of the menu, depends upon which restaurant you see him in, aka the context in which you see him. If you see him sitting down to eat, you get an error, because he isn't even a waiter anymore and just wants to eat in peace.

Let's check out some code examples where we log the value of `this`:
```
function justLogThis() {
  console.log(this);
}

justLogThis(); // Window {parent: Window, opener: null, top: Window, length: 1, frames: Window, …}
```
`justLogThis()` was called from the global scope, so the value of `this` is Window (the global object in the browser).

```
class Cat {
  constructor() {
    this.name = 'Kits McGee';
  }
    
  meow() {
    console.log(`${this.name} says Meeeow`);
    console.log(this);
  }
}

const kits = new Cat();
kits.meow();
// Kits McGee says Meeeow
// Cat {name: "Kits McGee"} <- this
```
`meow()` was called from/by `kits`. In this case, `this` equals the instance of the Cat that called it. Pretty normal stuff so far.

> Shortcut to figuring out what the value of `this` is in many cases (though not all): If the method was called from another object using the dot operator `.` like in the example above (`kits.meow()`), `this` inside of that method (like `meow()`) refers to the object before the dot (`kits`). If it wasn't invoked after a `.`, it's the global object (Window in the browser, undefined in some other environments).

### What you absolutely need to know about `this` for Mod 4
Please plan on getting a grasp on `this` and context in JS before or shortly after you graduate. It's an important concept that will help you become a proficient JS programmer and delight your interviewers.

> Here's the shortest story: In React, when using class syntax, declare prototype methods using arrow syntax. There's an example further below.

If at this point, you've had enough of `this`, feel free to skip to the key takeaways.

### Unexpected value of `this`
Keep remembering that the value of `this` is based on how it's called. We'll add onto this in a moment regarding the differences between arrow and function syntax.
```
class Cat {
  constructor() {
    this.name = 'Kits McGee';
  }
    
  meow() {
    console.log(`${this.name} says Meeeow`);
  }

  meowTwice() {
    this.meow();
    this.meow();
    console.log(this);
  }
}

const kits = new Cat();
kits.meowTwice();

// Kits McGee says Meeeow
// Kits McGee says Meeeow
// Cat {name: "Kits McGee"} <- value of this
```
OK, things are still pretty normal. Everything works and logs as expected. Now let's get weird.
```
class Cat {
  constructor() {
    this.name = 'Kits McGee';
  }
    
  meow() {
    console.log('The value of this inside the callback is:');
    console.log(this);
    console.log(`${this.name} says Meeeow`);
  }

  makeItMeow() {
    console.log('Makin\' it meow like rain!!')
    this.customMeow(this.meow); // passing a callback!
  }

  customMeow(callback) {
    callback();
  }
}

const kits = new Cat();
kits.makeItMeow();

// Makin' it meow like rain!!   <- logged by makeItMeow()
// The value of this inside the callback is:   <- logged by meow()
// undefined   <- the value of this inside the callback when it's invoked (meow())
// Uncaught TypeError: Cannot read property 'name' of undefined   <- the context changed,
// so we got an error when we tried to get the value from this.name
```
This is pretty weird and unexpected. We passed `this.meow` as a callback to `makeItMeow()` inside of the class itself, and yet the value of `this` when the callback was actually invoked was `undefined` and we could not make Kits McGee meow!

So what happened here? Take a look at `customMeow()` and how `callback` is being invoked. Remember that tip from earlier about the `.` and all that jazz. Do you see a dot before `callback`? I know I don't. Since `customMeow()` invoked `callback`, the context was set to the default context inside of `class`, which is `undefined`. In other words, the context is not automtically bound to a prototype method when it's defined using standard syntax or when it's called.

> You can think of it like this: When `this.meow` was provided as a named callback (passed by reference), it passed the method but not the object we thought it was attached to (an instance of Cat). The method is not glued to the instance. 

You'll get the same error with this code for the same reason as above:
```
const meow = kits.meow;
meow(); // Uncaught TypeError: Cannot read property 'name' of undefined
```

### So how do we bind the context (aka `this`) to the method, so it doesn't get lost
You have two options for gluing (aka binding) the value of `this` to the method. You can use the `bind()` function or declare your prototype methods using arrow syntax:

Using `bind()` inside `customMeow()`:
```
class Cat {
  constructor() {
    this.name = 'Kits McGee';
  }
    
  meow() {
    console.log('The value of this inside the callback is:');
    console.log(this);
    console.log(`${this.name} says Meeeow`);
  }

  makeItMeow() {
    console.log('Makin\' it meow like rain!!')
    this.customMeow(this.meow.bind(this)); // passing a callback! LOOK AT THIS LINE
  }

  customMeow(callback) {
    callback();
  }
}

const kits = new Cat();
kits.makeItMeow();

// Makin' it meow like rain!!
// The value of this inside the callback is:
// Cat {name: "Kits McGee"}
// Kits McGee says Meeeow
```
Why does this work? `bind()` literally binds or glues context to a method. Chaining `bind()` to a method returns a bound method that cannot lose its context. It's like putting a toddler on a leash so they don't run away. Toddlers, like `this`, are slippery creatures. One you can put in a harness on a leash, the other you use with `bind()`. I'll let you figure out which thing goes with which other thing.

Using arrow syntax:
```
class Cat {
  constructor() {
    this.name = 'Kits McGee';
  }
    
  meow = () => {
    console.log('The value of this inside the callback is:');
    console.log(this);
    console.log(`${this.name} says Meeeow`);
  }

  makeItMeow = () => {
    console.log('Makin\' it meow like rain!!')
    this.customMeow(this.meow); // passing a callback!
  }

  customMeow = (callback) => {
    callback.bind(this)(); // LOOK AT THIS LINE
  }
}

const kits = new Cat();
kits.makeItMeow();

// Makin' it meow like rain!!
// The value of this inside the callback is:
// Cat {name: "Kits McGee"}
// Kits McGee says Meeeow
```

Why does that work? You can imagine the standard syntax for declaring prototype methods (`meow() { }`) being the same as declaring a function using function syntax (`function meow() { }`). With function syntax, a new context is created. In other words every function has its own value for `this`, and the value of `this` is determined when the code runs, or rather, when it's invoked. Arrow syntax does not have its own value for `this` - it does not create its own context. The value of `this` for an arrow function is bound to the context of the surrounding code where it's defined. In the example above, the contexts of all the prototype methods are bound to the specific instance of a Cat. About a year ago in this README, I mentioned that context also depends on whether the method was defined using function syntax or arrow syntax. This paragraph here is what I was talking about.

There are other ways to ensure the expected context doesn't get 'lost', but these two options are pretty good, so we'll stop with this business now.

### Key Takeaways on `this`
- `this` (where/how/context) != `self` (identity)
- Functions declared using function syntax create their own context (they have their own `this`)
    - The context (`this`) depends on how the function is invoked: `meow()` vs `kits.meow()`
- Functions declared using arrow syntax do not create their own context
    - The value of `this` is bound to the context of the surrounding code where it was defined
    - If arrow syntax is used to declare prototype methods in a class, for example, the value of `this` is bound to the specific instance of the object

## Declaring a child class (inheritance)
In Ruby, we create little class babies using `<`. In JS, we use `extends` as in `class Cat extends Animal`. 

In JS, everything else remains the same in terms of declaring methods and properties inside the child class, with one exception.

If we want to change the constructor() inside of a child class, we must use the `super` keyword, which is used to access and call functions on the object's parent. If we don't, we'll get an error and there will be no inheritance. For inheritance to work, the parent's constructor must be called. (The same is true in Ruby, which also uses `super`)
```
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Cat extends Animal {
  constructor() {
    super('Kits McGee McFluffyFacedPants');  // invoke parent's constructor() with required arguments
  }
}
```

Similarly, let's say there's a method declared in the parent class called `talk()`. In our child class, we want `talk()` to do all of its regular business but also do some extra business. Once again, we can use `super` to invoke the matching method on the parent, and also add whatever code we want.
```
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`Je m'appelle ${this.name}`);
  }
}

class Cat extends Animal {
  constructor() {
    super('Kits McGee McFluffyFacedPants'); // maintain inheritance
  }

  speak() {
    super.speak(); // invoke speak() on the parent class, without this we'll completely override speak()
    console.log('Je suis le meilleur chat des États Unis !');
    console.log('Non, une correction. Dans le monde !');
  }
}
```

## MDN reference
[MDN class reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#:~:text=JavaScript%20classes%2C%20introduced%20in%20ECMAScript,oriented%20inheritance%20model%20to%20JavaScript)

## Nice to know if you have the time one day:
- [JS Prototype](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
    - notice how `function Person` relates to class syntax - this is what the new class syntax is sugaring
- Private instance variables (in MDN link above)
- Class expression (also in MDN link)
    - Like a function expression! You know like how you store a function in like a variable and like all that jazz and stuff!
- Closing over a class (closure)
- Four pillars of object-oriented programming
    - [Dev.to Article on Four Pillars](https://dev.to/austinbh/the-four-pillars-of-object-oriented-programming-5bda)
    - [More Info on Polymorphism as the article above is too simplistic](https://thoughtbot.com/blog/back-to-basics-polymorphism-and-ruby)
