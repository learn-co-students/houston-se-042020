import React from 'react';
import PaintingInfo from './PaintingInfo';

export function PaintingsDisplay(props) {
  console.log(props.test_props)
  return (
    <div>
      {/* <h3>Display Component</h3> */}
      {props.paintings.map(painting =>   <PaintingInfo painting={painting} key={painting.id}/> )}
    
    </div>
  );
}