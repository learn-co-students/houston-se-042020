class ApplicationController < Sinatra::Base

    set :views, "app/views"
    set :method_override, true

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

    # new book form
    get '/books/new' do 
        erb :new
    end

    # display single book info
    get '/books/:id' do 
        # binding.pry
        @book = Book.find(params[:id]) 
        erb :show
    end

    post '/books' do 
        # binding.pry
        book = Book.create(params)
        redirect "/books/#{book.id}"
    end

    get '/books/:id/edit' do
        @book = Book.find(params[:id]) 
        erb :edit
    end

    patch '/books/:id' do
        # binding.pry
        book = Book.find(params[:id])
        book.update(title: params[:title], year: params[:year])
        redirect "/books/#{book.id}"
    end

    delete '/books/:id' do 
        book = Book.find(params[:id])
        book.destroy
        # Book.delete(params[:id])
        redirect "/books"
    end

  


end
