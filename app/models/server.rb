class Server < ApplicationRecord
    validates :name, presence: true

    has_many :affiliations,
    primary_key: :id,
    foreign_key: :server_id,
    class_name: 'Affiliation'

    has_many :channels,
    primary_key: :id,
    foreign_key: :server_id,
    class_name: 'Channel'

    has_many :users,
    through: :affiliations,
    source: :user

    # belongs_to :owner,
    # primary_key: :id,
    # foreign_key: :owner_id,
    # class_name: 'User'

    has_many :direct_messages,
    primary_key: :id,
    foreign_key: :server_id,
    class_name: 'DirectMessage'

    has_many :private_messages,
    through: :direct_messages,
    source: :message
end
