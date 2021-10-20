class User < ApplicationRecord
    has_secure_password

    validates :username, presence: true, uniqueness: true
    validates_confirmation_of :password, presence: true
end
