Rails.application.routes.draw do
  get "/login", to: "users#login"
  resources :items
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
