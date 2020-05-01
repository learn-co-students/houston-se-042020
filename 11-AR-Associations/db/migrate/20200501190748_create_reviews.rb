class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t| 
      t.integer  :rating
      t.integer :bakery_id
      t.integer :customer_id
    end
  end
end
