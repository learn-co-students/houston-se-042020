class DogsController < ApplicationController

    before_action :current_dog, only: [:show, :edit, :update, :destroy]

    def index
        # @temp = "vidhi"
        @dogs = Dog.all
    end


    def show
        # byebug
        # puts "Hiiii!!!"
        # @dog = Dog.find(params[:id])
    end


    def new
        @dog = Dog.new
    end

    def create
        # byebug
        dog = Dog.create(dogs_params)

        redirect_to "/dogs/#{dog.id}"
        # redirect_to dog
        # redirect_to dog_path(dog)

    end


    def edit
        # @dog = Dog.find(params[:id])
    end

    def update
        # byebug
        # dog = Dog.find(params[:id])
        @dog.update(dogs_params)

        redirect_to "/dogs/#{dog.id}"
    end

    def destroy
        # byebug
        # dog = Dog.find(params[:id])
        @dog.destroy

        redirect_to '/dogs'
    end

    def current_dog
        @dog = Dog.find(params[:id])
    end


    def dogs_params
        params.require(:dog).permit(:name, :breed, :age)
    end

  
end
