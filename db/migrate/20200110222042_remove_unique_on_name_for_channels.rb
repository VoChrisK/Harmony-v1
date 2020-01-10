class RemoveUniqueOnNameForChannels < ActiveRecord::Migration[5.2]
  def change
    remove_index :channels, :name
    add_index :channels, :name
  end
end
