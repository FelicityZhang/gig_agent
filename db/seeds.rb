# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
gig1 = Gig.create!(name: "First Folio Theatre Day 2019-2020 Season", description: "Casting Equity actors for the First Folio Theatre Day 2019-2020 Season. Season includes “The Guys” (Anne Nelson, playwright; Melanie Keller, dir. Rehearsals begin Sept. 2; runs Sept. 9-11), “Sherlock’s Last Case” (Charles Marowitz, playwright; Janice L. Blixt, dir. Rehearsals begin Sept. 16;.")
gig2 = Gig.create!(name: "Top Legit Agent Acting Intensive with The Krasny Office", description: "Seeking participants for a TV and film intensive with top talent agent Lynne Jebens with The Krasny Office. Company states: She will be teaching this TV & Film Intensive for adults 16 years old and over. The class will be a combination of bringing in prepared materials and learning cold reading technique. ")
gig3 = Gig.create!(name: "Blue Balloon Parties, Children's Party Entertainer", description: "This will be a 3 hours presentation show! Paid $500") 
gig4 = Gig.create!(name: "new season collection", description: "Seeking qualified candidates to be trained to be part of the Blue Balloon family. Applicants who are hired will be trained in face painting, making balloon animals, etc. Company states: Great part time job for any aspiring actress, students, waitress, or anyone who has availability on weekends who wants to earn extra money.") 
gig5 = Gig.create!(name: "Blue Balloon, Kids Party Host", description: "Seeking qualified candidates for a kids' entertainment company. Coordinator states: This is a great part-time spring and summer job for any aspiring actors, students, waiters, or anyone who has availability on weekends who wants to earn extra money. You must be outgoing and reliable.") 
gig5 = Gig.create!(name: "'Having Our Say,' NYC EPA", description: "Casting Equity actors for Having Our Say. Synopsis: Originally from the South, the sisters moved to New York in response to the Jim Crow law period. They survived racism and sexism, proving they could achieve the “unachievable.” Through humor and pathos these ladies relive many of the pivotal moments which shaped their incredible lives. Seeking actors in their 50’s, 60’s or 70’s to portray these roles.") 
gig5 = Gig.create!(name: "National Pharmaceutical Commercial", description: "Casting a male 23 - 40 singer for a 1 day shoot in Los Angeles. Must have a diagnosis for Hyperhidrosis from a medical doctor (excessive sweating under the armpits).") 
gig5 = Gig.create!(name: "Guest Service Manager, CQ Hotels", description: "Seeking aspiring models/actors to work as a Guest Service Manager at CQ Hotel Boston. Hotel manager states: CQ Hotels are located in prime city centre locations, and are designed to offer uncomplicated, hi-tech, contemporary travel experiences to business travelers and urban explorers. ") 

ArtistInfo.create!(name: 'Amani Qing', description: 'New York', price: '$75/hour', photo: "https://i.imgur.com/fLEGJSr.jpg")
ArtistInfo.create!(name: 'Maya Simone', description: 'Brooklyn, NY', price: '$80/hour', photo: "https://d26oc3sg82pgk3.cloudfront.net/files/media/uploads/casting_call/36a75bfe-ff3d-477e-ac3e-39f6d5b3d32b.jpg" )
ArtistInfo.create!(name: 'Lisa Yang', description: 'New York', price: '$100/hour', photo: "https://d26oc3sg82pgk3.cloudfront.net/files/media/uploads/casting_call/25c97a1f-a14e-4163-b64b-3b9b19acbf76.jpeg")
ArtistInfo.create!(name: 'Desay Urina', description: 'Los Angeles', price: '$150/hour', photo: "https://i.imgur.com/dBuz51h.jpg" )
ArtistInfo.create!(name: 'Chris Banks', description: 'London', price: '$250/hour', photo: "https://d26oc3sg82pgk3.cloudfront.net/files/media/uploads/casting_call/90eed802-c769-48c0-beb5-b132d4ce87b8.jpg" )
ArtistInfo.create!(name: 'Megan Malloy', description: 'New York', price: '$150/hour', photo: "https://d26oc3sg82pgk3.cloudfront.net/files/media/uploads/casting_call/7eac52c3-859e-4a95-993b-fa2c4e6c2139.JPG" )
ArtistInfo.create!(name: 'Aliyah Pechtold', description: 'New Lenox', price: '$75/hour', photo: "https://d26oc3sg82pgk3.cloudfront.net/files/media/uploads/casting_call/38a63b65-30c4-48db-ba3a-805b794bbd90-bWFpbi1uLW4tMC0wLTAtNzUwLTEwNzQ.JPG" )
ArtistInfo.create!(name: 'Sarah Wynn', description: 'Peoria, IL', price: '$100/hour', photo: "https://d26oc3sg82pgk3.cloudfront.net/files/media/uploads/casting_call/9db11142-8189-4456-9b01-ce15c8c35ca2.jpg" )
ArtistInfo.create!(name: 'Ajani Kingslow', description: 'Miami Beach', price: '$70/hour', photo: "https://d26oc3sg82pgk3.cloudfront.net/files/media/uploads/casting_call/7c4943a3-4b7b-496b-ae3f-0d2ab7db22a3-bWFpbi1uLW4tMC0wLTAtMTE2MC0xMjAw.JPG" )
ArtistInfo.create!(name: 'David Oneil', description: 'London', price: '$150/hour', photo: "https://i.imgur.com/ZMoVS0E.jpg" )
ArtistInfo.create!(name: 'Paola Zea', description: 'New York', price: '90/hour', photo: "https://d26oc3sg82pgk3.cloudfront.net/files/media/uploads/casting_call/f1b0497a-81c7-47b7-bb9e-6a80e5a24f7b.jpg" )

