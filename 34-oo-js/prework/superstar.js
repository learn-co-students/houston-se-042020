class Superstar {
  // maps to Ruby's initialize method
  constructor(name, talent) {
    // public instance variables can be accessed from outside
    // the class
    this.name = name;
    this.talent = talent;
  }

  // instance method
  introduce() {
    console.log(`My name is ${this.name} and I can ${this.talent}.`);
  }

  // another way to declare an instance method
  // affects context, aka the value of this 
  // (we'll discuss this in lecture, just showing you for now)
  introduceAgain = () => {
    console.log(`My name is ${this.name} and I can ${this.talent}.`);
  }

  // class method
  static about() {
    console.log('I track the most talented people')
  }
}

// Class variable, cannot be declared inside the class
// Next version of JS will change that.
// Nice to know but not a need to know for Mod 4
Superstar.all = [];

// child class, inheritance
class Bjork extends Superstar {
  constructor() {
    // Any time you add the constructor() to a child class, you
    // must call super(). Otherwise inheritance won't happen and 
    // you'll get an error. In this case, super() calls the 
    // constructor() on the parent. The same is true for Ruby
    super('Bjork', 'Do all the things');
  }
}

// calling class method
Superstar.about();

// create instances of classes and call instance methods
const star = new Superstar('Beth Gibbons', 'Sing');
star.introduce();
star.introduceAgain();

const bjork = new Bjork();
bjork.introduce();


// It's OK if you don't get to the below before lecture
// Focus on the stuff above if you're struggling with it

// Save this for last, it's to get you used to seeing an error
// related to this (context). Don't worry if you don't understand
// it. The most important thing right now is to get used to the error,
// so you can recognize and debug it

// Note that there is really no equivalent of passing a named callback
// like so in Ruby. In Ruby, you can pass Procs, blocks and lambdas, but
// they are functionally different, which is why there's no matching
// example in the rb file. Don't worry if that sounded like gibberish.
function introduceYourselfAgain(callback) {
  callback();
}

introduceYourselfAgain(star.introduceAgain); // runs just fine
introduceYourselfAgain(star.introduce); // error
// in the Superstar class, notice how these two methods were defined differently
