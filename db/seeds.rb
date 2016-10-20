# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(email: "admin@admin.com", username: "AlphaAdmin", password: "password")
Category.create(name: "Social Media", description: "To be used on social media platforms")
Category.create(name: "Advertising", description: "To be used to promote Alpha Media")
Category.create(name: "Marketing", description: "To be used to promote Alpha Media")
