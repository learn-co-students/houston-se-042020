import React from 'react';

function MenuItem({ catName, selectCat }) {

  console.log('render MenuItem');
  
  const handleClick = e => {
    selectCat(e.target.textContent);
  };

  return (
    <div onClick={ handleClick }>{catName}</div>
  )
}

export default MenuItem;