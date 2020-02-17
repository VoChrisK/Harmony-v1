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
        new_friend_1 = Friend.new(friend_params)
        new_friend_2 = Friend.new(user_id_1: params[:friend][:user_id_2], user_id_2: params[:friend][:user_id_1])
        if new_friend_1.save && new_friend_2.save
            if new_friend_1[:user_id_1] != params[:friend][:user_id_1].to_i
                @friend = User.where(id: new_friend_1[:user_id_1])[0]
            else
                @friend = User.where(id: new_friend_1[:user_id_2])[0]
            end
            render json: @friend
        else
            render json: new_friend_1.errors.full_messages, status: 422
        end
    end

    def find
        removed_friend_1 = Friend.find_by(user_id_1: params[:friend][:user_id_1], user_id_2: params[:friend][:user_id_2])
        removed_friend_2 = Friend.find_by(user_id_1: params[:friend][:user_id_2], user_id_2: params[:friend][:user_id_1])

        if removed_friend_1    
            removed_friend_1.destroy
            removed_friend_2.destroy
            if removed_friend_1[:user_id_1] != params[:friend][:user_id_1].to_i
                @friend = User.where(id: removed_friend_1[:user_id_1])[0]
            else
                @friend = User.where(id: removed_friend_1[:user_id_2])[0]
            end
            render json: @friend
        else
            render json: ["Cannot find friend"], status: 404
        end
    end

    private
    def friend_params
        params.require(:friend).permit(:user_id_1, :user_id_2)
    end
end
