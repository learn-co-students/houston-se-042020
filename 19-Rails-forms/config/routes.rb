Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # custom routes
  get '/dogs', to: 'dogs#index'

  get '/dogs/new', to: 'dogs#new'

  get '/dogs/:id', to: 'dogs#show', as: 'dog'

  post '/dogs', to: 'dogs#create'

  get '/dogs/:id/edit', to: 'dogs#edit'

  patch '/dogs/:id', to: 'dogs#update'

  delete '/dogs/:id', to: 'dogs#destroy'


  # resources :dogs, only: [:index, :show, :new, :create, :edit, :update]

end
