class CategoriesController < ApplicationController
  before_filter :authenticate_user!
  def index
    @categories = Category.all
  end
  def react_frontend
    @categories = Category.all
      @templates = Template.all
  end
  def admin_index
    @categories = Category.all
  end
  def react_index
    @categories = Category.all
    @templates = Template.all.order('category_id asc').order('title asc')
    @template = Template.new
  end
  def show
    @category = Category.find(params[:id])
  end
end
