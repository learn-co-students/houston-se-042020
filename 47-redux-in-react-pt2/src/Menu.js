import React from 'react';
import MenuItem from './MenuItem';
import { connect } from 'react-redux';

function Menu({ cats }) {
  console.log('render Menu');

  return (
    <nav>
      <h2>Cat Menu</h2>
      { cats.map(cat => < MenuItem catName={cat} key={cat} />) }
    </nav>
  )
}

// export default Menu;

const mapStateToProps = state => ({
  cats: state.cats
});

export default connect(mapStateToProps)(Menu);
