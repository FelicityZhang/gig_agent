class CreateJoinTableArtistInfosGigs < ActiveRecord::Migration[5.2]
  def change
    create_join_table :artist_infos, :gigs do |t|
      # t.index [:artist_info_id, :gig_id]
      # t.index [:gig_id, :artist_info_id]
    end
  end
end
