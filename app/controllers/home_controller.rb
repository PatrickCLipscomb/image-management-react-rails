class HomeController<ApplicationController
  def index
    Template.all.each do |template|
      if !template.title
        template.destroy
      end
    end
  end
end
