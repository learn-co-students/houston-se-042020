# Redux in React Part 2, aka react-redux
Let's use react-redux instead of just redux.

Solution branch: https://github.com/helloRupa/redux-lesson/tree/redux

## By the end of this lesson, you should be able to:
Add a centralized store to your app and connect components to it using the tools provided by Redux and React-Redux.

## But Why?
React-Redux makes it easier for us to ensure that our components only update when the slices of state that they're interested in change. This means there is less needless re-rendering of components. Also, React-Redux can help us make our code more modular and reusable! Lastly, we no longer have to pass around the store or put it on the window to make it available to our components.

## How we'll get there:
- Update our puzzle pieces (mental jigsaw), so we know which pieces we have to work with
- Convert our cat app to use Redux and React-Redux

## Updated Puzzle Pieces
The table below shows us which pieces we'll be using in our apps and what those pieces do. The Redux Only column shows which pieces we would need to use if were only adding vanilla Redux to our React apps. The React-Redux column shows which pieces we'd need if we were using both the redux and react-redux pacakages in our app, which is the convention.

Redux Only | React-Redux | Purpose
-----------|-------------|-----------
createStore(reducer) | createStore(reducer) | Create the store
window.store = store | < Provider store={store} /> | Make store available to components
reducer | reducer | Set the initial state and handle actions (state change requests)
combineReducers(reducersPOJO) | combineReducers(reducersPOJO) | Allow different reducers to handle slices of state
actions | actions | Define change requests that update state
dispatch(action) | dispatch(action) | Dispatch actions to the store to change state
window.store.getState().property | mapStateToProps | Read from state to make certain slices available to components
window.store.dispatch(action) | mapDispatchToProps | Dispatch actions from components to update state in store
N/A | connect(mapStateToProps, mapDispatchToProps) | Wrap component in another component to make slices of state and dispatch available as props
store.subscribe(listener) | connect(mapStateToProps, mapDispatchToProps) | Update component only when its slice of state changes (Yes, connect is doing all of the jobs!)

**Pieces from the redux package** 
- `createStore(reducer)`: function that returns the store
- `combineReducers(reducersPOJO)`: function that returns a function combining reducers

**Pieces from the react-redux package**
- `Provider`: Component that typically wraps App and makes the store available to `connect`ed components. It provides access to the store via a React feature called Contexts.
```
<Provider store={store}>
  <App />
</Provider>
```
- `connect(mapStateToProps, mapDispatchToProps)(Component)`: function that connects slices of state and the dispatching of specific actions to a component. The first call returns an HOC and takes a component as an argument. The second call returns a wrapped component that has the specified slices of state and actions connected to it. Either of the arguments can be null if the component doesn't read from state or update it.

**Custom pieces we build ourselves**
- Reducer/s: pure functions that contain a switch statement. Sets the initial state and determines what happens based on action type. Always returns state.
- Actions or action creators: object containing one mandatory key (type) and one optional key (payload). Serve as state change requests.
- `mapStateToProps`: function that receives the state as an argument (is called inside of connect with state). Returns an object where the keys map to prop names and the values are the values stored in the store's state.
- `mapDispatchToProps`: function that receives dispatch as an argument (is called inside of connect with dispatch). Returns an object where the keys map to prop names and the values are functions that dispatch specific actions that update state.

```
// Notice how the props map to the keys in mapStateToProps and mapDispatchToProps
function CatComponent({ cats, selectedCat, addCat, selectCat }) {
  return <div>
    // some code and stuff for rendering this component
  </div>
}

// before we had: window.store.getState().cats
// and window.store.getState().selectedCat
// both called within the Component itself
// but now we declare this outside the Component
const mapStateToProps = state => ({
  cats: state.cats,
  selectedCat: state.selectedCat
});

// before we had: window.store.dispatch(addCat(cat))
// and window.store.dispatch(selectCat(cat))
// both called within the Component itself
// but now we declare this outside the Component
const mapDispatchToProps = dispatch => ({
  addCat: cat => dispatch(addCat(cat)),
  selectCat: cat => dispatch(selectCat(cat))
});

// we no longer store the store on the window because connect() provides access
// to the relevant slices of state inside the store
// we don't have to subscribe() to update Components either! connect() takes
// care of that for us!! OH MAH GAWD!!!
export default connect(mapStateToProps, mapDispatchToProps)(CatComponent);
```

