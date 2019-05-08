class AddProfileToArtistInfos < ActiveRecord::Migration[5.2]
  def change
    add_column :artist_infos, :role, :string
    add_column :artist_infos, :photo, :string
  end
end
