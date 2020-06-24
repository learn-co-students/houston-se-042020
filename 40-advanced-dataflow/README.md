# Inverse Dataflow

### Resources

* <http://formative.education/projects/40/edit>

### Learning Goals
- Change state in a parent component
- Declaratively update state

### Activation 
- Cold open with a defined function in the chrome console `add`, which takes in 2 numbers and returns their sum
- Assing a new variable x the value of add.
- Show how it behaves the same way.
- "In JavaScript, functions are just variables. We can assign them to different names, and pass them around however we want"


### Learning Goal 1: Change state in a parent component

##### Demonstrate
* If you havent already, put the array of dragons in state in the dragon list
* Create a second array named `dragonsAtWar`
    * "When a dragon is clicked, we need to remove them from the dragons array, and add them to dragonsAtWar"
* Pass a function that logs some message as a prop from DragonList to DragonCard.
* Have the DragonCard invoke that function so that the message appears in the console
* Pass a dragon object from DragonCard to the DragonList through the callback, and log it
* Put the clicked dragon in state, and show how state changes with the dev tools

##### Questions

##### Check for Understanding
* _Defining inverse data flow_
* _Defining inverse data flow II_
* _Reading inverse data flow_
* _Reading inverse data flow II_
* _Implementing inverse data flow_

##### Cue

* Now we can set state in a parent component using a callback, our next goal is to change state inside of our two arrays



### Learning Goal 2: Declaratively update state

##### Demonstrate

* Using spread and filter to add the dragon to one array and remove it from the other.
* Show how state changes in the chrome dev tools
* Re-Use DragonCard to render dragons on the "War" side of the screen
* Use includes to see whether or not the dragon is already at war, and move them the other direction so that they go back and forth.

##### Questions

##### Check for Understanding
* _Reading the spread operator_
* _Reading the spread operator II_
* _Reading filter_
* _Declaratively updating state_

### Conclusion 
* Now we can move our dragons back and forth between Home and War, but when we refresh the page, everything resets.
    * Question: Why?
    * Answer: Our data isn't coming from a server or database
* We need to use fetch to pull our dragon data from an API, we'll explore how to do that tomorrow