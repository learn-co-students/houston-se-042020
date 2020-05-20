class MoviesController < ApplicationController

    before_action :current_movie, only: [:show, :destroy, :edit, :update ]

    def index
        @movies = Movie.all
    end

    def show
    end

    def new
        @movie = Movie.new
        @actors = Actor.all
    end

    def create
        movie = Movie.new(movies_params)
        # byebug

        if movie.valid?
            movie.save
            redirect_to movie
        else
            flash[:errors] = movie.errors.full_messages #key can be anything
            redirect_to "/movies/new" #new_movie_path
        end

    end

    def edit
        @actors = Actor.all
    end

    def update
        # byebug
        @movie.update(movies_params)

        redirect_to @movie
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
        params.require(:movie).permit(:title, :year, actor_ids: [])
    end

end
