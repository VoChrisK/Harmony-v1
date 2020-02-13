class DirectMessage < ApplicationRecord
    validates :message_id, :server_id, presence: true

    belongs_to :message,
    primary_key: :id,
    foreign_key: :message_id,
    class_name: "Message"

    belongs_to :server,
    primary_key: :id,
    foreign_key: :server_id,
    class_name: "Server"
end
