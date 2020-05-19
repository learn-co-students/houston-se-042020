class CharactersController < ApplicationController
  def index
    @characters = Character.all
  end

  def show
  end

  def new
    @character = Character.new
    @movies = Movie.all
    @actors = Actor.all
  end

  def create
    character = Character.create(character_params)
    # redirect_to character_path(character)
    redirect_to characters_path
  end

  def edit
    @character = Character.find(params[:id])
    @movies = Movie.all
    @actors = Actor.all
  end

  def update
    # byebug
    @character = Character.find(params[:id])
    @character.update(character_params)

    redirect_to characters_path
  end

  private
  def character_params
    params.require(:character).permit(:name, :movie_id, :actor_id)
  end
end
