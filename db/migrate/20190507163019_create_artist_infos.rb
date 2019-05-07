class CreateArtistInfos < ActiveRecord::Migration[5.2]
  def change
    create_table :artist_infos do |t|
      t.string :name
      t.string :description
      t.string :price

      t.timestamps
    end
  end
end
