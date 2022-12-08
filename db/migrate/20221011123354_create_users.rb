class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :email
      t.string :password_digest
      t.string :bio
      t.string :estate
      t.string :profile_pic
      t.integer :followers
      t.integer :following

      t.timestamps
    end
  end
end
