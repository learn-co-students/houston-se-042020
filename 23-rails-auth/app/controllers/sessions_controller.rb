class SessionsController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.find_by_username(params[:user][:username])

    if @user && @user.authenticate(params[:user][:password])
      session[:user_id] = @user.id

      redirect_to profile_path
    else
      flash[:errors] = "Incorrect username or password"
      redirect_to new_session_path
    end
  end

  def destroy
    session[:user_id] = nil

    redirect_to new_session_path
  end
end
