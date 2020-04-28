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
    Membership.all.select{|mem| mem.lifter == self}
  end

  def gyms
    memberships.map{|m| m.gym}
  end

  # Get the average lift total of all lifters
  def self.average_total_lift
    total = 0

    @@all.map{|lifter| total += lifter.lift_total}

    avg = total / @@all.count

  end

  # Get the total cost of a specific lifter's gym memberships
  def total_cost
    total = 0

    memberships.map{|m| total += m.cost}

    total
    # memberships.map{|m| m.cost}.sum
  end

  # Given a gym and a membership cost, sign a specific lifter up for a new gym
  def sign_up_gym(gym, cost)
    Membership.new(cost, gym, self)
  end

end
