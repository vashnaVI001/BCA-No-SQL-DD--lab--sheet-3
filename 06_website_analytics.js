// Task 6: Website Analytics
db = db.getSiblingDB("bca305p_lab3");
db.pageVisits.drop();
db.pageVisits.insertMany([
  {page:"/home",userId:"U1",device:"mobile",browser:"Chrome",location:"Delhi",timestamp:new Date()},
  {page:"/products",userId:"U2",device:"desktop",browser:"Firefox",location:"Shamli",timestamp:new Date()},
  {page:"/home",userId:"U3",device:"mobile",browser:"Chrome",location:"Dehradun",timestamp:new Date()},
  {page:"/cart",userId:"U1",device:"tablet",browser:"Safari",location:"Delhi",timestamp:new Date()},
  {page:"/home",userId:"U2",device:"desktop",browser:"Chrome",location:"Shamli",timestamp:new Date()}
]);
print("Most visited pages:");
db.pageVisits.aggregate([{$group:{_id:"$page",visits:{$sum:1}}},{$sort:{visits:-1}}]);
print("Commonly used devices:");
db.pageVisits.aggregate([{$group:{_id:"$device",visits:{$sum:1}}},{$sort:{visits:-1}}]);
