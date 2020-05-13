class DogsController < ApplicationController

    set :views, "app/views/dogs"

    get '/dogs' do
        @dogs = Dog.all

        erb :index
    end

    # create a new dog form
    get '/dogs/new' do 
        @owners = Owner.all
        erb :new
    end

    get '/dogs/:id' do 
        @dog = Dog.find(params[:id])

        erb :show
    end

    post '/dogs' do
        # binding.pry
        # .new + .save => .create
        dog = Dog.new(params[:dog])

        if !params[:owner][:name].empty?
            new_owner = Owner.create(params[:owner])

            dog.owner_id = new_owner.id
            # dog.owner = new_owner
        end

        dog.save
        redirect "/dogs/#{dog.id}"
    end

    delete '/dogs/:id' do
        dog = Dog.find(params[:id])
        dog.destroy
        
        redirect '/dogs'
    end

end