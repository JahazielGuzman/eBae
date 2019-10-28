# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Item.delete_all
User.delete_all

7.times do
	User.create(name: Faker::GreekPhilosophers.name, balance: (50..500).to_a.sample, img_url: "./images/l60Hf.png")
end

30.times do
	Item.create(name: Faker::Commerce.product_name, 
		description: Faker::Quotes::Shakespeare.hamlet_quote, 
		state: "sell",
		price: (10..100).to_a.sample,
		img_url: "./images/l60Hf.png",
		user: User.all.sample)
end