class AddIndexToChannelMessage < ActiveRecord::Migration[5.2]
  def change
    add_index :channel_messages, :channel_id
  end
end
