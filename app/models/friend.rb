class Friend < ApplicationRecord
    validates :user_id_1, :user_id_2, presence: true
    validates_uniqueness_of :user_id_1, :scope => [:user_id_2], message: " already exists"

    belongs_to :friend_1,
    primary_key: :id,
    foreign_key: :user_id_1,
    class_name: "User"

    belongs_to :friend_2,
    primary_key: :id,
    foreign_key: :user_id_2,
    class_name: "User"
end
