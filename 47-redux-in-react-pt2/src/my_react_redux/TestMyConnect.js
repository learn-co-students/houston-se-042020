import React, { useState } from 'react';
import { myConnect } from './my_react_redux';
import { addWoofy, chooseWoofy, uselessAction } from './woofyActions';

/*** This is just to test that myConnect works ***/
/*** Never code a component like this, such bad ***/

function TestMyConnect({ woofies, chosenWoofy, extraTest, chooseWoofy, addWoofy, uselessAction }) {
  const [woofyValue, setWoofyValue] = useState('');

  const handleChange = e => {
    setWoofyValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    addWoofy(woofyValue);
    setWoofyValue('');
  };
console.log('render woofies')

  return <div>
    <h2>Testing myConnect()</h2>
    <ul>
      <li>Woofies: {woofies.join(', ')}</li>
      <li>Chosen Woofy: {chosenWoofy}</li>
      <li>Prop added in App: {extraTest}</li>
    </ul>

    <form onSubmit={handleSubmit}>
      <h3>Add a Woofy</h3>
      <input type="text" value={woofyValue} onChange={handleChange} />
      <input type="submit" />
    </form>
    
    <div>
      <h3>Choose a Woofy</h3>
      {woofies.map(woofy => <button key={woofy} onClick={() => chooseWoofy(woofy)}>{woofy}</button>)}
    </div>

    <div>
      <h3>Click to make sure component doesn't re-render when state does not change</h3>
      <button onClick={() => uselessAction('blah')}>Dispatch Action w/ Invalid Type</button>
    </div>
  </div>
}

const mapStateToProps = state => ({
  woofies: state.woofies,
  chosenWoofy: state.chosenWoofy
});

const mapDispatchToProps = dispatch => ({
  addWoofy: woofy => dispatch(addWoofy(woofy)),
  chooseWoofy: woofy => dispatch(chooseWoofy(woofy)),
  uselessAction: woofy => dispatch(uselessAction(woofy))
});

export default myConnect(mapStateToProps, mapDispatchToProps)(TestMyConnect);

