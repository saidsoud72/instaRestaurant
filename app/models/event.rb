class Event < ApplicationRecord
    belongs_to :user

    # CATEGORY = ["Birthday", "Book club", "Board games", "Graduation party", "pool party" ]

    # validates :category, inclusion: {
    #     in: CATEGORIES,
    #     message: "must be one of the following: #{CATEGORIES.join(',')}"
    # }

     validates :image_url, presence: true
     validates :description, length: { minimum: 5 }
end
