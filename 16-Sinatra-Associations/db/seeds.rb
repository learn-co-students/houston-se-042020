Dog.destroy_all
Owner.destroy_all

10.times do
    Owner.create(name: Faker::Name.name) 
end

20.times do
    Dog.create(name: Faker::Creature::Dog.name , breed: Faker::Creature::Dog.breed, owner_id: Owner.all.sample.id)
end