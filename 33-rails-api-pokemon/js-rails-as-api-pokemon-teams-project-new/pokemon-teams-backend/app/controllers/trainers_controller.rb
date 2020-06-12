class TrainersController < ApplicationController
  def index
    render json: Trainer.all
  end
end

# {
#   "id":1,
#   "name":"Prince",
#   "pokemons":[
#     {
#       "id":140,
#       "nickname":"Jacey",
#       "species":"Kakuna",
#       "trainer_id":1
#     }]

# user.as_json(include: :posts)

# user.as_json(include: { posts: {
#   include: { comments: {
#                  only: :body } },
#   only: :title } })