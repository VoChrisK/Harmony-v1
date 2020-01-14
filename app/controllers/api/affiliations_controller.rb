class Api::AffiliationsController < ApplicationController
    def create
        @affiliation = Affiliation.new(affiliation_params)
        if @affiliation.save
            render json: @affiliation
        else
            render json: @affiliation.errors.full_messages, status: 422
        end
    end

    def destroy
        @affiliation = Affiliation.find(params[:id])
        @affiliation.destroy
        render json: @affiliation
    end

    private
    def affiliation_params
        params.require(:affiliation).permit(:user_id, :server_id)
    end
end
