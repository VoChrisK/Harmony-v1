ids = server.channels.map { |channel| channel.id }

json.extract! server, :id, :name, :owner_id
json.set! :channelIds do
    json.array! ids
end