import React from 'react';
import catSpinner from './assets/cat_loading.gif';
import { connect } from 'react-redux';

function Details({ cat }) {
  console.log('render Details');

  return (
    <div>
      <h2>Cat Details</h2>
      <img src={catSpinner} alt="just another cat" width="300px" />
      <h3 className="cat-name">{ cat }</h3>
    </div>
  )
}

// export default Details;

const mapStateToProps = state => ({
  cat: state.selectedCat
});

export default connect(mapStateToProps)(Details);