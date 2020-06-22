# Components and Props

### Resources

* Formative Education Assessments: <http://formative.education/projects/38/edit>

* Dragon Data:

```
export const dragons = [
    {
        "id": 1,
        "name": "Toothless",
        "description": "A Night Fury",
        "image":"https://www.wikihow.com/images/b/b2/Draw-Toothless-Step-24.jpg",
        "atWar": false
    },
    {
        "id": 2,
        "name": "Smaug",
        "description": "He is Fire, He is Death",
        "image":"http://media.comicbook.com/uploads1/2015/08/cumbersmaug-147620.jpg",
        "atWar": false
    },
    {
        "id": 3,
        "name": "Bozar",
        "description": "An uninteresting dragon",
        "image":"https://static.boredpanda.com/blog/wp-content/uploads/2015/05/What-are-dragons-doing-nowadays-fb3.jpg",
        "atWar": false
    },
    {
        "id": 4,
        "name": "Tomar",
        "description": "An interesting dragon",
        "image":"https://media.giphy.com/media/bU660Y0VKPvCE/giphy.gif",
        "atWar": true
    }
]
```



### Learning Goals

* Identify the Visual Components of a UI

* Understand the difference between defining and rendering a component

* Use props to configure a child component



### Activation

* Review the `js-dragons` folder.
* Ask them questions about how it works
* Focus on how one function invokes another/defining vs invoking "createDragonCard"
* Reacts "Component Hierarchy" is going to follow a very similar structure



### Learning Goal 1: Identify the Visual Components of a UI

##### Demonstrate

* Breaking down a mock of React Dragons into a visual hierarchy using hierarchy.png 
  * Do parts of our UI repeat?
  * Do parts of our UI share common data?

##### Questions

##### Check for Understanding

* *Designing a Component Hierarchy*

##### Cue

* If we can break our UI into these individual elements, we can use React Components to represent each of the elements we identify



### Learning Goal 2: Explain the difference between defining and rendering a component

##### Demonstrate

* Defining the components identified in the first section
* Defining a component to represent the first Dragon in our mock
* Rendering that component inside of a container
* This is similar to the difference between defining and calling a function!
* Rules of JSX
  * We interpolate variables with `{}`
  * We *cannot* return two elements at the same time (they must be wrapped)

##### Questions

##### Check for Understanding

* *Defining vs Rendering Components*
* *Defining vs Rendering II*
* *Rendering Multiple Components*
* *Defining Components*
* *Rendering Components*

##### Cue

* Now we've looked at the difference between defining and rendering a component, but it really isn't all that valuable to us if our components will be static. We need a way to configue them



### Learning Goal 3: Use props to configure a child component

##### Demonstrate

* That props is an **object**
* It's like passing a function arguments! (But each argument gets a name)
* Using props to configure our DragonCard component
* Passing props from DragonList to each of our DragonCards
* Using map to iterate over the dragon data array to render all of our dragons

##### Questions

##### Check for Understanding

* *Reading Passing Props*
* *Passing Props*
* *Rendering Components in a loop*



### Conclusion 

* Do you remember what we decided we were going to call of the **variable** data in our application?
  We were going to call it **state**. State is a literal concept in React, and we will learn how to leverage it so that our data can change in response to user action