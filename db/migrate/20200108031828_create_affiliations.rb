class CreateAffiliations < ActiveRecord::Migration[5.2]
  def change
    create_table :affiliations do |t|
      t.integer :user_id, null: false
      t.integer :server_id, null: false
      t.timestamps
    end
  end
end
