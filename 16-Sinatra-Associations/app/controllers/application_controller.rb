class ApplicationController < Sinatra::Base

    set :method_override, true

    get "/" do 
        "Hello world"
    end

    get "/home" do
        erb :home
    end
  
end
