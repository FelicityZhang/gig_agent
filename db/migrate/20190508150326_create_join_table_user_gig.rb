class CreateJoinTableUserGig < ActiveRecord::Migration[5.2]
  def change
    create_join_table :users, :gigs do |t|
      # t.index [:user_id, :gig_id]
      # t.index [:gig_id, :user_id]
    end
  end
end
