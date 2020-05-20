class Movie < ApplicationRecord
    has_many :characters
    has_many :actors, through: :characters

    validates :title, presence: true

    validates :year, numericality: {only_integer: true, greater_than: 1888, less_than: 2021}

end
