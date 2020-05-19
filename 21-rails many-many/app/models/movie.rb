class Movie < ApplicationRecord
    has_many :characters
    has_many :actors, through: :characters

    # accepts_nested_attributes_for :characters, :actors, :allow_destroy => true
end
