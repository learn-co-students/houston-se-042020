Rails.application.routes.draw do
  resources :users, only: [:new, :create]
  get '/profile', to: 'users#show'

  resources :sessions, only: [:new, :create, :destroy]
end
