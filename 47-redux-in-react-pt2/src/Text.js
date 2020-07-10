import React from 'react';
import BubbleWrapper from './hoc/BubbleWrapper';

const pStyle = {
  display: 'inline-block',
  margin: '16px auto',
  border: '2px solid gray',
  borderRadius: '10px',
  padding: '20px'
};

function Text({ text, bubbleFun }) {
  return <p onMouseEnter={bubbleFun} style={pStyle}>
    {text}
  </p>
}

export default BubbleWrapper(Text);
