# Sinatra Froms and RESTful routes

## LGs:
- [x] Identify the connection between REST and CRUD
- [x] Understand RESTful Routing
- [x] Describe how the HTTP verbs correspond to REST

### Identify the connection between REST and CRUD
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


#### Deliverables:
- [ ] View all the books
    * get /books
- [ ] View info on an individual book
    * get /books/:id
- [ ] Create a new book
    * get /books/new
    * post /books
- [ ] edit an existing book
    * get /books/:id/edit
    * patch /books/:id
- [ ] delete an existing book
    * delete /books/:id

### **Understand RESTful Routing**
* [Sinatra Restful Routing](https://docs.google.com/presentation/d/12gX96PtXwx35koxB84GoolfzM5iR-U6asPu41jR0mZA/edit#slide=id.p)
        
### **Describe how the HTTP verbs correspond to REST**
![Cheat Sheet](https://i.imgur.com/k8G1oH2.png)
