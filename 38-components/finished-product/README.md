# React Dragons

It's time to send our dragons to war! 

Fork this repo, clone it, make your changes then commit and submit a pull request after each set of deliverables.

Run `npm install`, then run `npm start` to run your app. 

This will start an api available at `http://localhost:3001/dragons`, and an app (which should open automatically) at `http://localhost:3000` 

## Deliverables
1. Get The Dragons from our API
2. Render the dragon names and images inside of the `<Home />` Component (You may want to set a width of the images to keep things tidy)
3. When a user clicks a dragon, it should move the dragon inside the `<War />` Component
4. If a user clicks a dragon at war, it should move back inside the `<Home />` Component

## BONUS
1. Add a search box to the Home div which will filter the dragons based on their name
2. Persist the data so that, if you refresh the page, the dragons are in the same position (at home or at war depending on where they were when you refreshed). (HINT: use `fetch` again)
