Rails.application.routes.draw do
  root 'heroes#index'
  resources :heroes
  resources :battles
  resources :firststages
end
