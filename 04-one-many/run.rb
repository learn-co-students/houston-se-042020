require "pry"
require_relative "user.rb"
require_relative "tweet.rb"

user1 = User.new("Coffee_dad")
user2 = User.new("Tea_dad")

t1 = Tweet.new("Enjoy coffee", user1 )
t2 = Tweet.new("Enjoy tea", user2 )
t3 = Tweet.new("having my coffee", user1 )
t4 = Tweet.new("having my tea", user2 )

binding.pry
0