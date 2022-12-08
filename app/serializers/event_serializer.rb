class EventSerializer < ActiveModel::Serializer
  attributes :id, :title, :category, :location, :user_id, :description, :image_url, :likes

  belongs_to :user
end
