import React from 'react';
import paintings from './painting'
import 'semantic-ui-css/semantic.min.css';
import NavBar from './NavBar'
import PaintingList from './PaintingList'
import PaintingForm from './PaintingForm'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './Login'
import SignUp from './SignUp'



class App extends React.Component{

  constructor(){
    super()
    this.state = {
      testNew: "testnew",
      test: "test",
      form: false,
      paintings: []
    }
  }

  addPainting = (e) => {
    e.preventDefault()
  
    let newPainting = {
      title: e.target[0].value,
      image: e.target[1].value,
      artist: {
        name: e.target[2].value
      }
    }

    let newArr = [...this.state.paintings, newPainting]

    this.setState({
      paintings: newArr
    }) 
  }

  getPaintings = () => {
      fetch("http://localhost:3000/api/v1/paintings",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        } 
      })
      .then(res => res.json())
      .then(console.log)
  }

  render(){

    return (
   
      <BrowserRouter>
    <div>
        <NavBar />
        <button onClick={this.getPaintings}>Show Paintings</button>
        <Switch>

        <Route path="/login" component={Login} />

        <Route path="/signup" component={SignUp} />

        <Route path="/paintings/new" render = {(routeProps) =><PaintingForm {...routeProps} add={this.addPainting} /> } />

        <Route path="/paintings" render={() => <PaintingList paintingObjs={this.state.paintings} />}/>
    
        </Switch>
        

    </div>
    </BrowserRouter>
  )};
}

export default App;
