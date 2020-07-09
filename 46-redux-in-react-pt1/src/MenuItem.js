import React from 'react';
import { selectCat } from './actions/catActions';

function MenuItem({ catName }) {

  console.log('render MenuItem');
  
  const handleClick = e => {
    window.store.dispatch(selectCat(e.target.textContent));
    // selectCat(e.target.textContent);
  };

  return (
    <div onClick={ handleClick }>{catName}</div>
  )
}

export default MenuItem;