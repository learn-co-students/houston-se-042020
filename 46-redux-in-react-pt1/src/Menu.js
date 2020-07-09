import React, { Component } from 'react';
import MenuItem from './MenuItem';

// update only when cat added to cats

class Menu extends Component {
  constructor() {
    super();

    this.state = {
      cats: window.store.getState().cats
    }
  }

  componentDidMount() {
    window.store.subscribe(() => {
      if (this.state.cats !== window.store.getState().cats) {
        this.forceUpdate();
        this.setState({ cats: window.store.getState().cats });
      }
    });
  }

  render() {
    console.log('render Menu');

  return (
    <nav>
      <h2>Cat Menu</h2>
      { window.store.getState().cats.map(cat => < MenuItem catName={cat} key={cat} />) }
    </nav>
  )
  }
  
}

// function Menu({ selectCat }) {
//   console.log('render Menu');

//   return (
//     <nav>
//       <h2>Cat Menu</h2>
//       { window.store.getState().cats.map(cat => < MenuItem catName={cat} key={cat} selectCat={selectCat} />) }
//     </nav>
//   )
// }

export default Menu;