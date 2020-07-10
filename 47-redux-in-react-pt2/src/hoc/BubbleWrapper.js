import React, { Component } from 'react';
import bubble from '../assets/bubble.png';

// functionally janky way of making bubbles

// This is an HOC, similar to how Redux's connect() returns a new component, except
// connect() is actually a function that returns a function
// the returned function is an HOC, similar to the HOC in this file
// The next invokation results in wrapping the component and returning a wrapped component
// connect(args) returns HOC -> connect(args)(SomeComponent) -> returns wrapped component

const keyframes = "@keyframes upward { 100% {transform: translateY(-200px)} }";

let styleSheet = document.styleSheets[0];
styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

function bubbleStyle(pos) {
  return {
    width: '70px',
    position: 'absolute',
    left: pos[0].toString() + 'px',
    top: pos[1].toString() + 'px',
    animation: 'upward 2s'
  };
}

function BubbleWrapper(ComponentWrap) {
  return class Bubbles extends Component {
    constructor() {
      super();
  
      this.state = {
        bubbles: []
      }
    }
  
    makeBubbles = () => (
      this.state.bubbles.map(pos => 
        <img src={bubble} style={bubbleStyle(pos)} alt="bubble" key={Math.random()} />
      )
    )
  
    handleMouseEnter = e => {
      this.setState({ bubbles: [...this.state.bubbles, [e.clientX, e.clientY]] });
      setTimeout(() => this.setState({ bubbles: this.state.bubbles.slice(1) }), 1000);
    }
  
  
    render() {
      return (
        <>
          <ComponentWrap {...this.props} bubbleFun={this.handleMouseEnter} />
          {this.makeBubbles()}
        </>
      )
    }
  }
}

export default BubbleWrapper;
