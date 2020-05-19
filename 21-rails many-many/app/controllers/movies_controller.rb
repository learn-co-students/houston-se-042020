class MoviesController < ApplicationController

    before_action :current_movie, only: [:show, :destroy]

    def index
        @movies = Movie.all
    end

    def show
    end

    def destroy
        @movie.destroy
        redirect_to movies_path
    end

    def current_movie
        @movie = Movie.find(params[:id])
    end

    private

    def movies_params
        params.require(:movie).permit(:title, :year)
    end

end
