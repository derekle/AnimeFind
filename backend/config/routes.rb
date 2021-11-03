Rails.application.routes.draw do
  resources :animes
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get '/animes/filter/season', :to => 'animes#index_season'
  get '/animes/filter/top', :to => 'animes#index_top'

  get '/animes/search/:type', :to => 'animes#search'
  get '/animes/:id/info',   :to => 'animes#show'
  # get '/animes/search/genre/:id', :to => 'animes#search_by_genre'
end
