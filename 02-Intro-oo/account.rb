# a = {name: "Vidhi", amount: 1000}
# b = {name: "Luis", amount: 1000}
# c = {name: "Eric", amount: 1000}

require 'pry'

#Account class
class Account
    attr_reader :name #read only
    # attr_writer write only
    attr_accessor :amount

    def initialize(owner: name ,balance: amount)
        @name = owner #instance variable
        @amount = balance
    end

    # def initialize(owner, balance)  # Make sure you remeber the order
    #     @name = owner
    #     @amount = balance
    # end

    #instance method
    #getter method
    # def name
    #     @name
    # end

    # def amount
    #     @amount
    # end

    #setter method
    # def amount= (balance)
    #     @amount = balance
    # end

    # def name= (owner)
    #     @name = owner
    # end


end

# objects
acc1 = Account.new(balance: 1000, owner: "Luis")
acc2 = Account.new(owner:"Eric", balance:1000)

# acc1 = Account.new("Luis", 1000)
# acc1 = Account.new({balance: 1000, owner: "Luis"})

binding.pry
0