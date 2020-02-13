class Api::MessagesController < ApplicationController
    def index
        @messages = Channel.includes(:messages).find(params[:channel][:id]).messages
        render :index
    end

    def create
        @message = Message.new(message_params)
        if @message.save
            render :show
        else
            render json: @message.errors.full_messages, status: 422
        end
    end

    def update
        @message = Message.find(params[:id])
        render json: ["Cannot find message"], status: 404 unless @message
        if @message.update(message_params)
            render @message
        else
            render json: @message.errors.full_messages, status: 422
        end
    end

    def destroy
        @message = Message.find(params[:id])
        @message.destroy
        render @message
    end

    private
    def message_params
        params.require(:message).permit(:body, :author_id)
    end
end
