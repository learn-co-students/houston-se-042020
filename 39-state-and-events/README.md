# State and Components



### Learning Goals

- Listening for events by passing event handlers as props
- Define class based components
- Define and change state within a component using `setState`



### Activation


### Learning Goal 1: Listening for events by passing event handlers as props

##### Demonstrate

* Attaching an event listener to the dragon card that logs someting

* Talk briefly about synthetic events

  * Won't impact us that much but may come up

* Move the eventlistener all the places. Inline arrow function, function defined inside the component, function defined outside of the component, all that matters is that the event listener **is a function**

* **What we cannot** do: Define a function elsewhere, invoke it where we try to pass it as an event listener:

  `<div onClick={someFunction()} ></div>`

##### Questions

##### Check for Understanding

* _Defining Event Listeners_
* _Defining Event Listeners II_
* _Writing Event Listeners_

##### Cue

* If we can break our UI into these individual elements, we can use React Components to represent each of the elements we identify



### Learning Goal 2: Define class based components

##### Demonstrate

* Our components have been functions up until now
* Now that our components have both _functions_ (the function of rendering the component) and _variable data_ (our dragon list data), we're going to need a datastructure that combines both _functions_ and _data_. 
  * Question: What data structure combines both _functions_ and _data_?
    * Answer: Objects
  * Question: How do we create objects?
    * Answer: With classes
* Refactor our DragonList component into a class component. Talk about inheritance, inheriting from React.Component will give us access to react functions the same way inheriting from ActiveRecord::Base gave us access to ActiveRecord functions
  * The function of creating jsx will turn into our render method
  * Our render method is called automatically
* Refactor DragonCard into a class component
  * All props are now accessed using `this.props`, not the argument  `props` 

##### Questions

##### Check for Understanding

* _Reading Class Components_
* _Defining Class Components_

##### Cue

* Now we've looked at how to create a class component, let's look at some of the functions we get access to from React.Component



### Learning Goal 3: Define and change state within a component using `setState`

##### Demonstrate

* Define state: Our dragon list is going to change now, we'll be changing whether or not each dragon is atWar.

  * Queston:  What name did we give the variable data in mod 2? 
  * Answer: State. React is going to use state to **literally** encapsualte our variable data

* Create a state object. 

  * > I would recommend not using the constructor at all. Just skip straight to the non-constructor way of defining state, then deal with constructor stuff as it comes up ("thats the old way of doing it, not really necessary unless you're just more comfortable with that approach")

* Now, inside the event listener, remove your console.log

  * Instead of logging here, we want to change that the dragon is atWar
    * Demonstrate setState
    * Show how state changes using the react dev tools
    * Show how we can use state and a ternary to change the label of whether or not the dragon is "atWar"


##### Questions

##### Check for Understanding
* _Reading State_
* _Rendering Data from State_
* _Reading State Changes_
* _Reading State Changes II_
* _Setting State_


### Conclusion 

* So now we can change whether or not our dragons are at war, but they aren't changing from one side of the screen to the other.
* To actually move the component, we'll need to change state *higher* in our component hierarchy. We'll explore that kind of advanced data flow tomorrow.
