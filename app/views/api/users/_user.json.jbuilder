server_ids = user.servers.select {|server| !server.owner_id.nil? }.map {|server| server.id}

json.extract! user, :id, :username, :status
json.set! :serverIds do
    json.array! server_ids
end