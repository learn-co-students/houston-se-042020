class User < ApplicationRecord
  validates :username, length: { minimum: 3 }, uniqueness: true
  validates :password, length: { minimum: 8 }

  has_secure_password

  # validates the password and username
  # method to ensure password matches password confirmation

  # authenticate: method to test whether an existing user's password matches what they typed
end
