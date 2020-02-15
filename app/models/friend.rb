class Friend < ApplicationRecord
    validates :user_id_1, :user_id_2, presence: true
    validates [:user_id_1, :user_id_2], uniqueness: true

    belongs_to :friend_1,
    primary_key: :id,
    foreign_key: :user_id_1,
    class_name: "User"

    belongs_to :friend_2,
    primary_key: :id,
    foreign_key: :user_id_2,
    class_name: "User"
end
