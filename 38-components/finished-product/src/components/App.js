import React, { Component } from 'react';
import War from './War'
import Home from './Home'

class App extends Component {

  state = {
    dragons: [],
    dragonsAtWar: []
  }

  componentDidMount() {
    fetch('http://localhost:3001/dragons')
      .then(res => res.json())
      .then(dragons => this.setState({ 
        dragons: dragons.filter( dragon => dragon.atWar == false),
        dragonsAtWar: dragons.filter( dragon => dragon.atWar == true)
      }))
  }

  sendToWar = (selectedDragon) => {
    this.setState({
      dragons: this.state.dragons.filter(dragon =>  dragon != selectedDragon),
      dragonsAtWar: [...this.state.dragonsAtWar, { ...selectedDragon, atWar: true }]
    })
    fetch(`http://localhost:3001/dragons/${selectedDragon.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        atWar: true
      })
    })
  }

  sendHome = selectedDragon => {
    this.setState({
      dragons: [...this.state.dragons, { ...selectedDragon, atWar: false }],
      dragonsAtWar: this.state.dragonsAtWar.filter(dragon => dragon != selectedDragon)
    })
    fetch(`http://localhost:3001/dragons/${selectedDragon.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        atWar: false
      })
    })
  }

  render() {
    return (
      <div>
        <Home dragons={this.state.dragons} sendToWar={this.sendToWar} />
        <War dragons={this.state.dragonsAtWar} sendHome={this.sendHome} />
      </div>
    );
  }
}

export default App;
