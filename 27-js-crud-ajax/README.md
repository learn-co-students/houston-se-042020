# CRUD-AJAX
Code with solution branch at: https://github.com/helloRupa/js-crud

## By the end of this lesson, you should be able to:
Perform all of the CRUD actions using fetch() and update the DOM with that data

## Buy why?
Being able to create, read, update, and destroy data from the frontend allows users to interact with websites and persist their changes. Imagine going to Facebook, you make a post, you see the post on the page, but then you refresh and your post is gone (not because you posted something naughty, but because the HTTP request was never made). Not a great experience, eh!

## How we'll get there:
- [ ] Create `fetch` requests (including `POST`, `PATCH`, `DELETE`) (We have already done GET)
- [ ] Manipulate the DOM in conjunction with `fetch` calls
- [ ] Explain optimistic vs pessimistic rendering
- [ ] Describe the options object used with fetch() (2nd argument)

### Deliverables (User Stories)
As a user, I can:
- [x] See all the cat gifs and their comments
- [ ] Create a new cat gif post (image with comment)
- [ ] Delete a cat gif post
- [ ] Edit a comment for a post already on the page

All changes should _persist_ in our database.

## Options for fetch:
The second argument for fetch() is the options object. It contains data about the request being made (aka metadata). Sometimes you will need it for GET requests, and you will always need it for POST, PATCH, and DELETE requests.

When using fetch() for our GET requests yesterday, we didn't need to provide the second argument (options object) to fetch(), and our requests were successful. There will be times when the options object is required even for GET requests. For example, the API might require you to provide an API key via the object or some other identifier to show that you have permission to make GET requests. 

The API docs should tell you which specific headers are required.

Here's an example of a possible GET request's options where authorization is required:
```
{
    method: 'GET', // you decide the method!
    authorization: TYPE YOUR_ACCESS_KEY // consult API docs for the TYPE and key
}
```

POST and PATCH requests, in contrast, will always require the options object, since it allows us to specify the type of request we're making (GET, POST, PATCH, or DELETE) (fetch() defaults to GET requests), and the content we are trying to add to the database. Without the options object, we'd have no way of doing this.

Here's an example of required options for making POST requests:
```
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json' // tell the server what type of data we're sending
            // if the server handles different types of data, this tells the server what type
            // of data is in the body so it can handle it properly
    },
    body: JSON.stringify({ url: 'http://example.com', description: 'Looks like an example' })
    // the value of body is the data you're sending. it must be a string, hence JSON.stringify().
    // the keys in the body must match the attribute names expected on the server-side
    // in Rails, when we use strong params (e.g. params.require(:post).permit(:url)), this
    // means we must nest our values: { post: { url: 'https://example.com' } }
    // we aren't nesting with json-server though!! it doesn't have strong params.
  }
```

When working with a public API, it should tell you if any specific headers are required other than the Content-Type.

Lastly, there's DELETE. You need to specify the method (HTTP verb) for this request, and any required headers should be specified by the API:
```
{
  method: 'DELETE'
}
```