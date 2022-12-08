class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :bio, :estate, :profile_pic, :followers, :following

  has_many :posts
end
