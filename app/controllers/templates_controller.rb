class TemplatesController < ApplicationController
  def show
    # @category = Category.find(params[:category_id])
    @template = Template.find(params[:id])
  end

  def new
    @categories = Category.all
    @template = Template.new
    render :new
  end

  def create
    @categories = Category.all
    @category = Category.find(params[:category_id])
    @template = @category.templates.new(template_params)
    if @template.save
      flash[:notice] = "Template successfully added!"
      redirect_to template_path(@template)
    else
      render :new
    end
  end

  def edit
    @categories = Category.all
    @template = Template.find(params[:id])
    @category = @template.category
    respond_to do |format|
      format.js
    end
  end

  def update
    @template = Template.find(params[:id])
    @category = @template.category
    if @template.update(template_params)
      respond_to do |format|
        format.js
        format.html {redirect_to template_path(@template)}
        format.json {render json: @template}
      end
      flash[:notice] = "Template successfully updated!"
    else
      render :edit
    end
  end

  def destroy
    template = Template.find(params[:id])
    if template.delete
      flash[:notice] = template.title.capitalize + " Template Deleted"
      respond_to do |format|
        format.json { head :no_content }
        format.html { redirect_to admin_path }
      end
    else
      flash[:alert] = "Template Delete Failed"
    end
  end

private
  def template_params
    params.require(:template).permit(:title, :description, :category_id, :image)
  end
end
