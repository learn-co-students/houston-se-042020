class PerformersController < ApplicationController

    set :views, "app/views/performers"

    # list of all performers
    get '/performers' do
        @performers = Performer.all
        erb :index
    end

    # form for a new performer
    get '/performers/new' do
        @venues = Venue.all
        erb :new
    end

    # display single performer
    get '/performers/:id' do 
        @performer = current_performer
        erb :show
    end

    # create a new performer
    post '/performers' do
        # binding.pry

        performer = Performer.create(params[:performer])

        #1. check if venues are selected or not
            if params[:venue]
                # binding.pry
                #2. delete "" from date array
                params[:date].delete("")

                #3. create concerts
                 i = 0

                 while i < params[:venue].length do
                    Concert.create(date: params[:date][i], performer_id: performer.id, venue_id: params[:venue][i] )

                    i += 1
                 end


            end

            redirect "/performers/#{performer.id}"
    end

    

    def current_performer
        Performer.find(params[:id])
    end

end