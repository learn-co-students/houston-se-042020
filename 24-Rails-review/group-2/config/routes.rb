Rails.application.routes.draw do

  # get 'students/show'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :instructors, only: [:show, :new, :create, :edit, :update, :destroy]
  resources :students, only: [:show, :new, :create, :edit, :update, :destroy]
end
