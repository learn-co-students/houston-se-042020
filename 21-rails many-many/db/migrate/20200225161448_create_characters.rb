class CreateCharacters < ActiveRecord::Migration[6.0]
  def change
    create_table :characters do |t|
      t.string :name
      t.belongs_to :movie, null: false, foreign_key: true
      t.belongs_to :actor, null: false, foreign_key: true

      t.timestamps
    end
  end
end
