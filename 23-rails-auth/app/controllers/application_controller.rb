class ApplicationController < ActionController::Base
  def login(user)
    session[:user_id] = user.id
    redirect_to profile_path
  end

  # Why use find_by instead of find?
  def current_user
    User.find_by_id(session[:user_id])
  end

  def logged_in?
    !!current_user
  end

  # if a user isn't logged in, redirect to login
  def not_logged_in
    redirect_to login_path unless logged_in?
  end

  # if a user is logged in, redirect to profile
  def logged_in
    redirect_to profile_path if logged_in?
  end
end
