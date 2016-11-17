class TemplatesController < ApplicationController

  def index
    render json: @templates = Template.all.order('category_id asc').order('title asc')
  end

  def show
    # @category = Category.find(params[:category_id])
    @template = Template.find(params[:id])
  end

  def new
    @categories = Category.all
    @template = Template.new
    render :new
  end

  def file_send
    @template = Template.find(params[:id])
  end

  def to_crop
    @template = Template.find(params[:id])
    render :crop
  end


  # Have a seperate model for image that is cropped down by the user. Have this model created whenever the user goes throught the cropping action and allows them to download the image.

  def crop
    @template = Template.find(params[:id])
    @template.update_attributes(crop_params)
    @template.reprocess_image
    redirect_to file_send_template_path(@template)
  end

  def create
    @template = Template.new(template_params)
    @aspect1 = nil
    @aspect2 = nil
    if params[:aspect] == "0"
      @aspect1 = 1
      @aspect2 = 1
    elsif params[:aspect] == "1"
      @aspect1 = 4
      @aspect2 = 3
    elsif params[:aspect] == "2"
      @aspect1 = 16
      @aspect2 = 9
    elsif params[:aspect] == "3"
      @aspect1 = 5
      @aspect2 = 7
    end
    if @template.save
      if @template.title
        flash[:notice] = @template.title + " Template successfully added!"
      end
      respond_to do |format|
        format.json {render json: @template}
        format.html {render :crop}
        format.js
      end
    else
      render :new
    end
  end

  def edit
    @categories = Category.all
    @template = Template.find(params[:id])
    @category = @template.category
    respond_to do |format|
      format.html {render :edit}
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

  def crop_params
    params.require(:template).permit(:crop_x, :crop_y, :crop_w, :crop_h)
  end
end
