class ArtistInfo < ApplicationRecord
    has_and_belongs_to_many :gigs
end
