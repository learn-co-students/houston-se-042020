# Intro to JS

## By the end of this lesson, you should be able to:
Manipulate the DOM using JavaScript!

## But Why?
JavaScript is the universal language of the web (on the frontend). It allows us to quickly update the appearance of a webpage without refreshing it.

### LGs:
- [ ] Explain what the DOM is
- [ ] Mutate the DOM and its styles using JavaScript
- [ ] Create new DOM nodes and append them

### What is the DOM? How is it structured?
Volunteer please.

- The DOM (Document Object Model) is a representation of an HTML document as a **tree** that can be manipulated with JavaScript
  - Javascript is a language created to manipulate the DOM
  - It is downloaded by the client and run by the browser
      - As long as it's included in the HTML file

![](pic_htmltree.gif)

### Mutate the DOM and its styles using JavaScript
- Let's use Dev Tools to traverse the DOM and identify elements
- Let's update the text in the h1 using Dev Tools
- Change that same text again using Dev Tools
- How can we make this easier? What can we do instead of grabbing the element over and over again?
- Are the elements we grab from the DOM 'live'?

**Quick discussion: `var` vs `let` vs `const`**

- Now let's put that code in our JS file
- Where should we load the JS in our HTML and why?
- Let's change the color of my name because it's awful in yellow
- Let's make my name display block so it's on its own line (`setAttribute` vs `style.[property]`)

#### TASK: Guide me in changing the text and color of the first list item.

- How do I grab all of the list items?
- How do I update the text of each list item?


### Create new DOM nodes and append them
- Create a new parapgraph with `document.createElement`
- Mutate the properties of that paragraph
- Add a class called `special` to it
- Append the element to the DOM

**Quick discussion: `append` vs `appendChild`**

***Hint: There are 3 main differences! But probably only one or two that you'll really care about.***

- Use `.innerHTML` to create elements from HTML

#### TASK: Display `cat.gif` image on screen.

### Wrap Up: You tell me what to do
Tell me how to:
- Grab and store the paragraph before the UL
- Change it's text content
- Make it italic
- Add a new div containing some text

### Closing Discussion
- What's the difference between `querySelector/All`, `getElementById`, `getElementsByClassName`, etc.?
- Why or why not choose the `querySelector` methods over the other options?
