class Message < ApplicationRecord
    validates :body, :author_id, presence: true

    belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'User'

    has_one :channel_message,
    primary_key: :id,
    foreign_key: :message_id,
    class_name: 'ChannelMessage'

    has_one :channel,
    through: :channel_message,
    source: :channel

    has_one :direct_message,
    primary_key: :id,
    foreign_key: :message_id,
    class_name: 'DirectMessage'

    has_one :private_server,
    through: :direct_message,
    source: :server
end
