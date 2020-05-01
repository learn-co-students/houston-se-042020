# Intro to ActiveRecord

## LGs:
- [ ] Explain how rake works and how to run rake tasks
- [ ] Practice creating migrations for updating the database structure
- [ ] Distinguish between and define "model", "class", and "table"
- [ ] Implement ActiveRecord in their projects

---

**Documentation**: https://guides.rubyonrails.org/active_record_basics.html

---
 
### Explain how rake works and how to run rake tasks
* RakeFile:
    * Holding bunch of tasks
    * activerecord gem
    * Sinatra-activerecord
    * Sinatra is a light framework
        * It requires fewer dependencies on other libraries and APIs
        * Has less configuration and setup
        * May be faster at the expense of having fewer features
        
### Practice creating migrations for updating the database structure using ActiveRecord
* ActiveRecord will help us to skip all the steps like connecting DB, and use that connection to add data.
* What is a migration?
    * Rake db:create_migration
        * Error
        * How to solve it?
    * rake db:create_migration NAME=create_authors
* Timestamp in the name
* Change method: change database
* Command to run this migrations?
    * rake db:migrate
* Delete migrations and schema
* In production never delete migrations:
    * Rake db:rollback

### Distinguish between and define "model", "class", and "table"
* Difference between "model", "class", and "table"
* Nameing Convetions
* Create ruby files
    * Using touch commands
 
### Implement ActiveRecord in their projects
* Create class inherits **ActiveRecord::Base**
* Rake console
    * Author
    * Author.new(name: “DHH”)
    * Author.create(name: “DHH”)
    * CRUD

---
## Tasks:
1. Write create migration for books table => :year and :title
2. Create Book Model
3. Create new books in seeds file and add them to the database