class User
  attr_accessor :username

  def initialize(username = nil)
    @username = username
  end

  def valid_name?
    @username.length >= 3
  end
end