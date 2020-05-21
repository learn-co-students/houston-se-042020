class User < ApplicationRecord
  attr_writer :password, :password_confirmation
  # Let's ensure users have unique login names (usernames) since they log in with them
  # Let's also enforce minimum username and password lengths for safety
  validates :username, length: { minimum: 3 }, uniqueness: true
  validates :password, length: { minimum: 8 }
  before_validation :same_passwords
  after_validation :set_password_digest
  
  # make sure password and confirmation are the same (Step: User creation)
  def same_passwords
    return if @password == @password_confirmation
    errors.add(:password, 'must match password confirmation')
  end

  # set the password_digest after password and confirmation are validated (Step: User creation)
  def set_password_digest
    self.password_digest = BCrypt::Password.create(@password)
  end

  # check if password is correct (Step: Authentication)
  def authenticate(password)
    BCrypt::Password.new(self.password_digest) == password
  end
end
