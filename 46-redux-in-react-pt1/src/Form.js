import React, { Component } from 'react';
import { addCat, selectCat } from './actions/catActions';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newCat: ''
    };
  }

  handleChange = e => {
    this.setState({newCat: e.target.value});
  }

  handleSubmit = e => {
    e.preventDefault();
    window.store.dispatch(addCat(this.state.newCat));
    window.store.dispatch(selectCat(this.state.newCat));
    // this.props.addCat(this.state.newCat);
    this.setState({newCat: ''});
  }

  render() {
    console.log('render form');

    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Add a Cat</h2>
        <input type="text" value={this.state.newCat} onChange={this.handleChange} />
        <input type="submit" />
      </form>
    )
  }
}

export default Form;
