function createStore(reducer) {
  let state = {};

  function getState() {
    return 'Getting the state';
  }

  function dispatch(action) {
    return 'Dispatching an action';
  }

  function subscribe(listener) {
    
  }

  return {
    getState,
    dispatch,
    subscribe
  }
}

function combineReducers(reducerPOJO) {
  return function(state, action) {
    let combinedState = {};
    let hasChanged = false; 

    for (const key in reducerPOJO) {
      const stateSlice = state ? state[key] : undefined;
      const newSlice = reducerPOJO[key](stateSlice, action);

      combinedState[key] = newSlice;

      if (stateSlice !== newSlice) {
        hasChanged = true;
      }
    }

    return (hasChanged) ? combinedState : state;
  };
}

