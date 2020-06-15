class Superstar
  # required for public access to instance variables from outside
  # the class
  attr_accessor :name, :talent

  # class variable
  @@all = []

  # maps to JS's constructor()
  def initialize(name, talent)
    @name = name
    @talent = talent
  end

  # instance method
  def introduce
    puts "My name is #{@name} and I can #{@talent}."
  end

  # class method
  def self.about
    puts "I track the most talented people ever!"
  end

end

# child class, inheritance
class Bjork < Superstar 
  def initialize
    super('Bjork', 'Do all the things')
  end
end

# call class method
Superstar.about

# create instances and call instance methods
star = Superstar.new('Beth Gibbons', 'Sing')
star.introduce

bjork = Bjork.new
bjork.introduce
