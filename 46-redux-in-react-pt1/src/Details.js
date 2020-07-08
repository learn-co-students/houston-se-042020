import React from 'react';

function Details({ cat }) {
  console.log('render Details');

  return (
    <div>
      <h2>Cat Details</h2>
      <p>{ cat }</p>
    </div>
  )
}

export default Details;