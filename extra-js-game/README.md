# Basic Game
It's not fun but it works with slight problems

Should've done the math first. Didn't do the math. Gotta calculate that grid!

## Step 1
Make a Character class for the hero and enemies to inherit from. This will save time in the long run since they have similar props and methods.

It should:
- put the game container in a class variable
- set boundaries 
- store the character element
- set the velocity
- set the position
- set the direction as an array
- move the character
- check if it's out of bounds

## Step 2
Make a hero character that can move right and left without leaving the 'game'

Should be controlled by A S and arrow keys

The hero is on the DOM as soon as it loads

## Step 3
Make an enemy that spawns in random locations at the top of the screen

It should automatically move down the screen

- Ensure the enemy knows where hero is
- Add the enemy to the DOM
- Set its location
- Check if it's out of bounds, if so, destroy it
- Check if it has collided with hero
    - if so, destroy hero and print a losing message to console
- render enemy (33ms)