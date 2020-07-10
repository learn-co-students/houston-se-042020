import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCat } from './actions/catActions';

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
    // this.props.addCat(this.state.newCat);
    this.props.beyonce(this.state.newCat);
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

// export default Form;

const mapDispatchToProps = dispatch => ({
  beyonce: cat => dispatch(addCat(cat))
});

export default connect(null, mapDispatchToProps)(Form);
