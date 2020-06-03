# JavaScript: Communication With a Server (GET)
On your machine, you should have installed node and json-server globally by now.

You can see the solution branch here: https://github.com/helloRupa/js-communication-with-server

## By the end of this lesson, you should be able to:
- Fetch data via the frontend from a server and update the DOM with the response

## But Why?
Modern websites, like Twitter and Amazon, must interact with databases to serve up information, like a user's tweets or a list of available products at any given time. Using JS and fetch, we can request data and update the DOM without having to refresh the page, which makes for a better user experience and more efficient loading.

## How will we get there?
- [ ] Explain the difference between synchronous and asynchronous code
- [ ] Fetch (GET only) data and use it to update the DOM
- [ ] Describe the Response object (often labelled `res` as a parameter in code)
- [ ] Recognize Promises and their chainable methods

## Synchronous vs Asynchronous
Synchronous code runs line by line from top to bottom in order without any surprises whatsoever. Console.log(), mathematical expressions, and loops are all examples of synchronous code.

```
console.log(2);
let x = 2 + 3;
for (const str of ['hi', 'bye']) console.log(str);
console.log(x);
```

The above code is synchronous. We expect and will see 2 logged to the console, and then 'hi', 'bye', and lastly 5.

Asynchronous code is a little different. The lines will still be read in order from top to bottom, but the lines may not appear to execute in that order. Examples of asynchronous functions include fetch(), which we'll be working with very soon, setTimeout(), and setInterval().

```
console.log('heyo!!');
setTimeout(function () { console.log('got in trouble, got a timeout :(') }, 2000);
console.log('byeo!!');
```

