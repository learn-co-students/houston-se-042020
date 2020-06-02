# JS Events
We're gonna make things happen!

To see the solution branch, go to https://github.com/helloRupa/js-events

## By the end of this lesson, you should be able to:
Attach event handlers (callbacks) to specific elements in the DOM

## But Why?
Imagine going to a website where you clicked a button and nothing happened. Not a very good experience. Any time you go to a webpage and do something, like click a button or drag, etc., you're triggering events, which then make something useful happen.

## What are we building today?
A webpage that let's a user submit a gif with a comment and posts it to the page. Users can also click buttons to alert or log different cat sounds.

## How will we get there?
- [ ] Explain what a callback function is (named and anonymous)
    - [ ] Differentiate between passing a function and calling one
- [ ] Identify some common events (DOMContentLoaded, click, keydown, submit)
- [ ] Add event listeners to our code (form, preventDefault, target, currentTarget)
- [ ] Explain the difference between bubbling and capturing events (if time)
    - [ ] Describe how an event moves through the DOM
- [ ] Discuss how event listeners affect performance (if time)

## Callback functions (named and anonymous)
In JavaScript, we can pass a function to another function as an argument:
```
someFunction(callbackFunction);
```

The function we pass as an argument is called a callback function. The callback will then be called by the function it was passed to. For example, the code for someFunction might look a bit like this:
```
function someFunction(callback) {
  // do some stuff here
  callback();
}
```

When passing a callback function, it's important to understand the difference between passing a function by reference and calling a function. Let's say our `callbackFunction` returns the integer 5. If we pass it by reference (aka pass the function itself) to `someFunction`, all will be well. However, if we call it instead, we'll get an error:
```
someFunction(callbackFunction); // this works because someFunction can call callbackFunction in its body
someFunction(callbackFunction()); // this doesn't work because callbackFunction returns 5, which is not a function
someFunction(5); // this doesn't work and is essentially the same as the line above. 5 is not a function
```

So far, we've been passing named functions as callbacks. But we can also pass anonymous functions (similar to passing a block in Ruby like when you pass a block to `.each`):
```
someFunction(function () {
  return 5;
});
```

**Question: When might we want to pass an anonymous function instead of a named function as a callback?**

## Common Events
The browser tracks a whole boatload of events. You can find a very long list here: https://developer.mozilla.org/en-US/docs/Web/Events

Here are some of the commonly tracked events and when they fire:
* DOMContentLoaded (HTML finished loading without waiting for stylesheets or images to finish)
* click (element is clicked)
* submit (form submitted)
* scroll (document or element was scrolled)
* keydown / keyup (key is pressed down or key is released, respectively)

## Let's attach some events, ermahgerd!!
Our JS file is trying to grab the form element and log it to the console. But we only see null. Why is that?

### Listener 1: DOMContentLoaded
What arguments does addEventListener take:
```
// element.addEventListener(type, function, options)
document.addEventListener('DOMContentLoaded', callbackFunction);
```

Why does this listener "fix" our code?

Is there any other way we can get our code to work as intended? An alternative to this specific event listener?
We can defer!!

### Listener 2: Submit
When a user submits the form, we want to:
* Add a div to the posts section
* Containing an image (img) and a comment (p) supplied by the user
    * The URL for the image and comment are in inputs
* Not refresh the page
* Clear the form on submission

Let's make that happen!

* event.target vs event.currentTarget
* Get an input by its index: why or why not?

**Discussion: passing a param (e) and event - Both are OK so you do you, but be careful!**

### Event Bubbling vs Event Capturing
Bubbling and capturing describe how an event moves through the DOM once it has been triggered. Events move through the DOM in three phases: 
1. Capturing Phase (starts at the top of the DOM at document and takes shortest path to the triggering element)
2. Target Phase (the event has reached the element that triggered it, the handler is called)
3. Bubbling Phase (event moves back up through the DOM along the same path, unless it's stopped)

An easy way to remember this flow is to think of events as capturing or trickling down the DOM and then bubbling back up. It's basically going in a  circle.

As the event moves through the DOM, it calls the event handlers for any matching event types that are attached to the elements it's passing.

#### But what does this mean for us?
By default, event handlers (callbacks) are triggered during the bubbling phase. Let's say we have a p tag inside of a div tag. In other words the div is the parent of the p:
```
<div>
  <p>I'm a baby!</p>
</div>
```

In our JS, let's say we've attached event handlers listening for clicks to the p and the div (assume they're already stored in variables):
```
div.addEventListener('click', function () {
  alert('You clicked a DIV');
});

p.addEventListener('click', function () {
  alert('You clicked a P, child of DIV');
});
```

By default, when we click on the paragraph:
1. The event will move down the DOM until it reaches the P (capturing phase)
2. The event handler (callback) on the P will be called (target phase)
3. The event will start moving back up the DOM the way it came (bubbling phase)
4. The handler (callback) on the DIV will be called (bubbling phase)
5. The event will continue bubbling up the DOM calling event handlers for matching events along the way

So, we would see the alerts in the following order:
1. 'You clicked a P, child of DIV'
2. 'You clicked a DIV'

However, we can change this so that the event handlers are triggered during the capturing phase instead. By adding a third, optional, argument of `true` to addEventListener: 
```
div.addEventListener('click', function () {
  alert('You clicked a DIV');
}, true);

p.addEventListener('click', function () {
  alert('You clicked a P, child of DIV');
}, true);
```

So, we would see the alerts in the following order:
1. 'You clicked a DIV'
2. 'You clicked a P, child of DIV'

Do all of my events have to match phases? ie, must they all capture or all bubble, or can some bubble and some capture?
- You can mix and match as you please
- However, triggering handlers during the capturing phase is pretty rare
- Most apps get by using the default bubbling behavior all or most of the time

What if I don't want the click handler on the DIV in the example above to get triggered when a user clicks the P?
- Call `event.stopPropagation()` in the P handler
- This method can be used with capturing or bubbling events

We can demonstrate all of this using our Cat Actions div.

### Event listeners and performance
We're working on a really simple webpage that doesn't have a lot going on, so if we wanted to, we could attach an event listener to every element. However, for complex pages with many elements, this could slow down the page. The more listeners you attach, the bigger the hit to the performance. For users, this means longer page load times and wait times between triggering an event and seeing the result of that.

Let's make our Cat Actions buttons work by attaching a single event listener to the section element containing all of the buttons. We'll handle each of the buttons within this single event handler using what we know about `target`.
