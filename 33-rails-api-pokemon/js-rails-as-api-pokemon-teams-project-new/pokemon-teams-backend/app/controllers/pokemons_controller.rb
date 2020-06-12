class PokemonsController < ApplicationController
  def create
    nickname = Faker::Name.first_name
    species = Faker::Games::Pokemon.name

    pokemon = Pokemon.new(nickname: nickname, species: species, trainer_id: params[:trainer_id])

    if pokemon.save
      render json: pokemon
    else
      render json: { error: 'No Pokemon for you' }
    end
  end

  def destroy
    pokemon = Pokemon.find_by_id(params[:id])

    if pokemon
      pokemon.destroy 
      render json: pokemon
    else
      render json: { error: 'Invalid Pokemon' }
    end
  end
end


# {
#   "id":147,
#   "nickname":"Gunnar",
#   "species":"Weepinbell",
#   "trainer_id":1
# }

   # {
    #   "trainer_id": 1
    # }