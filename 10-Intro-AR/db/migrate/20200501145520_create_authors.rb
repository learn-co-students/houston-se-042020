class CreateAuthors < ActiveRecord::Migration[5.2]
  def change
    create_table :authors do |t|
      # t.name :string not working
      t.string :name
      t.integer :age
      t.string :address
      t.string :publication
    end
  end
end
