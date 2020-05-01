class Bakery < ActiveRecord::Base
    has_many :reviews
    has_many :customers, through: :reviews

    # def reviews
    #     Review.all.select{|review| review.bakery_id == self.id}
    # end

    # def customers
    #     reviews.map{|review| review.customer_id}
    # end

end