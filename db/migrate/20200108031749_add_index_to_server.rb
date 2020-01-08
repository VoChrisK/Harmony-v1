class AddIndexToServer < ActiveRecord::Migration[5.2]
  def change
      add_index :servers, :name, unique: true
  end
end
