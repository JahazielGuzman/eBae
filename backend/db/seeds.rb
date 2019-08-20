# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

joe = User.create(name: "joe", balance: 300, img_url: "")
jaha = User.create(name: "jahaziel", balance: 200, img_url: "")
dan = User.create(name: "dan", balance: 5000, img_url: "")


Item.create(name: "ball", description: "round as shit", state: "being sold", price: 10, img_url: "", user: joe)
Item.create(name: "banana", description: "tasty", state: "being sold", price: 1, img_url: "", user: joe)
Item.create(name: "scooter", description: "dangerous", state: "being sold", price: 50, img_url: "", user: jaha)
Item.create(name: "candle", description: "firey", state: "being sold", price: 10, img_url: "", user: jaha)
Item.create(name: "table", description: "oneword", state: "being sold", price: 34, img_url: "", user: dan)
Item.create(name: "chair", description: "oneword", state: "being sold", price: 54, img_url: "", user: dan)
Item.create(name: "bullshit", description: "oneword", state: "being sold", price: 643, img_url: "", user: dan)
Item.create(name: "other bullshit", description: "oneword", state: "being sold", price: 232, img_url: "", user: dan)
