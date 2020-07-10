const initialState = {
  woofies: ['Dog Baby', 'ChubbyPubby', 'Rando'],
  chosenWoofy: 'Dog Baby'
};

const wooofyReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'ADD_WOOFY':
      return {
        ...state,
        woofies: [...state.woofies, action.woofy]
      };
    case 'CHOOSE_WOOFY':
      return {
        ...state,
        chosenWoofy: action.woofy
      };
    default:
      return state;
  }
};

export default wooofyReducer;