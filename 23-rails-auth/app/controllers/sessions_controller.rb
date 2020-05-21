class SessionsController < ApplicationController
  # logged in users redirect to profile page
  before_action :logged_in, only: [:new, :create]

  def new
    @user = User.new
  end

  def create
    @user = User.find_by_username(params[:user][:username])

    if @user && @user.authenticate(params[:user][:password])
      login(@user)
    else
      # if user is nil, ensure form has correct model to work with
      @user = User.new(username: params[:user][:username])
      flash.now[:error] = 'Incorrect username or password'
      render :new
    end
  end

  def destroy
    session.delete(:user_id)
    redirect_to login_path
  end
end
