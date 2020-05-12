class DogsController < ApplicationController

    set :views, "app/views/dogs"

    get '/dogs' do
        @dogs = Dog.all

        erb :index
    end

    get '/dogs/:id' do 
        @dog = Dog.find(params[:id])

        erb :show
    end

    delete '/dogs/:id' do
        dog = Dog.find(params[:id])
        dog.destroy
        
        redirect '/dogs'
    end

end