class CreateFriends < ActiveRecord::Migration[5.2]
  def change
    create_table :friends do |t|
      t.integer :user_id_1, null: false
      t.integer :user_id_2, null: false
      t.timestamps
    end
  end
end
