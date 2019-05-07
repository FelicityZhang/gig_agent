class ArtistInfosController < ApplicationController
  before_action :set_artist_info, only: [:show, :update, :destroy]

  # GET /artist_infos
  def index
    @artist_infos = ArtistInfo.all

    render json: @artist_infos
  end

  # GET /artist_infos/1
  def show
    render json: @artist_info
  end

  # POST /artist_infos
  def create
    @artist_info = ArtistInfo.new(artist_info_params)

    if @artist_info.save
      render json: @artist_info, status: :created, location: @artist_info
    else
      render json: @artist_info.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /artist_infos/1
  def update
    if @artist_info.update(artist_info_params)
      render json: @artist_info
    else
      render json: @artist_info.errors, status: :unprocessable_entity
    end
  end

  # DELETE /artist_infos/1
  def destroy
    @artist_info.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_artist_info
      @artist_info = ArtistInfo.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def artist_info_params
      params.require(:artist_info).permit(:name, :description, :price)
    end
end
