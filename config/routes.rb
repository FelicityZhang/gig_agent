Rails.application.routes.draw do
  root 'gigs#index'
  resources :artist_infos
  resources :gigs
  post '/auth/login', to: 'authentication#login'
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
