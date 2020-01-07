class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )

        if @user
            login(@user)
        else
            render json: ["Incorrect Email and/or Password"], status: 401
        end
    end

    def destroy
        if logged_in?
            logout
            render json: {}
        else
            render json: ["There are no current users to logout!"], status: 404
        end
    end
end
