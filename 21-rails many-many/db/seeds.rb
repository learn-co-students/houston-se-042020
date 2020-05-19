# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Movie.destroy_all
Character.destroy_all
Actor.destroy_all

m1 = Movie.create(title: "Star wars", year: 2020)
m2 = Movie.create(title: "Bad boys-2", year: 2003)
m3 = Movie.create(title: "Alita", year: 2019)
m4 = Movie.create(title: "Cat woman", year: 2004)

a1 = Actor.create(name: "will smith")
a2 = Actor.create(name: "Harrison Ford")
a3 = Actor.create(name: "Halle Barry")
a4 = Actor.create(name: "Lisa Boyle")
a5 = Actor.create(name: "JLo")


Character.create(name: "Yoda", movie_id: m1.id, actor_id: a1.id)
Character.create(name: "will smith", movie_id: m2.id, actor_id: a3.id)
Character.create(name: "Mike", movie_id: m3.id, actor_id: a2.id)
Character.create(name: "Yoda-2", movie_id: m4.id, actor_id: a4.id)
Character.create(name: "Yoda-3", movie_id: m1.id, actor_id: a5.id)
Character.create(name: "Yoda-4", movie_id: m3.id, actor_id: a2.id)
Character.create(name: "Yoda returns", movie_id: m4.id, actor_id: a5.id)
Character.create(name: "Yoda Jr.", movie_id: m3.id, actor_id: a4.id)




