class Api::UsersController < ApplicationController
    def index
        @users = Server.find(params[:server][:id]).users
        render :index
    end

    def get_users_by_ids
        @users = User.where(:id => params[:ids])
        render :index
    end

    def find
        @user = User.find_by(username: params[:username])
        if @user
            render :show
        else
            render json: ["Cannot find user. Please try again"], status: 404
        end
    end

    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def update
        @user = User.find(params[:id])
        render json: ["Cannot find user"], status: 404 unless @user
        if @user.update(user_params)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def destroy
        @user = User.find(params[:id])
        @user.destroy
        render :show
    end

    private
    def user_params
        params.require(:user).permit(:username, :email, :password, :status)
    end
end
