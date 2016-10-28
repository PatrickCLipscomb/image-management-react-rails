# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!(email: "admin@admin.com", username: "AlphaAdmin", password: "password")
Category.all.each {|a| a.destroy }
Category.create!(name: "Social Media", description: "To be used on social media platforms")
Category.create!(name: "Advertising", description: "To be used to promote Alpha Media")
Category.create!(name: "Website Graphics", description: "To be used for website graphics")
Template.all.each {|a| a.destroy }
30.times do
  Template.create!(title: Faker::Hacker.adjective, description: Faker::Hacker.say_something_smart, category_id: Category.all.first.id + rand(3))
end
