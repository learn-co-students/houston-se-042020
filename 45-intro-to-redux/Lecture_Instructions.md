# Let's Build Redux Together!

## 1. Return the state from the store
Calling `store.getState()` should return the empty object in the store.

## 2. Modify the catReducer to return the initialCatState
Use a switch statement.

Calling `catReducer(undefined, { type: 'THOSE_SOME_QUICK_MAFFS_INIT' })` should return the initialCatState.

## 3. Finish dispatch(action)
Dispatch calls the reducer with the current state and an action. It uses the return value to update the state.

Calling `store.dispatch({ type: 'THOSE_SOME_QUICK_MAFFS_INIT' })`, and then `store.getState()` should return the initialCatState.

## 4. Modify the code to set the initial state when the store is created
Calling `store.getState()` right after creating the store should return the initialCatState.

## 5. Create the addCat action to add a cat to cats in the state
An action has a type and a payload. The type describes what to do, and the payload is the data needed to complete the request.

## 6. Convert the addCat action into an action creator
Make it so that you can add a cat with any name.

## 7. Update catReducer to respond to the addCat action
Calling `store.dispatch(addCat('Xanadu'))` followed by `store.getState()` should show that Xanadu was added to cats.

## 8. Make it possible to select a cat
Only existing cats should be selectable.

Calling `store.dispatch(selectCat('Charlie'))` should update selectedCat to Charlie. Check by running `store.getState()`.

Calling `store.dispatch(selectCat('Blurpies'))` should not change selectedCat. Check by running `store.getState()`.


## BONUS 1: Add subscribe(listener) to the store
Subscribe provides the ability to run a function any time the state might have changed. It takes one argument, a function.

If it's working the following should happen:
```
store.dispatch(addCat('Blunder Year'));
store.subscribe(() => { console.log('Thanks for subscribing!'); });
store.dispatch(addCat('Moooo')); // logs Thanks for subscribing!
store.dispatch(selectCat('Charlie')); // logs Thanks for subscribing!
```

Once you get that working, add the ability to unsubscribe so that the function (listener) is no longer called. For this to work, you'll need subscribe() to return a function.

If it's working the following should happen:
```
store.dispatch(addCat('Blunder Year'));
const unsubscribe = store.subscribe(() => { console.log('Thanks for subscribing!'); });
store.dispatch(addCat('Moooo')); // logs Thanks for subscribing!
store.dispatch(selectCat('Charlie')); // logs Thanks for subscribing!
unsubscribe();
store.dispatch(selectCat('Meowser'));
```

## BONUS 2: Add dogs to the app using combineReducers()
Uncomment all of the dog business in custom.js. OR, if there's enough time, write the dogReducer and actions yourself. You can test your dog code by creating a dogStore.

Next, combine the dogs and cats using combineReducers(reducersPOJO). combineReducers() takes an object where each reducer is associated with a specific key. Each key is associated with its own slice of state, e.g. cat with initialCatState and dog with initialDogState.

Create a store using the combined reducers and check that works. If it does, you'll see the cat and dog states in a single store and be able to update them accordingly.

## BONUS 3: Subscribe multiple listeners
Redux actually allows us to subscribe multiple listeners which run any time the state might have changed. Each listener can be unsubscribed one by one. 

If it's working the following should happen:
```
store.dispatch(addCat('Blunder Year'));
const unsubscribe1 = store.subscribe(() => { console.log('Thanks for subscribing!'); });
const unsubscribe2 = store.subscribe(() => { console.log('Thanks for subscribing again!'); });
const unsubscribe3 = store.subscribe(() => { console.log('Thanks for subscribing once more yay!'); });
store.dispatch(addCat('Moooo')); // logs all of the messages above
store.dispatch(selectCat('Charlie')); // logs all of the messages
unsubscribe2();
store.dispatch(selectCat('Meowser')); // logs the first and third messages only
```
