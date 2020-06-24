import React, { Component } from 'react';

const dragons = [
  {
    "id": 1,
    "name": "Toothless",
    "description": "A Night Fury",
    "image": "https://www.wikihow.com/images/b/b2/Draw-Toothless-Step-24.jpg",
    "atWar": false
  },
  {
    "id": 2,
    "name": "Bozar",
    "description": "An uninteresting dragon",
    "image": "https://static.boredpanda.com/blog/wp-content/uploads/2015/05/What-are-dragons-doing-nowadays-fb3.jpg",
    "atWar": true
  },
  {
    "id": 3,
    "name": "Tomar",
    "description": "An interesting dragon",
    "image": "https://media.giphy.com/media/bU660Y0VKPvCE/giphy.gif",
    "atWar": true
  }
]


// Inverseflow Data
//  - Sending data from the child to the parent
//  - Changing state in a parent component from a child component
//  - Creating our own custom events


class App extends React.Component {

  state = {
    homeDragons: dragons.filter( dragon => dragon.atWar == false),
    warDragons: dragons.filter( dragon => dragon.atWar == true)
  }

  moveDragon = (dragon) => {
    if(this.state.warDragons.includes(dragon)){
      this.setState({
        homeDragons: [ ...this.state.homeDragons, dragon ],
        warDragons: this.state.warDragons.filter( eachDragon => eachDragon != dragon) 
      })
    } else {
      this.setState({
        warDragons: [ ...this.state.warDragons, dragon ],
        homeDragons: this.state.homeDragons.filter( eachDragon => eachDragon != dragon) 
      })
    }
  }

  render() {
    console.log(this.state)
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








function Section(props) {
  return (
    <div style={{ float: props.float, width: '40%', padding: '5%', backgroundColor: props.color }}>
      <h1>{props.title}</h1>
      {props.dragons.map(dragon => {
        return <DragonCard dragon={dragon} onClick={props.moveDragon} />
      })}
    </div>
  )
}











class DragonCard extends React.Component {
  
  handleClick = () => {
    this.props.onClick(this.props.dragon)
  }

  render = () => {
    return (
      <div onClick={this.handleClick} >
        <h3>{this.props.dragon.name}</h3>
        <p>{this.props.dragon.description}</p>
        <img style={{ width: '100px' }} src={this.props.dragon.image} />
      </div>
    )
  }

}



class TaskList extends Component {
  state = {
    numberCompleted: 0,
    completedTasks: [],
    tasks: [
        { content: 'Make Dinner' }, 
        { content: 'Eat Dinner' }
    ]
  }

completeTask = () => {
    this.setState({
        numberCompleted: this.state.numberCompleted + 1
    })
  }

render(){
    return (
      <div>
        <h1>Number Completed: {this.state.numberCompleted}</h1>
        {this.state.tasks.map( task => (
          <TaskItem task={task} onCompleted={this.completeTask} />
        ))}
      </div>
    )
  }

}

class TaskItem extends Component{

render(){
  const task = this.props.task
return (
    <div>
        <input type="checkbox" onClick={this.props.onCompleted} />
        <h3>{task.content}</h3>
      </div>
  )
}

}


 export default App;