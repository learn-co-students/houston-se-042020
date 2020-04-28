# Lifter

# Get a list of all lifters

# Get a list of all the memberships that a specific lifter has

# Get a list of all the gyms that a specific lifter has memberships to

# Get the average lift total of all lifters

# Get the total cost of a specific lifter's gym memberships

# Given a gym and a membership cost, sign a specific lifter up for a new gym
class Lifter
  attr_reader :name, :lift_total

  @@all = []

  def initialize(name, lift_total)
    @name = name
    @lift_total = lift_total

    @@all << self
  end

  def self.all
    @@all
  end

  def memberships
    Membership.all.select{|membership| membership.lifter == self }
  end

  def gyms
    memberships.map{|membership| membership.gym}
  end

  def self.average_lift
    # Get the average lift total of all lifters
    total = 0
    total_lifters = self.all.count

    self.all.each{|lifter| total += lifter.lift_total}

    total/total_lifters
  end

  def total_cost
    # Get the total cost of a specific lifter's gym memberships
    self.memberships.collect{|membership| membership.cost}.sum
    # self.memberships.collect{|membership| membership.cost}.sum()

  end

  def sign_up_gym(gym, cost)
    # Given a gym and a membership cost, sign a specific lifter up for a new gym
    Membership.new(cost,gym,self)
  end

end
