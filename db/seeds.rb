# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
gig1 = Gig.create!(name: "short film shooting", description: "This will be a 3 day shooting! Paid $50/hour.")
gig2 = Gig.create!(name: "Fashion Week Runway show", description: "This will be a 20 mins runway show! Paid $100")
gig3 = Gig.create!(name: "Runway", description: "This will be a 3 hours presentation show! Paid $500") 
gig4 = Gig.create!(name: "new season collection", description: "This will be 1 day shooting! Paid $440") 
gig5 = Gig.create!(name: "fashion show", description: "This will be half day show! Paid $240") 

ArtistInfo.create!(name: 'Amani Qing', description: 'dancer, actor', price: '$75/hour', gigs: [gig1, gig2, gig3])
ArtistInfo.create!(name: 'Lisa Yang', description: 'model, actor', price: '$100/hour', gigs: [gig1, gig4, gig3])
ArtistInfo.create!(name: 'Sara Oneil', description: 'dancer, model', price: '$150/hour', gigs: [gig1, gig4, gig5])

