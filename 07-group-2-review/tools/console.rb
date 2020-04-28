# You don't need to require any of the files in lib or pry.
# We've done it for you here.
require_relative '../config/environment.rb'

# test code goes here

l1 = Lifter.new("Phyllis", 78)
l2 = Lifter.new("Eric", 9000)
l3 = Lifter.new("Luis", 350)
l4 = Lifter.new("Freddy", 100)
l5 = Lifter.new("Stephanie", 250)

g1 = Gym.new("LA fitness")
g2 = Gym.new("Liftfitness")
g3 = Gym.new("Planet health")

m1 = Membership.new(40,g1,l1)
m2 = Membership.new(40,g3,l2)
m3 = Membership.new(40,g2,l3)
m4 = Membership.new(40,g2,l4)
m5 = Membership.new(40,g3,l5)
m6 = Membership.new(40,g1,l5)
m7 = Membership.new(40,g3,l3)
m8 = Membership.new(40,g2,l4)
m9 = Membership.new(40,g1,l2)


binding.pry

puts "Gains!"
