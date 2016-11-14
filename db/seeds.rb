# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!(email: "admin@admin.com", username: "AlphaAdmin", password: "password")
Category.all.each {|a| a.destroy }


# The order categories are created matters, don't change this
Category.create!(name: "Social Media", description: "To be used on social media platforms", image: "/images/Social_Image_Icon.svg")

Category.create!(name: "Web Ad", description: "To be used to promote Alpha Media", image: "/images/Web_Ad_Icon.svg")

Category.create!(name: "Web Image", description: "To be used for website graphics", image: "/images/Web_Image_Icon.svg")

Template.all.each {|a| a.destroy }
10.times do
  Template.create!(title: Faker::Hacker.adjective, description: Faker::Hacker.say_something_smart, category_id: Category.all.first.id + rand(3))
end
