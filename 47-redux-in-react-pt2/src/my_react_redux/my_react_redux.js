import React, { Component, createContext } from 'react';

// React Context allows us to share values anywhere in the Component tree
// as long as the child Components are wrapped by a Provider. i.e. no need
// to pass props through components that don't use them
const storeContext = createContext({});

/*************************************************************************************/
/* MyProvider replicates the core functionality of <Provider store={store} />        */
/* It wraps the child Components in a Context Provider to share the store w/ the     */
/* children                                                                          */
/*************************************************************************************/

export class MyProvider extends Component {
  render() {
    return <storeContext.Provider value={this.props.store}>
      {this.props.children}
    </storeContext.Provider>
  }
}

/**************************************************************************************/
/* myConnect() replicates the core functionality of connect()                         */
/* The wrapped component only updates (via subscribe()) if its slice of state changes */
/* The slice of state is determined by mapStateToProps                                */
/* Unlike connect(), mapDispatchToProps cannot be an object in myConnect()            */
/**************************************************************************************/

export function myConnect(mapStateToProps, mapDispatchToProps) {
  return function(Wrapped) {
    return class ConnectedComponent extends Component {
      static contextType = storeContext;  // allow access to store from React Context through this.context

      componentDidMount() { // monitor for state slice changes, force re-render if change
        this.oldStateSlice = mapStateToProps(this.context.getState());

        this.unsubscribe = this.context.subscribe(() => {
          const stateSlice = mapStateToProps(this.context.getState());

          for (const key in stateSlice) {
            if (this.oldStateSlice[key] !== stateSlice[key]) {
              this.oldStateSlice = stateSlice;
              this.forceUpdate();
            }
          }
        });
      }
      // stop monitoring for changes if component is removed from DOM
      componentWillUnmount() {
        this.unsubscribe();
      }

      render() {
        return <Wrapped {...this.props} {...mapStateToProps(this.context.getState())} {...mapDispatchToProps(this.context.dispatch)} />
      }
    }
  }
}
