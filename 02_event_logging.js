// Task 2: Event Logging System
db = db.getSiblingDB("bca305p_lab3");
db.events.drop();
db.events.insertMany([
  {user:"u101",event:"login",timestamp:new Date()},
  {user:"u101",event:"failed-login",timestamp:new Date()},
  {user:"u101",event:"failed-login",timestamp:new Date()},
  {user:"u102",event:"file-upload",timestamp:new Date()},
  {user:"u103",event:"password-change",timestamp:new Date()},
  {user:"u101",event:"failed-login",timestamp:new Date()},
  {user:"u102",event:"logout",timestamp:new Date()}
]);
print("Repeated failed-login attempts by user:");
db.events.aggregate([
  {$match:{event:"failed-login"}},
  {$group:{_id:"$user",attempts:{$sum:1}}},
  {$match:{attempts:{$gte:2}}},
  {$sort:{attempts:-1}}
]);
print("Most frequent event types:");
db.events.aggregate([{$group:{_id:"$event",count:{$sum:1}}},{$sort:{count:-1}}]);
