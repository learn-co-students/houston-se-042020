import React from 'react';
import { connect } from 'react-redux';
import { selectCat } from './actions/catActions';

function MenuItem({ catName, catParty }) {

  console.log('render MenuItem');
  
  const handleClick = e => {
    catParty(e.target.textContent);
  };

  return (
    <div onClick={ handleClick }>{catName}</div>
  )
}

// export default MenuItem;

const mapDispatchToProps = dispatch => ({
  catParty: cat => dispatch(selectCat(cat))
});

export default connect(null, mapDispatchToProps)(MenuItem);

// export default connect(null, { selectCat })(MenuItem);