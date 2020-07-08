# Build Mini Redux
Let's build an even lighter version of Redux to understand how it works and why it works that way.

## 1. createStore(reducer)
This function returns an object (POJO) that has some methods available on it. Typically, we store the object returned in a variable called `store`. The `store` gives us access to the state of our app and allows us to update that state using functional programming.

- `createStore()` is a function. It stores a reference to the store's state as a POJO ({}). The state is reassignable.
- It takes a single argument: `reducer`.
- It returns a POJO that makes some methods available to us. We'll focus on `getState()` and `dispatch()`. Stub those out for now and have them return a string containing the name of the function. You'll fill them in later.

> Test your code by creating a store, and then calling methods upon it to check that there are no errors.

## 2. getState()
- `getState()` returns the state of the store. That's it.

> Test that the state is being returned.

## 3. Stub out the catReducer()
Reducers are pure functions. That means they have no side effects and are entirely reliant on their inputs to produce an output. This makes them wonderfully predictable. Reducers are called reducers because they reduce their inputs to a single value (the new state), similar to Array.prototype.reduce().

All code will be written outside of `createStore()` since this code is specific to each app. In other words, Redux requires you to write this code yourself anyway.

1. Declare the initial state you want to use for your app by storing it in an object like so:
```
const initialCatState = {
  cats: ['Meowser', 'Charlie', 'Fluffanilla'],
  selectedCat: 'Meowser'
};
```
2. Declare a reducer called `catReducer()`. It should be a function that takes two arguments: state, action.
3. Create a `switch` statement that determines which code runs based on the action type. For now, just add a default case that returns the state.

> Test that the reducer returns the initial state when invoked with the following arguments: `undefined`, `{ type: 'QUICK_MAFFS_INIT' }`.

## 4. dispatch(action)
This function calls the reducer with the current state in the store and an action. It then uses the returned value from the reducer to update the store with the new state.

- `dispatch()` takes a single argument (action).
- It sets the store's state by calling the `reducer` with the current state of the store and the action.

> Test your code by updating the call to `createStore` by passing in the `catReducer`. Next, call `dispatch()` on the `store` with the same action as before. Call `store.getState()` to check if the store's state was updated correctly.

## 5. Update createStore() to set the initial state as soon as it's invoked with a reducer
When successful, you should be able to do this:
```
const store = createStore(catReducer);
store.getState(); // returns initialCatState
```

## 6. Create an action that adds a cat to the state
An action is a POJO. It has one mandatory key: `type`, and one optional key that is referred to as payload. The payload actually goes by many names in practice and its name is usually determined by what the payload is.

Actions are like HTTP requests. The `type` tells the reducer what you want to do: Do you want to add a cat? Do you want to select a cat? Delete a cat, you monster!? This is similar to the HTTP verb or method, like PATCH or POST. The payload contains data that is necessary to complete the action. For example, it might contain the name of a cat. The payload is similar to the body of an HTTP request, which contains the information needed to complete the request when making a POST or PATCH request.

1. Declare an action called `addCat`. Its `type` will be `'ADD_CAT'` and the payload can be any name you like. Give the payload a key of `cat`.

> How can we make this more flexible? What if we wanted to add a cat with any name of our choosing? What can we do? Action creator!

## 7. Update the catReducer to respond to our ADD_CAT action type
The reducer currently has a default case, which returns the current state. We need to make it add a cat to our cats array. Keep the following in mind:

- Reducers are pure functions, so they cannot mutate state.
- They must always return the state.

> Test your code by dispatching an action to the store, and then checking if the cat has been added.

## 8. Add the ability to select a cat
Our state contains a key: `selectedCat`. What can we do to select a new cat? How can we make sure that only existing cats are selected (e.g. cats in the cats Array)?

> Test to see that you can select a cat. And that you can't select a non-existent cat.

# ---------- BONUS ----------

