class TemplatesController < ApplicationController
  def destroy
    template = Template.find(params[:id])
    if template.delete
      flash[:notice] = template.title.capitalize + " Template Deleted"
      redirect_to admin_path
    else
      flash[:alert] = "Template Delete Failed"
    end
  end
end
