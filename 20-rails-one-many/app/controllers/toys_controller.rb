class ToysController < ApplicationController

    before_action :current_toy, only: [:show, :edit, :update]

    def index
        @toys = Toy.all
    end

    def show
        
    end

    def new
        @toy = Toy.new
        @dogs = Dog.all
    end

    def create
        # byebug
        toy = Toy.create(toy_params)

        redirect_to "/toys/#{toy.id}"
    end

    def edit
        # byebug
        @dogs = Dog.all
    end

    def update
        # byebug
        @toy.update(toy_params)

        redirect_to "/toys/#{@toy.id}"
    end

    def current_toy
        @toy = Toy.find(params[:id])
    end


    private

    def toy_params
        params.require(:toy).permit(:name, :dog_id)
    end
end
