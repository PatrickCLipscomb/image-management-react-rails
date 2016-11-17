class AddAspectToTemplates < ActiveRecord::Migration
  def change
    add_column :templates, :aspect, :string
  end
end
