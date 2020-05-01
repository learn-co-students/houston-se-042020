class Customer < ActiveRecord::Base
    has_many :reviews
    has_many :bakeries, through: :reviews
   
end