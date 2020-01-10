class AddIndicesToChannels < ActiveRecord::Migration[5.2]
  def change
    add_index :channels, :name, unique: true
    add_index :channels, :server_id
  end
end
