Rails.application.routes.draw do
  # resources :users, only: [:new, :create, :show]
  # Let's use URLs that are meaningful to users
  get '/signup', to: 'users#new'
  post '/signup', to: 'users#create'
  # Since we aren't relying on the id in a URL to show the correct user, let's change it to a profile
  get '/profile', to: 'users#show'

  # resources :sessions, only: [:new, :create, :destroy]
  # I think it's better to use urls that mean something and consistently
  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
end
