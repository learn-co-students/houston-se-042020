class DogsController < ApplicationController

    def index
        # @temp = "vidhi"
        @dogs = Dog.all
    end

    def show
        # byebug
        # puts "Hiiii!!!"
        @dog = Dog.find(params[:id])
    end
end
