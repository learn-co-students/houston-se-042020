class ApplicationController < ActionController::Base
  def current_user
    User.find_by_id(session[:user_id])
  end

  def logged_in?
    !!current_user
  end

  def not_logged_in
    redirect_to new_session_path unless logged_in?
  end
end
