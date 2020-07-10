const initialState = {
  cats: ['Meowser', 'Charlie', 'Fluffanilla'],
  selectedCat: 'Meowser'
};

function catReducer(state=initialState, action) {
  switch(action.type) {
    case 'SELECT_CAT':
      return {
        ...state,
        selectedCat: action.cat
      };
    case 'ADD_CAT':
      return {
        ...state,
        cats: [...state.cats, action.cat]
      };
    default:
      return state;
  }
}

export default catReducer;
