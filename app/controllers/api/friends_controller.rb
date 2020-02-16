class Api::FriendsController < ApplicationController
    def index
        user_friends = User.includes(:friends).find(params[:friend][:user_id_1]).friends
        friends_indices = user_friends.map do |friend|
            if friend[:user_id_1] != params[:friend][:user_id_1].to_i
                friend[:user_id_1]
            else
                friend[:user_id_2]
            end
        end

        @friends = User.where(:id => friends_indices)
        render json: @friends
    end

    def create
        new_friend = Friend.new(friend_params)
        if new_friend.save
            if new_friend[:user_id_1] != params[:friend][:user_id_1].to_i
                @friend = User.where(id: new_friend[:user_id_1])
            else
                @friend = User.where(id: new_friend[:user_id_2])
            end
            render json: @friend
        else
            render json: new_friend.errors.full_messages, status: 422
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
