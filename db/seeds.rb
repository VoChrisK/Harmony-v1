# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

test_user = User.create(username: "TestUser", email: "TestUser@test.com", password: "TestPassword", status: "Online")
user1 = User.create(username: "CurrySoup", email: "chrisvo1994@gmail.com", password: "password", status: "Away")

server1 = Server.create(name: "Test Server", owner_id: test_user.id)
server2 = Server.create(name: "Gaming with Friends", owner_id: user1.id)
server3 = Server.create(name: "Chris's Spectacular Server", owner_id: user1.id)

affiliation1 = Affiliation.create(user_id: test_user.id, server_id: server1.id)
affiliation1 = Affiliation.create(user_id: user1.id, server_id: server2.id)
affiliation1 = Affiliation.create(user_id: user1.id, server_id: server3.id)
affiliation1 = Affiliation.create(user_id: test_user.id, server_id: server3.id)

channel1 = Channel.create(name: "General1", server_id: server1.id)
channel2 = Channel.create(name: "General2", server_id: server2.id)
channel3 = Channel.create(name: "General3", server_id: server3.id)
channel4 = Channel.create(name: "Test Channel 1", server_id: server1.id)
channel5 = Channel.create(name: "Test Channel 2", server_id: server1.id)


