class Api::FriendsController < ApplicationController
    def index
        @friends = User.includes(:friends_2).find(params[:friend][:user_id_1]).friends_2
        render json: @friends
    end

    def create
        @friend = Friend.new(friend_params)
        if @friend.save
            render json: @friend
        else
            render json: @friend.errors.full_messages, status: 422
        end
    end

    def destroy
        @friend = Friend.find(params[:id])
        @friend.destroy
        render json: @friend
    end

    private
    def friend_params
        params.require(:friend).permit(:user_id_1, :user_id_2)
    end
end
