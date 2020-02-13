class Api::ServersController < ApplicationController
    def index
        @servers = User.includes(:servers).find(params[:user][:id]).servers.where.not(owner_id: nil)
        render :index
    end
    
    # finds all private servers based on the current user
    def private_servers
        @servers = User.includes(:servers).find(params[:user][:id]).servers.where(owner_id: nil)
        render :index
    end

    def show
        @server = Server.find(params[:id])
        render :show
    end

    def create
        @server = Server.new(server_params)
        if @server.save
            Channel.create(name: "General", server_id: @server.id)
            render :show
        else
            render json: @server.errors.full_messages, status: 422
        end
    end

    def create_private_server
        @server = Server.find_by_name(params[:server][:name])

        if @server
            render :show
        else
            @server = Server.new(server_params)
            if @server.save
                render :show
            else
                render json: @server.errors.full_messages, status: 422
            end
        end
    end

    def update
        @server = Server.find(params[:id])
        render json: ["Cannot find server"], status: 404 unless @server
        if @server.update(server_params)
            render :show
        else
            render json: @server.errors.full_messages, status: 422
        end
    end

    def destroy
        @server = Server.find(params[:id])
        @server.destroy
        render :show
    end

    private
    def server_params
        params.require(:server).permit(:name, :owner_id)
    end
end
