# CLI application && Intro to Git

## LGs
- [x] Use gem for **user input friendly** CLI application.
- [x] **Create** and **manage** new repositories.
- [x] **Create** new branches and **modify** the master branch.
- [x] **Create** remote repository on GitHub with updated local repository. 

---
### Use gem for user input friendly CLI application.
* `gem "tty-prompt"`
* Documentation: https://github.com/piotrmurach/tty-prompt

### Create and manage new repositories.
* What is Git?
> Git is a free and open source version control system.
* What is a repository?
> Represent single project
* How to Create a new repo?
> git init
> Adding files:
> Add README.md 
> git add . 
> git commit -m “comment”

### Create new branches and modify master branches.
* What is a branch?
> It is like a tree branch, creating new timeline!
* Initial branch is master branch.
* How to create a branch?
> git branch “second-branch”
* How to see all branches?
> git branch -v 
* How to switch branch?
> git checkout second-branch 
* Create a branch and checkout that branch
> git checkout -b branch-name
* How to merge?
> git merge second-branch 

### Create remote repository on Github with updated local repository.
* What is Github? (“ask”)
> UI for Git
> Remote
> To share code with other developers
* Go to Github -> Create new repo(public) 
* Copy and paste the code in CLI
* Changes on GitHub 
* Local vs Remote repo


