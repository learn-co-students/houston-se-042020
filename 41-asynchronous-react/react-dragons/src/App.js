import React from 'react';
import { Section } from './Section'


class App extends React.Component {

  state = {
    homeDragons: null,
    warDragons: null
  }

  constructor() {
    console.log('constructor runs')
    super()
  }

  moveDragon = (dragon) => {

    if (this.state.warDragons.includes(dragon)) {
      // Moving to Home
      this.setState({
        homeDragons: [...this.state.homeDragons, dragon],
        warDragons: this.state.warDragons.filter(eachDragon => eachDragon != dragon)
      })
    } else {
      // Moving to War
      this.setState({
        warDragons: [...this.state.warDragons, dragon],
        homeDragons: this.state.homeDragons.filter(eachDragon => eachDragon != dragon)
      })
    }

    fetch(`http://localhost:3000/dragons/${dragon.id}`, {
      method: 'PATCH',
      headers: {
        // Us telling the server I'm sending you json data
        'Content-Type': 'application/json',

        // Us telling the server what type of data we want back
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        atWar: !dragon.atWar
      })
    })
  }

  componentDidMount() {
    console.log('componentDidMount ran')
    fetch('http://localhost:3000/dragons')
      .then(res => res.json())
      .then(dragons => {
        this.setState({
          homeDragons: dragons.filter(dragon => dragon.atWar == false),
          warDragons: dragons.filter(dragon => dragon.atWar == true)
        })
      })
  }

  render() {
    console.log('render runs')

    if (this.state.homeDragons === null) {
      return <h1>Loading...</h1>
    } else {
      return (
        <div>
          <Section
            dragons={this.state.homeDragons}
            title="Home"
            float="left"
            color="#00ffd8"
            moveDragon={this.moveDragon}
          />
          <Section
            dragons={this.state.warDragons} title="War"
            float="right"
            color="#f98181"
            moveDragon={this.moveDragon}
          />
        </div>
      );
    }
  }
}

export default App;