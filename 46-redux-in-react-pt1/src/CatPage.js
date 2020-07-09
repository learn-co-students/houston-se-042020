import React, { Component } from 'react';
import Details from './Details';
import Menu from './Menu';
import Form from './Form';

class CatPage extends Component {
  constructor() {
    super();

    this.state = {
      cats: ['Meowser', 'Charlie', 'Fluffanilla'],
      selectedCat: 'Meowser'
    }
  }

  // componentDidMount() {
  //   window.store.subscribe(() => {
  //     this.forceUpdate();
  //   });
  // }

  // selectCat = (cat) => {
  //   this.setState({ selectedCat: cat });
  // }

  // addCat = (cat) => {
  //   this.setState({
  //     cats: [...this.state.cats, cat],
  //     selectedCat: cat
  //   });
  // }

  render() {
    console.log('rendering CatPage');

    return (
      <>
        <h1>Cat Page</h1>
        <Menu />
        <Details />
        <Form />
      </>
    )
  }
}

export default CatPage;