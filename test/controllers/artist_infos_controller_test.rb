require 'test_helper'

class ArtistInfosControllerTest < ActionDispatch::IntegrationTest
  setup do
    @artist_info = artist_infos(:one)
  end

  test "should get index" do
    get artist_infos_url, as: :json
    assert_response :success
  end

  test "should create artist_info" do
    assert_difference('ArtistInfo.count') do
      post artist_infos_url, params: { artist_info: { description: @artist_info.description, name: @artist_info.name, price: @artist_info.price } }, as: :json
    end

    assert_response 201
  end

  test "should show artist_info" do
    get artist_info_url(@artist_info), as: :json
    assert_response :success
  end

  test "should update artist_info" do
    patch artist_info_url(@artist_info), params: { artist_info: { description: @artist_info.description, name: @artist_info.name, price: @artist_info.price } }, as: :json
    assert_response 200
  end

  test "should destroy artist_info" do
    assert_difference('ArtistInfo.count', -1) do
      delete artist_info_url(@artist_info), as: :json
    end

    assert_response 204
  end
end
