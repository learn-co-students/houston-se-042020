
class Api::V1::PaintingsController < ApplicationController

    def index
      @paintings = Painting.all
      render json: @paintings
    end
  
  
  
  end