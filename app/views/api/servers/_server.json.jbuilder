channel_ids = server.channels.map { |channel| channel.id }
user_ids = server.users.map { |user| user.id }

json.extract! server, :id, :name, :owner_id
json.set! :channelIds do
    json.array! channel_ids
end
json.set! :userIds do
    json.array! user_ids
end