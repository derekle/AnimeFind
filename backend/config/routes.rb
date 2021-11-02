Rails.application.routes.draw do
  resources :animes
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html


  get '/animes/filter/top', :to => 'animes#filter_by_top'
  get '/animes/search/:id', :to => 'animes#search_by_id'
  get '/animes/info/:id',   :to => 'animes#info_by_id'
  get '/animes/search/genre/:id', :to => 'animes#search_by_genre'
end
