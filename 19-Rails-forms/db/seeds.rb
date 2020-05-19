# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Dog.destroy_all

Dog.create(name: "richi", breed: "pug", age: 9)
Dog.create(name: "Roxy", breed: "chihuahua", age: 8)
Dog.create(name: "Charlie", breed: "Terrier", age: 7)
Dog.create(name: "Gabe", breed: "Pomareien", age: 4)
Dog.create(name: "Dogger", breed: "Corgi", age: 8)
