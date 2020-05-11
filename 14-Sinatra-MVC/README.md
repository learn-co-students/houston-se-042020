# Sinatra and MVC

### LGs:
* - [ ] Explain the Model View Controller (MVC) pattern and give an example
* - [ ] Implement one model that inherit from ActiveRecord
* - [ ] Implement one controller to route and process requests
* - [ ] Implement ERB template and get it to render data from controller and model
* - [ ] Identify the connection between REST and CRUD

#### **Explain the Model View Controller (MVC) pattern and give an example**
* Sinatra from scratch
* Config.ru
* How and Why we use the MVC pattern?
    * Separation of concerns
    * Model: interacts with our database, how we create instances
    * Controller: go-between
    * View: html that renders a web page

**TASK:** Take 1 min with you partner and discuss the MVC pattern
    
#### **Implement one model that inherit from ActiveRecord**
* Model
    * A class (template for objects) which represents a table
    * Where business logic goes

**TASK:** Implement books migration with title and year columns
    
#### **Implement one controller to route and process requests**
* Controller
    * Where the path is driven!
    * Analogies:
        * Model would be the kitchen, view would be the customers, and the controller would be the server
        * Model would be the factory, view would be the end user, and the controller would be the distributor
    * `get '/'`

**TASK:** Create route for `/home` that displays "Hi!!!"

#### **Implement ERB template and get it to render data from controller and model**
* create `home.erb` view file
* display message "Hi!!!" using instance variable
* create `index.erb` to display all the books

**TASK:** create route and erb to display single book information
* View info on an individual book
    * get '/books/:id'
    * how the params hash changes and where the data comes from?
    * show.erb

#### **Identify the connection between REST and CRUD**
* What REST stands for?
    * REpresentational State Transfer
        * My URL talk about the state of application team
        * http://www.espn.com/nba/players
    * Index page
    * Show page
    * New page
        * form
        * methods
        * how params hash is build?
    * Create route
    * Edit page
        * methods
        * set :method_override, true
    * Update route
    * Delete route


### Deliverables:
* View all the books
    * get /books
* View info on an individual book
    * get /books/:id
* Create a new book
    * get /books/new
    * post /books
* edit an existing book
    * get /books/:id/edit
    * patch /books/:id
* delete an existing book
    * delete /books/:id
