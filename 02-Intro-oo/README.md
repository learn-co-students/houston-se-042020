# Intro to OO

### LGs:

- [x] **Define object in programming domain**
- [x] **Create a class and instantiate an instance of the class and Explain the difference between a class and an instance**
- [x] **Pass arguments to new by defining an initialize method in class**
- [x] **Define attribute readers and writers using attr_ macros**

#### Define object in programming domain
* "Everything in Ruby is an object." 
    * Ruby is Object-Oriented. Ruby only knows objects. Everything is an object (sounds almost like Zen). Every object is an instance of a class.
    * What does that mean? 
        x = 3
        puts x.class
        * what is the data type of x?
        * what is the value of x?
        * x = "hello how are you"
        * x.split()
        * what happens when we run this code?
        * what is split and where does it come from?
        * how does x know what to do with split?
        * what's happening when we run this code
        * x.methods


#### Create a class and instantiate an instance of the class and Explain the difference between a class and an instance

* Creating hash for bank accounts with owner’s name and balance
    ```ruby
    bank_account = {"Owner": Vidhi, "balance": 1000}
    bank_account1 = {"Owner": Sam, "balance": 1000}
    bank_account2 = {"Owner": Kevin, "balance": 1000}
    ```
* Why don’t we want to do this? 
    * We don't want to write your code over and over again.
    * Why is this inefficient?
        * You might have typos, which breaks the schema.
        * Changing properties on the hash requires accessing attributes using [] syntax.
    * Instead of defining bank_account every time, what if we want a blueprint for a bank_account.
* Create a Class
    ```ruby
    class BankAccount
    
    end
    ```
* How to create new objects for a class?
    ```ruby
    BankAccount.new()
    ```
    * Ruby assigns this object an id to this object in the computer's memory. 
    * BankAccount.new().object_id

#### Pass arguments to new by defining an initialize method in class
* bankAccount needs some info:
    * Owner
    * Balance 
* How we assign those values?
    * Setter and getter methods
    ```ruby
    def owner=(owner)
        @owner =  owner
    end
    ```
    * What is @owner? //instance variable
    * Define instance variable
    * account.owner = “vidhi”
    * account.owner (returns “vidhi” back)
* What if we have so many attributes?
    * Solution: initialize method

#### Define attribute readers and writers using attr_ macros
* Problem: Account.owner is not returning owner’s name.
* To read attributes: attr_reader
* To write attributes: attr_writer
* For reading & writing: attr_accessor

---

## Tasks:

1. Names = [“Vidhi”, “Raul”, "Steven"]
   Puts names.class (What will we get back?)
   Names.methods (How many method it returns?)
   If we want to join the array which method we will use?
   
2. What is a class? What is an object?
   b = Animal.new
   What is a class and what is an instance in above example?

3. think/pair/share
   Write getter and setter method for balance.
   
4. What is the difference between attr_reader, attr_writer and attr_accessor?







