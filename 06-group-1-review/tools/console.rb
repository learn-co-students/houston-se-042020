# You don't need to require any of the files in lib or pry.
# We've done it for you here.
require_relative '../config/environment.rb'

# test code goes here
l1 = Lifter.new("Lili", 250)
l2 = Lifter.new("Esther", 70)
l3 = Lifter.new("Edwin", 25)

g1 = Gym.new("LA Fitness")
g2 = Gym.new("Lifttime")

m1 = Membership.new(35,g1,l1)
m2 = Membership.new(30,g1,l2)
m3 = Membership.new(45,g2,l3)
m4 = Membership.new(30,g2,l1)
m5 = Membership.new(35,g1,l3)


binding.pry

puts "Gains!"
