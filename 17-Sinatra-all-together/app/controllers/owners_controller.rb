class OwnersController < ApplicationController
    set :views, "app/views/owners"

    #Displaying list of all the owners
    get '/owners' do
        @owners = Owner.all
        erb :index
    end

    #form for creating a new owner
    get '/owners/new' do
        erb :new
    end

    #Show page for single owner
    get '/owners/:id' do 
        @owner = current_owner
        erb :show
    end

    #form for editing an existing owner
    get '/owners/:id/edit' do
        @owner = current_owner
        erb :edit
    end

    #create an owner
    post '/owners' do
        owner = Owner.create(name: params[:name]) #params => {name: "user input"}
        redirect "/owners/#{owner.id}"
    end

    #updating an owne
    patch '/owners/:id' do
        owner = current_owner
        owner.update(name: params[:name])
        
        redirect "/owners/#{owner.id}"
    end

    #Delete an owner
    delete '/owners/:id' do
        owner = current_owner
        owner.destroy
        redirect '/owners'
    end

    # finding an exsiting owner
    def current_owner
        Owner.find(params[:id])
    end
end