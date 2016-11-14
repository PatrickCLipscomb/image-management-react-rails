class CategoriesController < ApplicationController
  before_filter :authenticate_user!, only:[:react_index]
  def index
    @categories = Category.all
  end

  def admin_index
    @categories = Category.all
  end

  def react_index
    if Category.all.length == 0
      Category.create!(name: "Social Media", description: "To be used on social media platforms", image: "/images/Social_Image_Icon.svg")
      Category.create!(name: "Web Ad", description: "To be used to promote Alpha Media", image: "/images/Web_Ad_Icon.svg")
      Category.create!(name: "Web Image", description: "To be used for website graphics", image: "/images/Web_Image_Icon.svg")
    end
    @templates = Template.all.order('category_id asc').order('title asc')
    @template = Template.new
  end

  def react_frontend
    @templates = Template.all
    @categories = Category.all
  end

  def show
    @category = Category.find(params[:id])
  end
end
