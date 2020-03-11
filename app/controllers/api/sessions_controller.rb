class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )

        if @user
            login(@user)
            render json: @user
        else
            render json: ["Incorrect Email and/or Password"], status: 401
        end
    end

    def destroy
        logout if logged_in?
        render json: {}
    end
end
