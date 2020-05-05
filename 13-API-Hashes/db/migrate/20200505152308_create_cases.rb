class CreateCases < ActiveRecord::Migration[5.2]
  def change
    create_table :cases do |t|
      t.integer :country_id
      t.integer :total
      t.integer :recovered
    end
  end
end
