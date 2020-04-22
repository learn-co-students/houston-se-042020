require 'pry'

#Account class
class Account
    attr_reader :name #read only
    # # attr_writer write only
    attr_accessor :amount

    @@all = []

    def initialize(owner: name ,balance: amount)
        @name = owner #instance variable
        @amount = balance

        # puts self
        @@all << self
    end

    # instance Method
    def display_info
        # puts self
        # puts "Instance Method"
        # puts "Hi #{self.name}!! Your balance is: #{self.amount}"
        # puts "Hi #{name}!! Your balance is: #{amount}"
        puts "Hi #{@name}!! Your balance is: #{@amount}"

    end

    def add
        @amount = @amount + 500
        # @amount += 500
    end

    def self.info
        puts self
        puts "Class method!!!"
    end

    def self.all
        @@all
    end


end

# objects
acc1 = Account.new(balance: 1000, owner: "Luis")
acc2 = Account.new(owner:"Eric", balance:1000)


binding.pry
0