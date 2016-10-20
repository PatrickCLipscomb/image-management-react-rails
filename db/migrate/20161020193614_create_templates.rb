class CreateTemplates < ActiveRecord::Migration
  def change
    create_table :templates do |t|
      t.string :title
      t.string :description
      t.integer :category_id
      

      t.timestamps null: false
    end
  end
end
