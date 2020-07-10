import React from 'react';
import MenuItem from './MenuItem';

function Menu({ cats, selectCat }) {
  console.log('render Menu');

  return (
    <nav>
      <h2>Cat Menu</h2>
      { cats.map(cat => < MenuItem catName={cat} key={cat} selectCat={selectCat} />) }
    </nav>
  )
}

export default Menu;