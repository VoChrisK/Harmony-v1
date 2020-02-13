class Api::DirectMessagesController < ApplicationController
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
