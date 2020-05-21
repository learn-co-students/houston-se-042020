class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(params[:username])
    
    if @user.valid_name?
      redirect_to '/users/1'
    else
      render :new
    end
  end

  def show
  end
end
