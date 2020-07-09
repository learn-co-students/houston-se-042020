import React, { Component } from 'react';

// update only when selectedCat changes
// what is the old cat? and is the new selectedCat different?
// if it's different, force a re-render

class Details extends Component {
  constructor() {
    super();

    this.state = {
      oldSelectedCat: window.store.getState().selectedCat
    }
  }

  componentDidMount() {
    window.store.subscribe(() => {
      // compare old state to new state
      if (this.state.oldSelectedCat !== window.store.getState().selectedCat) {
        this.forceUpdate();
        this.setState({ oldSelectedCat: window.store.getState().selectedCat });
      }
    });
  }

  render() {
    console.log('render Details');

    return (
      <div>
        <h2>Cat Details</h2>
        <p>{ window.store.getState().selectedCat }</p>
      </div>
    )
  }
}

// function Details() {
//   console.log('render Details');

//   return (
//     <div>
//       <h2>Cat Details</h2>
//       <p>{ window.store.getState().selectedCat }</p>
//     </div>
//   )
// }

export default Details;