class AddIndexToAffiliation < ActiveRecord::Migration[5.2]
  def change
    add_index :affiliations, [:user_id, :server_id], unique: true
  end
end