> Note: If using action creators, `mapDispatchToProps` can be replaced with a simple object `connect(mapStateToProps, { addCat, selectCat })(Component)`

## Import redux and react-redux into the project
`npm install redux && npm install react-redux`

## React-Redux Checklist:
Don't forget to import the necessary functions and components from the redux and react-redux libraries, as well as your actions and reducers, in each Component file that depends on them!

1. Create the store with a reducer (or combined reducers using combineReducers). Make sure it's setting the correct initial state.
2. Wrap App (or some other top-level component) in a Provider. Provider requires the store as a prop.
```
<Provider store={store}>
  <App />
</Provider>
```
3. Declare some actions or action creators that represent state change requests.
4. Update reducer/s to respond to those actions. Test the reducer/s.
5. Connect components to the store using `connect`:
    - If a component ONLY needs to READ from state, mapStateToProps: `connect(mapStateToProps)(ComponentName)`
    - If a component ONLY needs to UPDATE state, mapDispatchToProps: `connect(null, mapDispatchToProps)(ComponentName)`
    - If a component READS and UPDATES state: `connect(mapStateToProps, mapDispatchToProps)(ComponentName)`
    - Update the component to use the props you just added (keys from mapStateToProps and mapDispatchToProps)
    - Export the connected component

## BONUS: Async Redux
So far, we've been populating our page with static data. But what if we wanted to make an HTTP request and use the response to change the store? We'd have to update our state in an async-friendly way.

So far, we've seen how to make actions available to components using `connect()` with `mapDispatchToProps()` or a POJO in the latter's place. This is not quite so straight forward when making async requests.

Let's say we wanted to display a random cat image pulled from an API when the page loads, any time a cat is clicked, and any time a cat is added via the form. While the fetch request is in flight, we want a loading image (like a spinning cat) to appear. Once the response is received, we want to show the image returned from the API.

This requires us to make some changes in our state, since we now have to track whether an image is loading or not:
```
const initialState = {
  ...
  image: {
    url: '',
    loadState: true
  }
};
```

Next, we can update our `catReducer` to respond to some new actions: One that sets the load state to true and does nothing else, and another that sets the url for the cat image and sets the load state to false:
```
case "SET_IMAGE":
  return {
    ...state,
    image: {
      ...state.image,
      url: action.url,
      loadState: false
    }
  };
case "SET_IS_LOADING":
  return {
    ...state,
    image: {
      ...state.image,
      loadState: action.loadState
    }
  };
```

We can then test that this is all working using Redux DevTools and static actions to see if the state changes properly.

Now comes the hard part: we need to make those async calls and update the state with the responses we get. 

### Problem:
Normally, we'd create an action or an action creator and hook that up to the component using `mapDispatchToProps`. However, we can't do that. An action is an object, and an action creator returns an object. This means that dispatch is expecting to receive an object.

So we can't do this inside `mapDispatchToProps`:
```
fetchImage: () => dispatch(fetch(url).then(res => res.json()).then(cat => dispatch(setImage(cat.url))))
```
We can't do this because `fetch()` returns a Promise, and this would cause an error. Also, `fetch()` is asynchronous so even if it returned an object through some magical sorcery, nothing would be dispatched because `dispatch()` is synchronous.

**Solution 1:**

