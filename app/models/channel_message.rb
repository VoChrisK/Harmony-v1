class ChannelMessage < ApplicationRecord
    validates :message_id, :channel_id, presence: true

    belongs_to :message,
    primary_key: :id,
    foreign_key: :message_id,
    class_name: 'Message'

    belongs_to :channel,
    primary_key: :id,
    foreign_key: :channel_id,
    class_name: 'Channel'
end
