class CategoriesController < ApplicationController
  def index
    @categories = Category.all
  end
  def admin_index
    @categories = Category.all
  end
end
