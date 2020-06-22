import React from 'react';

const dragons = [
  {
      "id": 1,
      "name": "Toothless",
      "description": "A Night Fury",
      "image":"https://www.wikihow.com/images/b/b2/Draw-Toothless-Step-24.jpg",
      "atWar": false
  },
  {
      "id": 2,
      "name": "Bozar",
      "description": "An uninteresting dragon",
      "image":"https://static.boredpanda.com/blog/wp-content/uploads/2015/05/What-are-dragons-doing-nowadays-fb3.jpg",
      "atWar": false
  },
  {
      "id": 3,
      "name": "Tomar",
      "description": "An interesting dragon",
      "image":"https://media.giphy.com/media/bU660Y0VKPvCE/giphy.gif",
      "atWar": true
  }
]

// App is a function
//  it is also a React Component
function App() {
  return (
    <div>
      <Section title="Home" />
      <Section title="War" />
    </div>
  );
}

function Section(props) {
  // if(props.title === undefined) throw Error('You must pass Section a title')
  return (
    <div>
      <h1>{props.title}</h1>
      {dragons.map( dragon => {
        return <DragonCard dragon={dragon} />
      })}
    </div>
  )
}

function DragonCard(props) {
  return (
    <div>
      <h3>{props.dragon.name}</h3>
      <p>{props.dragon.description}</p>
      <img style={{ width: '100px' }} src={props.dragon.image}/>
    </div>
  )
}


// JSX
//   - HTML
//   - You can only return one thing at a time (wrap in a div)
//   - Only use it when in React is in scope (so import it)
//   - Components need to start with an upper case letter (or else it will mistake it for html)

export default App;
