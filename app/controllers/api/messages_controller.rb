class Api::MessagesController < ApplicationController
    before_action :require_current_user

    def index
        if !params[:channel].nil?
            @messages = Channel.includes(:messages).find(params[:channel][:id]).messages
        elsif !params[:server].nil?
            @messages = Server.includes(:messages).find(params[:server][:id]).messages
        else
            @messages = {}
        end
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
