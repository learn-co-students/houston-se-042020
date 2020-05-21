# Session and Cookies

## By the end of this lesson, you should be able to:
Add statefulness to your Rails apps using cookies via session and flash (Googling for help is OK).

### How we'll get there:
- [ ] Explain the stateless nature of HTTP
- [ ] Explain how cookies are used to implement sessions / add state
- [ ] Use the Rails session object to add state
- [ ] Use Rails flash to add state
- [ ] Explain when to use session vs flash

### Explain the stateless nature of HTTP
* HTTP request-response cycle basically has amnesia

### TASK: Take a minute to write down what a session and a cookie are:
* Open up our Slack channel
* I'll make a new message, please respond via the Thread:
  * In your own words, describe a session and a cookie
* Volunteer to share

### Sessions require cookies
* What is a session?
* What is a cookie?
* What is the Rails session object? How does it put a cookie on the client?
* Show and manipulate cookies in Application tab

### Problem Statement
* Tour of working app (in browser only), which has no database
* Tour of what we're working with, including code
  * Problem: Can't remember username
  * Problem: Can't track score
  * Problem: Doesn't tell user when they've entered a bad username
  * Problem: Doesn't tell user when they've guessed her name right or wrong

### Implement Session
* Our app needs to remember the username
* Our view should access that value using an instance variable
* We can set it using a before_action

### TASK: Let's implement the score together.

### Implementing Flash
* Let's add an error message when the username is incorrect via an instance variable
  * Why might we not want to do this? (You can Google or just think about it)
* Now let's use flash.now
  * We can do some fun styling using the key
* Let's add correct/incorrect messages for our game using session
* Problem with session message variable (Refresh)
* Now let's use flash instead

### Let's explore session and flash a bit more
* Where is flash stored by Rails?
  * Show the entire session object in a view (Never do this in a deployed app!!)

### Wrap Up
One last walk through the code
