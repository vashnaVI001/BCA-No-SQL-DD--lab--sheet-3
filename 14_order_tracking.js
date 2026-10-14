// Task 14: Real-Time Order Tracking
db = db.getSiblingDB("bca305p_lab3");
db.trackedOrders.drop();
db.trackedOrders.insertMany([
  {_id:"ORD101",customerId:"C101",currentStatus:"Shipped",statusHistory:[
    {status:"Placed",at:new Date("2026-10-10T10:00:00Z")},
    {status:"Confirmed",at:new Date("2026-10-10T10:30:00Z")},
    {status:"Shipped",at:new Date("2026-10-12T08:00:00Z")}
  ]},
  {_id:"ORD102",customerId:"C102",currentStatus:"Delivered",statusHistory:[
    {status:"Placed",at:new Date("2026-10-08T10:00:00Z")},
    {status:"Confirmed",at:new Date("2026-10-08T11:00:00Z")},
    {status:"Shipped",at:new Date("2026-10-09T09:00:00Z")},
    {status:"Delivered",at:new Date("2026-10-11T15:00:00Z")}
  ]}
]);
print("Current status for ORD101:");
db.trackedOrders.findOne({_id:"ORD101"},{currentStatus:1,statusHistory:1});
print("All orders currently shipped:");
db.trackedOrders.find({currentStatus:"Shipped"});
// Example status transition:
db.trackedOrders.updateOne({_id:"ORD101"},{$set:{currentStatus:"Delivered"},$push:{statusHistory:{status:"Delivered",at:new Date()}}});
