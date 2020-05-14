Dog.destroy_all
Owner.destroy_all
Performer.destroy_all
Venue.destroy_all
Concert.destroy_all

10.times do
    Owner.create(name: Faker::Name.name) 
end

20.times do
    Dog.create(name: Faker::Creature::Dog.name , breed: Faker::Creature::Dog.breed, owner_id: Owner.all.sample.id)
end


p1 = Performer.create(name: "Nick Jonas")
p2 = Performer.create(name: "JLO")
p3 = Performer.create(name: "Beyonce")

v1 = Venue.create(address: "Houston")
v2 = Venue.create(address: "NYC")
v3 = Venue.create(address: "LA")

Concert.create(date: "10/20/2019", performer_id: p1.id, venue_id: v1.id) #Performer.all.sample.id
Concert.create(date: "1/2/2020", performer_id: p2.id, venue_id: v3.id)
Concert.create(date: "6/20/2019", performer_id: p3.id, venue_id: v2.id)
Concert.create(date: "11/20/2019", performer_id: p1.id, venue_id: v3.id)



