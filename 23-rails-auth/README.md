# Rails Auth

## By the end of this lesson, you should be able to:
Add authentication and authorization to a Rails app (most likely with help from Google or existing code)

## How we'll get there:
- [ ] Explain why we need auth
- [ ] Explain the difference between authentication and authorization
- [ ] Identify the parts and steps required to authenticate a user
- [ ] Correctly store passwords in a database
- [ ] Create models, routes, controllers and views to support auth
- [ ] Time permitting, a quick chat about security and sessions using an id

## Why do we need auth?
Selective protection

## Authentication vs Authorization
Showing an ID to get into the club and getting a wristband in return, vs showing that wristband to access different areas of the club.

**TASK: In Slack, use the thread to answer "What is the difference between authentication and authorization?" in your own words**

Volunteer time!! Tell us what you wrote.

## Authentication steps
Rails gives us some "magic" called has_secure_password, which makes auth a lot easier to roll from scratch. However, it doesn't help us understand what's happening. Let's think about what we would need to create our own auth without has_secure_password. If you want to see the actual code, check out the branch `solution-long`.

Before we authenticate, we must create! Thinking only about models:
When a user reaches a signup page displaying fields for username, password, and password confirmation, what has to happen on the backend once submit is clicked? What fields might we need in our database? What methods are needed on the model?

**Password storage and BCrypt conversation**

Thinking only about models:
What about clicking submit on the login page? Do we need any fields in the db for that? What methods are needed to confirm a successful login attempt?

At a high level (thinking generally): what else needs to happen for a user to be authenticated?

## Routes, controller actions, and views for signup: Users
We need the user to see a signup form (new), have their info added to the database (create), and then be redirected to their special page (show)

Let's make that happen!

## Routes, controller actions, and views for login: Sessions
We need the user to see a login form (new), and then create their session once they're authenticated and redirect them to their special page (create).

## Authorization: Don't go in there!!
Right now, all users can access all user show pages even if they're not logged in. How do we prevent that from happening:
* Check for a logged in user (current_user)
* If not logged in, prevent them from accessing the show page (before_action)
* If logged in, prevent that user from accessing any show pages with a different id (before_action)

What if a logged in user wants to access the login or signup pages? Should we do anything about that?

## Logging out a user
Add routes, controller actions, and form to delete / destroy the session info!!

## Routes
How much sense do our routes make to our users? And us, because we also matter.

## Wrap Up
What in the world did we just do?
1. Create a users table and model (username, password_digest, `has_secure_password`)
2. Add routes for users (new, create, show)
3. Add controller actions and strong params for creating a user
    - new: just show me the form OK
    - create: if the user is valid, add them to the db and then redirect to show
    - show: show the user ONLY if the user is logged in (before_action)
4. Create views for the user
    - new: form
    - show: username (really exciting page!)
5. Log in the user (authenticate, sessions)
    - Create routes for sessions (new, create)
    - Add supporting controller actions (new, create)
        - new: just show me the form OK
        - create: find user and if they exist, check for matching password, then redirect to user show
    - Create the login form
6. Authorize access for users
    - Use before_action to check if a user is logged in
        - If logged in, let them access certain pages
        - Otherwise redirect that silly saussage to the login page (Get out of there Jonathan!)
7. Log the user out
    - Add delete route to sessions
    - Delete / destroy the session in the controller
    - Add logout form to users show page
8. Refactor any shared methods between UsersController and SessionsController into ApplicationController
    - Cuz inheritance
    - and DRY

## Security chat (if we have the time)
- What are the limitations of tracking user sessions using a user id?
- Using only the user id, how can an employee log a user out from the backend?
- What can we do instead? (You're not expected to implement this, we're just having a chat)
