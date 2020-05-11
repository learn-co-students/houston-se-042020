class ApplicationController < Sinatra::Base

    set :views, "app/views"

    get '/' do
        "Hello World"
    end

    # Create route for /home that displays “Hi!!!”
    get '/home' do 
        erb :home
    end

    # display list of all the books
    get '/books' do
        @temp = "Vidhi"
        @books = Book.all
        # binding.pry
        erb :index
    end

    # display single book info
    get '/books/:id' do 
        # binding.pry
        @book = Book.find(params[:id]) 
        erb :show
    end


end
