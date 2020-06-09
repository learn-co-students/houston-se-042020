// Putting all of my general-purpose functions in the file, so they're
// available in the index.js file for usage
function myFetch(url, options={}) {
  return fetch(url, options)
    .then(res => res.json());
}

function makeOptions(method, body) {
  return {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(body)
  };
}
