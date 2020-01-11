class Channel < ApplicationRecord
    validates :name, :server_id, presence: true

    belongs_to :server,
    primary_key: :id,
    foreign_key: :server_id,
    class_name: 'Server'

    has_many :channel_messages,
    primary_key: :id,
    foreign_key: :channel_id,
    class_name: 'ChannelMessage'

    has_many :messages,
    through: :channel_messages,
    source: :message
end
