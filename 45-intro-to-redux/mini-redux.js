function createStore(reducer) {
  let state;
  let subscribedListener;

  function getState() {
    // return 'Getting the state';
    return state;
  }

  function dispatch(action) {
    // return 'Dispatching an action';
    state = reducer(state, action);

    if (typeof subscribedListener === 'function') {
      subscribedListener();
    }
  }

  function subscribe(listener) {
    subscribedListener = listener;
  }

  dispatch({ type: 'THOSE_SOME_QUICK_MAFFS_INIT' });

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

