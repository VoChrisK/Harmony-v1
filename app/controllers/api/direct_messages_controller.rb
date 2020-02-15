class Api::DirectMessagesController < ApplicationController
    def index
        @messages = Server.includes(:messages).find(params[:direct_message][:server_id]).messages
        render 'api/messages/index'
    end

    def create
        @direct_message = DirectMessage.new(direct_message_params)
        if @direct_message.save
            render json: @direct_message
        else
            render json: @direct_message.errors.full_messages, status: 422
        end
    end

    def direct_message_params
        params.require(:direct_message).permit(:message_id, :server_id)
    end
end