You might expect for 'heyo!!', followed by 'got in trouble, got a timeout :(' two seconds later, followed by 'byeo!!' in the console. However, `setTimeout()` is an asynchronous method. When this line of code is reached, the process is started, but because it's asynchronous, the JS engine carries on to the next line and runs that. When `setTimeout()` completes, the callback that was provided to it is finally run. This results in the following messages appearing in the console: 'heyo!!', 'byeo!!', 'got in trouble, got a timeout :('.

**Discussion: Why is asynchrony important for websites?**

**Quick Quiz**
For each of the code blocks below, what will be logged to the console and in what order?

```
console.log('boop');
setTimeout(function () { console.log('in a timeout') }, 1);
console.log('beep');
```

```
setTimeout(function () { console.log('in a timeout') }, 0);
console.log('boop');
console.log('beep');
```

The answer for the second block of code might not be what you expected. It's important to understand how JavaScript executes asynchronous code. JavaScript is a single-threaded language, which means it can only run one process at a time. It can't multitask like Java. When an asynchronous function is run, the process gets handed off to the browser. Once that process has completed, its result is put into a queue. When JavaScript has completed running its existing tasks, it looks at the queue and starts running those processes in FIFO order. 

So here's what happened with the last block of code above:
1. JS: Dear browser, can you handle this setTimeout() for me?
2. Browser: I gotchu Pikachu!
    - puts callback from setTimeout() into the callback queue after 0 milliseconds
3. JS: I'm gonna carry on with my business and I'll check back in with you when I'm done:
    - 'boop'
    - 'beep'
4. JS: Guess I better see what the browser put in my queue since I'm not doing anything:
    - 'in a timeout'

This means that asynchronous functions, such as setTimeout() and fetch(), have no guarantee of when they'll complete execution.

***TIP: The second argument for setTimeout() is the minimum amount of time until the callback runs, not a guarantee of when it'll run*** 

## fetch()
fetch() is a method that allows us to communicate with servers from the frontend, and perform all of the CRUD actions on a database, provided the backend let's us do that. Like setTimeOut(), fetch() is asynchronous. It hands the HTTP request off to the browser, which then makes the request. Once a response is received from the server, it is placed in the queue. Once JS has completed running its processes, it looks at the queue and handles the response.

***All of this works because of AJAX (asynchronous JS and XML). AJAX is not a programming language. It's a technique for accessing web servers from a webpage without having to refresh. To achieve this, it uses a browser built-in XMLHttpRequest object (to request data from a web server) and JavaScript, and HTML DOM (to display or use the data).***

fetch() takes two arguments:
- the URL as a string (where does this request go?)
- an optional options object (with data about the request)

```
fetch(url, {});
```

fetch(url, options) returns a Promise. A Promise is a special type of object that you can chain other methods onto, like:
- then(callback) (you'll use this a lot, it's where we handle a successful HTTP response, and any other async functions we're running)
    - then() is triggered when a Promise resolves
    - You can have tons of then()s chained to one another (it's like hearing a kid tell a story!)
    - If you use an async method inside of a then(), chain on another then() to handle the result of that async method
- catch(callback) (you'll probably use this quite a bit, it handles errors)
- finally(callback) (you'll use this sometimes, it always runs if it's chained onto a Promise)

**Important! fetch() always returns a Promise. It does NOT return the response or any other value. So if you assign fetch() to a variable or provide fetch() as an argument to console.log(), you'll get a Promise object.**

```
fetch(url)
  .then(function(response) {
    // use this to convert response to JSON and return it
    // json() is an async method!!! That's why we need another then().
    return response.json();
  })
  .then(function(json) {
    // use this to handle the JSON, e.g. update the DOM if necessary
    console.log(json);
  })
  .catch(function(error) {
    // handle errors, optional
    console.log(error);
  })
  .finally(function() {
    // code that should always run after a Promise is fulfilled 
    // or rejected (aka success or error), optional
    console.log('If you chain me on, I will always happen!!');
  })
```

## Task One: Fetch a single GIF with comment and display it in the DOM
Let's separate our code into meaningful functions, so it's easy to read.

We'll be using json-server to emulate having a backend. It allows us to perform all of the CRUD actions with data, but without having to use a database or roll up a Rails app.

## Task Two: Fetch all of the GIFs with comments and display all of them in the DOM
Let's carry on coding cleanly. See how helpful our code from earlier is!! Ermehgerd!!

## Response object (res)
When fetch() resolves, it resolves a Response object, which is available in the very first then() chained to fetch(). Just like other objects, it has its own properties and methods. You can see a full list here: https://developer.mozilla.org/en-US/docs/Web/API/Response

Here are some of the properties you might be most interested in:
- Response.ok: returns true or false. True if status range is 200-299, indicating a successful response.
- Response.status: Returns 200 if request was successful.
- Response.statusText: Return 'OK' if the request was successful.

Here is an interesting method:
- Response.json(): Convert the string response stored in the response's Body to JSON. This is an async process!

## So what is all this Promise business?!
A Promise is a special type of object that allows us to handle asynchronous tasks, such as fetch() and setTimeout(), where their values or responses are not yet available, but are required for subsequent code. There is no reason to use Promises with fully synchronous code, since values from synchronous code are already available to work with on the next line.

Some use cases for Promises:
- Update the DOM with data from an HTTP response (using fetch() most likely)
- Run some function after a timeout has finished
- Run one fetch after another in order (Example: the API provides a response containing some data which is required to make the next request)

Promises do not return any value other than a Promise. 

Promises have 3 possible states:
- Pending: the callback provided to the Promise has neither resolved nor rejected.
- Resolved: the callback provided to the Promise completed successfully.
- Rejected: the callback provided to the Promise did not complete successfully. There was an error.

When working with Promises directly, we must instantiate a new Promise object (similar to instatiating an object of a class in Ruby!!). The Promise takes a callback, which is run by the Promise. The Promise provides the callback with two arguments: a method, usually labeled resolve, which will return the "resolved" value to the next then(), and another method, usually labeled reject, which means that the callback provided to the Promise did not resolve successfully (some kind of error usually). Reject is optional.

```
let status = 'On';
const prom = new Promise(function(resolve, reject) {
  if (status === 'On') {
    resolve('The light is ON');
  } else {
    reject('The light is OFF');
  }
}); // This Promise resolves successfully
```

If the callback provided to the Promise does not resolve or reject, it will be in a Pending state forever.
```
let status = 'On';
const prom = new Promise(function(resolve, reject) {
  if (status === 'On') {
    return 'The light is ON';
  } else {
    return 'The light is OFF';
  }
}); // This Promise is Pending forever, nothing happens
```

We can chain methods onto Promises, which are only available on Promise objects (like how #say_name might only be accessible to a Dog object in Ruby). Methods available on Promises include:
- then(callback): Once the callback provided to a Promise resolves, the first then() chained onto the Promise object is run. We can also return values from a then() to another then(). Thenables (Terry Venables! <- That one's for you Taiye) are executed in order.
  ```
  new Promise(function(resolve) {
    resolve('I have resolved');
  })
  .then(function(resolvedValue) {
    console.log(resolvedValue); // logs 'I have resolved'
    return 'I am being returned';
  })
  .then(function(returnedValue) {
    console.log(returnedValue); // logs 'I am being returned'
  });
  ```
- catch(callback): If the Promise is rejected or an error is thrown from a then(), the callback in catch will be run.
  ```
  new Promise(function(resolve, reject) {
    reject('I am being rejected');
  })
  .catch(function(error) {
    console.error(error); // logs 'I am being rejected'
  });
  ```
- finally(callback): This will run if the Promise is resolved or rejected after all of the then()'s or catch(). It is not possible to return a value from then() or catch() to finally().
  ```
  new Promise(function(resolve, reject) {
    reject('I am being rejected');
  })
  .catch(function(error) {
    console.error(error); // logs 'I am being rejected'
  })
  .finally(function () {
    console.log('finally, I am doing something');
  })
  ```

Some examples:
```
// if we never throw an error, we can just pass resolve to our callback
const promOne = new Promise(function(resolve) { 
  setTimeout(function () {
    // resolve returns the argument, which is available in the next .then()
    resolve('I have such good resolve.');
  }, 5000);
  })
  .then(function(msg) {
    console.log(msg); // logs 'I have such good resolve.'
  });

const promTwo = new Promise(function(resolve) { 
  setTimeout(function () {
    resolve('i am being resolved');
  }, 5000);
  })
  .then(function(msg) {
    console.log(msg); // logs 'i am being resolved'
    return 'i am being returned';
  })
  .then(function(msg) {
    console.log(msg); // logs 'i am being returned'
  });

// if we need to throw an error, we must also pass reject
// we can then handle that error in catch
const promThree = new Promise(function(resolve, reject) { 
  setTimeout(function () {
    reject('Nobody likes me.');
  }, 5000);
  })
  .catch(function(error) {
    console.error(error); // logs 'Nobody likes me.'
  });

// We can use resolve and reject, though this example is rather pointless
let status = 'On';
const promFour = new Promise(function(resolve, reject) { 
  setTimeout(function () {
    if (status === 'On') resolve('I am resolving to the next then.');
    else reject('I am being rejected to catch');
  }, 5000);
  })
  .then(function(msg) {
    console.log(msg); // logs 'I am resolving to the next then.'
  })
  .catch(function(error) {
    console.error(error);  // never runs
  });

// We can also resolve in one then(), and throw an error in another
status = 'On';
const promFive = new Promise(function(resolve, reject) { 
  setTimeout(function () {
    if (status === 'On') resolve('I am resolving to the next then.');
    else reject('I am being rejected to catch');
  }, 5000);
  })
  .then(function(msg) {
    console.log(msg); // logs 'I am resolving to the next then.'
    // this error will be handled by catch()
    throw new Error('being bad just cuz');
  })
  .catch(function(error) {
    console.error(error); // logs 'being bad just cuz'
  });
```

All of the Promises above will have a status of resolved, including the ones that call reject in the callback. If we didn't handle the error in catch(), the Promises that called reject would have statuses of rejected.
```
const prom = new Promise(function (resolve, reject) {
  setTimeout(reject, 2000, 'Nobody invites me to their parties');
})

// Wait a few seconds, then in the console
console.log(prom); // Promise {<rejected>: "Nobody invites me to their parties"}
```

Once a Promise has been run, it cannot be reused. That Promise is now settled and a settled Promise is done. It cannot be reset or reused.

**So how does this work with fetch?**
fetch() returns a Promise. This means we can chain all of the methods available on a Promise onto fetch(), or rather, onto the return value of fetch().

The definition of fetch() might look something like this (this is an abstraction and will not run):
```
function fetch(url, options={}) {
  return new Promise(function(resolve, reject) {
    makeHTTPRequest(url, options, function (result) {
      if (result.status === 'ok') {
        resolve(result);
      } else {
        reject(result);
      }
    });
  });
}
```

Because fetch() returns a Promise, we can now chain on then() to handle the response, catch() to handle errors, and finally() if there's anything we want to do after all of our then()'s and/or catch() have run.

## Food for Thought
What actually causes fetch() to produce an error that can then handled by catch()? This is very Googleable!

What happens if the response takes ages? How could you handle that using fetch()? This is kind of an advanced thing and not necessary to know for projects or passing code challenges. Also, why might we want to limit how long we wait for a response?