Instead of following the normal pattern in `mapDispatchToProps`, we can change things up a bit. We'll instead declare an action that takes `dispatch` as an argument. That action will return the result of calling `fetch`, in case we need it for _things_, like how we need our Ethereum for _things_. Next, inside of `mapDispatchToProps`, we'll call our special action (that really isn't that actiony anymore) and feed it `dispatch` for supper!

```
// catActions.js
export function fetchImageWithoutMiddleware(dispatch) {
  // set loadState to true before fetching
  dispatch(isLoading);

  // inside fetch, dispatch the action that sets the image URL
  // that same action will set loadState to false, since loading is done
  return fetch('https://api.thecatapi.com/v1/images/search')
  .then(res => res.json())
  .then(cat => {
    dispatch(setImage(cat[0].url));
  });
};

// changes for mapping dispatch to props, also requires appropriate imports
// and calling fetchImage in the appropriate places
// inside Details.js, MenuItem.js, Form.js
const mapDispatchToProps = dispatch => ({
  fetchImage: () => fetchImageWithoutMiddleware(dispatch)
});
```
This works just fine. It properly sets the loading state and displays the image once it has been fetched. The only downside I can think of is that other devs might not expect this pattern of usage and that you cannot use the object shorthand in place of `mapDispatchToProps`. 

Oh wait, one more possible downside: if your image fetching is later converted to a synchronous action (let's say you've just stored a bunch of cats in a local file that you import while the page loads and you'll get them from there instead), you'll need to update the action and every instance of `mapDispatchToProps` that uses it to follow the normal pattern. Unless, of course, you coded your new synchronous action to take `dispatch` as an argument.

**Solution 2:**

Use Redux thunk middleware! This middleware allows us to return functions from our actions without changing how we map dispatch to props. Technically, our action creators that return functions are now also called thunks (it's a very Googleable word, I promise). The middleware executes the functions returned by our thunks to ensure the appropriate actions are dispatched at the right time. In other words, it intercepts our dispatch!

> Middleware is some code you can put between the framework receiving a request, and the framework generating a response. Redux middleware provides a point between dispatching an action, and the moment it reaches the reducer. People use Redux middleware for logging, crash reporting, talking to an asynchronous API, routing, and more. - taken from the Redux docs

If you want to learn more about Redux thunk middleware: https://github.com/reduxjs/redux-thunk

There are several steps to getting this set up and working:
1. Install it: `npm install --save redux-thunk`
2. In index.js, add the following:
```
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// Update how you create the store!
// If you want to use Redux DevTools and middleware, you need to compose
// a new function using compose() from the redux package
const store = createStore(catReducer, 
  compose(applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));
```

Now we are ready to get down to business! The business of using middleware that is.

This middleware allows our action creators to return functions, so first, let's create a new action to work with the middleware:
```
// catActions.js
export function fetchImage() {  
  return (dispatch) => {
    dispatch(isLoading);

    fetch('https://api.thecatapi.com/v1/images/search')
    .then(res => res.json())
    .then(cat => {
      dispatch(setImage(cat[0].url));
    });
  };
};
```
This isn't actually that different from the action in Solution 1. The difference is that our action returns a function, and NOT a Promise.

Next, we need to update our components to work with this action creator/thunk. This means we're actually getting back to the normal design pattern, so hopefully, this doesn't look too scary or foreign:
```
// MenuItem.js, we don't need to mapDispatchToProps like before
// We can switch to the simplified style
export default connect(null, { selectCat, fetchImage })(MenuItem);

// The same is true for Details.js
export default connect(mapStateToProps, { fetchImage })(Details);

// And Form.js
export default connect(null, { addCat, selectCat, fetchImage })(Form);
```
I can't think of any real downsides here, except that you have to do a little extra coding up front to update how the store is created, but really, that's not so bad IMO, unlike pineapple pizza, which is oh so terribly wrong. Don't even with that stuff! Don't even!

## Organizing your code
Check out this article: https://www.freecodecamp.org/news/scaling-your-redux-app-with-ducks-6115955638be/

## my_react_redux
If you'd like to see how connect() and Provider might work under the hood, check out the my_react_redux folder.

In index.js, you'll need to comment out the importing and rendering of App, and comment in the importing and rendering of MyReactRedux.
