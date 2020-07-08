/********************************************/
/** Use this file for reducers and actions **/
/********************************************/

const initialCatState = {
  cats: ['Meowser', 'Charlie', 'Fluffanilla'],
  selectedCat: 'Meowser',
  owner: 'Meee'
};

function catReducer(state=initialCatState, action) {
  
}






























/**********************************************/
/***  DOG STUFF TO UNCOMMENT IF WE GET HERE ***/
/**********************************************/

// const dogState = {
//   dogs: ['Chi Chi', 'Paw Paw'],
//   selectedDog: 'Chi Chi',
//   owner: 'You'
// };

// const dogReducer = (state=dogState, action) => {
//   switch(action.type) {
//     case 'ADD_DOG':
//       return {
//         ...state,
//         dogs: [...state.dogs, action.dog]
//       };
//     case 'SELECT_DOG':
//       if (state.dogs.includes(action.dog)) {
//         return {
//           ...state,
//           selectedDog: action.dog
//         }
//       } else {
//         return state;
//       }
//     case 'ADD_OWNER':
//       return {
//         ...state,
//         owner: action.owner
//       }
//     default:
//       return state;
//   }
// };

// const addDog = dog => ({
//   type: 'ADD_DOG',
//   dog
// });

// const selectDog = dog => ({
//   type: 'SELECT_DOG',
//   dog
// });