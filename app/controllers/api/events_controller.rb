class EventsController < ApplicationController
    skip_before_action :authorize, only: [:create, :index]

    def create
        events = Event.create(event_params)
        render json: events, status: :created
    end

    def index
        event = Event.all
        render json: event
    end

    private

    def event_params
        params.permit(:title, :category, :location, :user_id, :description, :image_url, :likes)
    end

end
