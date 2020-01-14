Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :create, :update, :destroy]
    get 'users/find' => "users#find"
    resource :session, only: [:create, :destroy]
    resources :servers, except: [:new, :edit]
    resources :affiliations, only: [:create]
    delete 'affiliations/find' => "affiliations#find"
    resources :channels, except: [:new, :edit]
    #   resources :messages, only: [:create]
    # end
    resources :messages, only: [:index, :create, :update, :destroy]
  end

  root to: "static_pages#root"
  mount ActionCable.server => '/cable'
end
