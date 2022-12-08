Rails.application.routes.draw do
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  post "/addevent", to: "events#create"
  post "/addpost", to: "posts#create"
  get "posts", to: "posts#index"
  get "/events", to: "events#index"
  patch "/updateprofile", to: "users#update"
  delete "/logout", to: "sessions#destroy"
  patch "/likes", to: "posts#update"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
