class Affiliation < ApplicationRecord
    validates :user_id, :server_id, presence: true
end
