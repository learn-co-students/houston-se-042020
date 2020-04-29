require 'pry'

require_relative "animal.rb" 
require_relative "cat.rb" 
require_relative "dog.rb" 
require_relative "fish.rb" 


d1 = Dog.new("richi")

c1 = Cat.new("Shady", 7)

f1 = Fish.new("Nemo")
binding.pry
0
