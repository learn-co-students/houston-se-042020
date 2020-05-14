class CreateConcerts < ActiveRecord::Migration[5.2]
  def change
    create_table :concerts do |t|
      t.string :date
      t.integer :venue_id
      t.integer :performer_id
    end
  end
end
