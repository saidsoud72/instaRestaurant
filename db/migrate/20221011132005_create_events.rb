class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.string :title
      t.string :category
      t.string :location
      t.integer :user_id
      t.string :description
      t.string :image_url
      t.integer :likes

      t.timestamps
    end
  end
end
