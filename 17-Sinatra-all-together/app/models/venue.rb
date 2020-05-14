class Venue < ActiveRecord::Base
    has_many :concerts
    has_many :performers, through: :concerts
end