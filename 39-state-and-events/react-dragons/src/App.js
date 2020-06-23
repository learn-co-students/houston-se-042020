import React, { Component } from 'react';

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

// class App extends Component {

//   state = {
//     message: 'Hello World'
//   }

//   render(){
//     // this.setState({ message: `${this.state.message}!`})
//     return <h1>{this.state.message}</h1>
//   }

// }


function App() {
  let homeDragons = []
  let warDragons = dragons
  return (
    <div>
      <Section dragons={homeDragons} title="Home" />
      <Section dragons={warDragons} title="War" />
    </div>
  );
}

function Section(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.dragons.map( dragon => {
        return <DragonCard dragon={dragon} />
      })}
    </div>
  )
}

class DragonCard extends React.Component {

  state = {
    atWar: true
  } 

  handleClick = () => {
    this.setState({ atWar: this.state.atWar == true ? false : true })
  }
 
  render = () => {
    return (
      <div onClick={this.handleClick} >
        <h3>{this.props.dragon.name}</h3>
        <p>{this.props.dragon.description}</p>
        <img style={{ width: '100px' }} src={this.props.dragon.image}/>
        <p>{this.state.atWar == true ? 'At War' : 'At Home'}</p>
      </div>
    )
  }

}


export default App;