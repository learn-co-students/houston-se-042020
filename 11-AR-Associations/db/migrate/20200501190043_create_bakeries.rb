class CreateBakeries < ActiveRecord::Migration[5.2]
  def change
    create_table :bakeries do |t| 
      t.string :name
    end
   

  end
end
