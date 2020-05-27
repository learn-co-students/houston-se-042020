class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(params[:username])
    session[:score] = 0
    
    if @user.valid_name?
      session[:username] = @user.username
      redirect_to '/users/1'
    else
      flash.now[:error] = 'Username must be 3 characters or more'
      render :new
    end
  end

  def show
    @username = session[:username]
    @score = session[:score]
  end
end