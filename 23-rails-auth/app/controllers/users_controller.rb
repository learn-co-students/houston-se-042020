class UsersController < ApplicationController
  # Logged in users will be sent to profile page
  before_action :logged_in, only: [:new, :create]
  # Not logged in users will redirect to login page
  before_action :not_logged_in, only: [:show]

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
    else
      render :new
    end
  end

  # We can set user based on the cookie, no need for id param in URL!
  def show
    @user = current_user
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation)
  end
end
