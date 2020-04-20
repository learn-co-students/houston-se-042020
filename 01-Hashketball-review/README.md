# Hashketball Review

## LGs:
- [x] **Employ test-driven development best practices in their labs**
    * rspec --fail-fast handle one error at a time
    * Red, Green, Refactor
    * Make it work (shameless green), make it right, make it fast
- [x] **Distinguish between data types in Ruby and Show how to look up documentation for data types in Ruby**
- [x] **Demonstrate the use of common Array methods and Differentiate array methods by their respective return values**
    * #each
    * #map
    * #select
    * #find
- [x] **Define the Single Responsibility Principle**


### Employ test-driven development best practices in their labs
* Command Line to use
    * rspec (Problem with scrolling up)
        * Command + up/down arrow
    * rspec --fail-fast handle one error at a time
* How to read test results
    * Red
    * Green
* Demystifying Rspec 
    * This is just Ruby code that you already know.
* Running a particular test
    * rspec spec/hashketball_spec.rb 
    * rspec spec/hashketball_spec.rb:28
* Explain how to solve test step by step.
    * Explain expected: 
        * NoMethod error
    * Expected vs Given


### Distinguish between data types in Ruby and Show how to look up documentation for data types in Ruby 
* Change from prep work : Array instead of hash
 ```ruby 
def game_hash
*    {
*     home: {
*       team_name: "Brooklyn Nets",
*       colors: ["Black", "White"],
*       players: [
```
* Using Binding.pry
    * Explain what is binding.pry
* What is the data Structure we have right now?
    ```ruby
    { home: {player: [] }, away: {player: [] } }
    ```
* What we want?
    ```ruby
    [ { } , { }, { }, ... ]
    ```
* How to look up documentation for data types in Ruby?
    * How to get all players in array?
    * each method
    * map method
    * irb
    * map vs each 
    * Build function that gives all players in an array
    * Select 
    * Find
    * animals = [‘cat’, ‘dog’, ‘pig’]
    * numbers = [1, 4, 5, 7, 8]



### Define the Single Responsibility Principle


* Here we just want to emphasize that we were breaking down the responsibility of each method to its smallest parts, so that every method has one job.



## Task:

### Fill out the Table:

```ruby
animals = [‘cat’, ‘dog’, ‘pig’]
numbers = [1, 4, 5, 7, 8]
```

| Method | What does it return? | What should the block return? | What does it look like? |
| ------------- | ------------- | ------------- | ------------- |
| each  | same array | [‘cat’, ‘dog’, ‘pig’] | ```animals.each {|a| puts a}``` |
| map  | new modified array | ["I am cat", "I am dog", "I am pig"]  | ```animal.map {|a| "I am #{a}"}``` |
| find  | single element that mets the condition | 4 | ```num.find {|n| n.even? }``` |
| select  |all elements in an array which mets the condition |  [4, 8] | ```num.select{|n| n.even?}``` |

