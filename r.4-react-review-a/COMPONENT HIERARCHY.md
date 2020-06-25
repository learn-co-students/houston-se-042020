

* ~~User will be able to see a list of books~~
* User will be able to click a book from the list to see it's details
    * Book image
    * Title
    * Description
    * Users who have liked the book
* User will be able to like a book when looking at it's details

### Component Hierarchy
* App ( state: books, displayedBookId )
    * BookList 
    * BookCard 
        * UserList 


### Variable Data
* displayedBookId
* books
    * users for each book