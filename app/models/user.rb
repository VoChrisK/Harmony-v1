class User < ApplicationRecord
    validates :username, :password_digest, presence: true
    validates :status, inclusion: { in: ["Online", "Away", "Do not disturb", "Offline"] }
    validates :password, length: { minimum: 6, allow_nil: true }
    before_validation :ensure_session_token

    attr_reader :password

    has_many :messages,
    primary_key: :id,
    foreign_key: :author_id,
    classname: 'Message'

    has_many :affiliations,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'Affiliation'

    has_many :servers,
    through: :affiliations,
    source: :server

    def self.find_by_credentials(email, password)
        user = User.find_by_email(email)
        return nil unless user
        user.is_password?(password) ? user : nil
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end

    def reset_session_token
        self.session_token = SecureRandom::urlsafe_base64
        self.save
        self.session_token
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end
end
