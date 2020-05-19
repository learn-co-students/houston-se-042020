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

  # toys routes
  # get '/toys', to: 'toys#index'

  # get '/toys/new', to: 'toys#new'

  # get '/toys/:id', to: 'toys#show'

  # post '/toys', to: 'toys#create'

  # get '/toys/:id/edit', to: 'toys#edit', as: "toy"

  # patch '/toys/:id', to: 'toys#update'

  resources :toys, only: [:index, :show, :new, :create, :edit, :update]

end
