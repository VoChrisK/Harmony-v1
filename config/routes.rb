Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :create, :update, :destroy]
    get 'users/get_users_by_ids' => "users#get_users_by_ids"
    get 'users/find' => "users#find"
    resource :session, only: [:create, :destroy]
    resources :servers, except: [:new, :edit]
    get 'private_servers/' => "servers#private_servers"
    post 'servers/create_private_server' => "servers#create_private_server"
    resources :affiliations, only: [:create]
    delete 'affiliations/find' => "affiliations#find"
    resources :channels, except: [:new, :edit]
    #   resources :messages, only: [:create]
    # end
    resources :messages, only: [:index, :create, :update, :destroy]
    resources :channel_messages, only: [:index, :create]
    resources :direct_messages, only: [:index, :create]
    resources :friends, only: [:index, :create, :destroy]
  end

  root to: "static_pages#root"
  mount ActionCable.server => '/cable'
end
