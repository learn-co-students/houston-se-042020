# Many-Many

### LGs:

- [x] **Practice keeping groups of data related to classes on the class as a class variable**
- [x] **Understand single source of truth by not storing collections of objects on other objects**
- [x] **Implement both sides of a many to many relationship**


---

### Domain modelling:

* A doctor has many patients and a patient has many classes
* A doctor has many appointments / appointment belongs to doctor (we already know how to model this)
* A patient has many appointments / appointment belongs to patient (we already know how to model this)
* A doctor has many patients through appointments
* A patient has many doctors through appointments


---

### Practice keeping groups of data related to classes on the class as a class variable
* How many classes do we need?
    * three
* Let's discuss the attributes
    * Doctor => name
    * Patient => name
* Discuss methods
    * What are the minimum methods we are going to need?
        * two
            * initialize
            * .all
* Create Class.all method for all the classes

### Understand single source of truth by not storing collections of objects on other objects
* How can we build relationship among these classes?
    * Using JOINER class
* Can we store all patients info in Doctor class?
    * No
* Connect all three classes using JOINER class
    * Make sure to store one instance from each other class

### Implement both sides of a many to many relationship
* many to many => one to many + one to many
* A doctor has how many appointments!
    * #appointments 
* A patient has how many appointments!
    * #appointments 
* A doctor has how many patients!
    * #patients
* A patients has how many doctors!
    * #doctors


---

### Tasks:

1. Create Patient class with initialize method, attr_macros and .all method.
2. Create JOINER class with initialize method, attr_macros and .all method.
3. Create #doctors method is Patient class that return all the doctors who has appoinment with a perticular patient.