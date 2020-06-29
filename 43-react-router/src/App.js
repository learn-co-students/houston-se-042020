import React from 'react';
// import Nav from './NavBar'
import 'semantic-ui-css/semantic.min.css';

import NavBar from './NavBar'
import {PaintingsDisplay} from './PaintingsDisplay'
import PaintingForm from './PaintingForm';
import paintings from './paintings'
import PaintingInfo from './PaintingInfo'
import {BrowserRouter, Route, Switch} from 'react-router-dom'



class App extends React.Component {

  constructor(){
    super()
    this.state = {
      testNew: "testnew",
      obj: {
        test: "test"
      },
      form: false,
      paintings: paintings
    }
  }

  changeState = () => {
    this.setState({
      testNew: "changing value"
    }, () => console.log(this.state.testNew) )
    console.log(this.state.testNew) 
  }

  toggleForm = () => {
    this.setState({
      form: !this.state.form
    })
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

    this.setState({
      paintings: [...this.state.paintings, newPainting],
      form: !this.state.form
    })

  }


  render(){

  return (
    <BrowserRouter>
        <div>
            <NavBar/>

            {/* <Route path="/paintings" component={PaintingsDisplay} /> */}
            <Switch>
              <Route
              exact 
              path="/paintings" 
              render={(routeProps) => 
              <PaintingsDisplay 
              {...routeProps} 
              paintings={this.state.paintings}
              {...this.state.obj} /> }/>

              <Route 
              path="/paintings/form"
              render = {(routeProps) => <PaintingForm {...routeProps} addPainting={this.addPainting}/>}
              />

              <Route
              path="/paintings/:id"
              component={PaintingInfo}/>

            </Switch>

            {/* <button onClick={this.toggleForm}>Display/Hide form</button> */}
            {/* {
              this.state.form
              ? <PaintingForm addPainting={this.addPainting}/> //true
              : <PaintingsDisplay paintings={this.state.paintings} /> //false
            } */}
    
        </div>
    </BrowserRouter>
 
  );
  }
}

export default App;
