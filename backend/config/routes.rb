Rails.application.routes.draw do
  resources :animes
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html


  get '/animes/filter/top', :to => 'animes#top_index'
end
