Author.destroy_all
Book.destroy_all

Bakery.destroy_all
Customer.destroy_all
Review.destroy_all

a1 = Author.create(name: "Vidhi Sharma", age: 26, publication: "Flatiron", address:"Houston")
a2 = Author.create(name: "Edwin", age: 26, publication: "Flatiron", address:"Houston")
a3 = Author.create(name: "Taiye", age: 26, publication: "Flatiron", address:"Houston")
a4 = Author.create(name: "Phyllis", age: 26, publication: "Flatiron", address:"Houston")
a5 = Author.create(name: "Luis", age: 26, publication: "Flatiron", address:"Houston")


Book.create(title: "ruby", year: 2002, author_id: a1.id)
Book.create(title: "ruby-2", year: 2004, author_id: a2.id)
Book.create(title: "ruby-3", year: 2006, author_id: a3.id)
Book.create(title: "ruby-4", year: 2008, author_id: a4.id)
Book.create(title: "ruby-5", year: 2010, author_id: a2.id)


b1 = Bakery.create(name: "85 C")
b2 = Bakery.create(name: "Bollillo")
b3 = Bakery.create(name: "Crispy Cream")


c1 = Customer.create(name:"Vidhi")
c2 = Customer.create(name:"Luis")
c3 = Customer.create(name:"Phyllis")
c4 = Customer.create(name:"Esther")
c5 = Customer.create(name:"Thach")
c6 = Customer.create(name:"Edwin")


Review.create(rating: 5, customer_id: c1.id, bakery_id: b1.id)
Review.create(rating: 3, customer_id: c2.id, bakery_id: b2.id)
Review.create(rating: 4, customer_id: c3.id, bakery_id: b3.id)
Review.create(rating: 5, customer_id: c6.id, bakery_id: b1.id)
Review.create(rating: 5, customer_id: c5.id, bakery_id: b2.id)
Review.create(rating: 1, customer_id: c6.id, bakery_id: b3.id)
Review.create(rating: 2, customer_id: c4.id, bakery_id: b2.id)
Review.create(rating: 3, customer_id: c3.id, bakery_id: b3.id)