## 9. subscribe(listener)
Add the `subscribe()` method to `createStore()`. `subscribe()` is used to run a callback any time the store's state _might_ have changed. When we start using Redux in React, we'll use this method to force components to update. And then we'll start using react-redux and not use this method at all, because that's just how life is sometimes. But do know that it will be used under the hood, waving to us from underneath a bedsheet of code.

1. This method is called on the store with a callback called `listener`. 
2. That callback is automatically run any time an action is dispatched.

> Test your code. Dispatch an action, there should be no errors. Subscribe a listener that logs a string to the console, maybe 'You\ve subscribed!'. Dispatch several actions. Your string should print every time.

## 10. Add the ability to unsubscribe
1. When calling `subscribe()` on the store, it should return a method that allows you to unsubscribe the listener.

> Test your code. Run the following code:
```
const unsubscribe = store.subscribe(() => { console.log('Subscribed to the Dispatch Daily!'); });
store.dispatch(selectCat('Charlie')); // should print the string
unsubscribe();
store.dispatch(selectCat('Charlie')); // Nothing should print
```

## 11. Create combineReducers(reducersPOJO)
This method allows you to have multiple reducers manage different slices of state in your app. Imagine our app wasn't just handling cats, but also dogs. What if it was also handling owners? We could have one reducer handle the dogs, cats, and owners, but it makes more sense to separate our concerns and have one reducer per concern. However, we can only provide a single reducer to `createStore()`. This is where `combineReducers()` comes in! It's included with Redux by default, but we'll make our own. The great thing about `combineReducers()` is that it doesn't change how we code any of our existing reducers (unless we want to change their names for some reason).

This is what we want to be able to do:
```
const rootReducer = combineReducers({
  cat: catReducer,  // initialCatState will now be stored at the key cat
  dog: dogReducer   // initialDogState will now be stored at the key dog
});  // returns a function that can be passed to createStore()

const store = createStore(rootReducer);
store.getState(); // returns { cat: { cats: ['Meowser',...], selectedCat: 'Meowser' }, dog: { dogs: ['Chi Chi',...], selectedDog: 'Chi Chi' } }
store.dispatch(addCat('Meow Beans'));
store.dispatch(addDog('Woofin\' McWoofenStooffer'));
```

1. Uncomment the `dogReducer` and its associated actions. We'll need this for testing later.
2. Declare `combineReducers()` outside of `createStore()`. It should take one argument: `reducersPOJO`.
3. Our function should return a function, since that's what `createStore()` needs. The returned function should take the same arguments as a regular reducer. This is important because `dispatch()` is going to carry on running just like it always did.
4. We need to track whether our state has changed when we run the reducers inside of the `reducersPOJO`. Declare a variable called `hasChanged` and set it to `false`.
5. We also need to store each slice of state in a new object. Declare `combinedState` as an empty object.
6. Call each reducer with its associated slice of state and the action. If the state returned by the reducer is not equal to the original slice, set `hasChanged` to `true`. Otherwise leave it alone. Store the slice of state at the relevant key in the `combinedState` object.
7. Once all the reducers have been run, return the new state. If the state `hasChanged` return `combinedState`. If the state has NOT changed, return the original `state`.

> Test to see if you can get the correct initial state with cats and dogs. Once that's working, check if you can successfully dispatch actions to update state. Also dispatch a nonsense action and check that the old state is the same as the new state.

## 12. Make catReducers and dogReducers respond to the same action
Let's see if `combineReducers()` is really working as it should. If it is, we should be able to make cats and dogs respond to the same action.

1. Declare an action creator `addOwner(name)` that adds an owner to a cat or a dog.
2. Update the initial states for the cat and dog by adding an owner key. Give it some name of your choosing.
3. Update the reducers for cats and dogs to respond to the `'ADD_OWNER'` action. It should set the owner to the action's payload.

> Test the code by dispatching the addOwner action to the store. Then check to see if it updated the owner for both cats and dogs.
