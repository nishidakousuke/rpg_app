Rails.application.routes.draw do
  root 'firststages#index'
  resources :heroes
  resources :battles
  resources :firststages
end
