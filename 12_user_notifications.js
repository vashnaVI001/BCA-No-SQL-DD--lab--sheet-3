// Task 12: User Notification System
db = db.getSiblingDB("bca305p_lab3");
db.notifications.drop();
db.notifications.insertMany([
  {userId:"U101",type:"message",text:"New message",read:false,createdAt:new Date()},
  {userId:"U101",type:"order-update",text:"Order shipped",read:false,createdAt:new Date()},
  {userId:"U102",type:"system-alert",text:"Maintenance tonight",read:true,createdAt:new Date()}
]);
print("Unread notifications for U101:");
db.notifications.find({userId:"U101",read:false});
db.notifications.updateMany({userId:"U101",read:false},{$set:{read:true,readAt:new Date()}});
print("After marking as read:");
db.notifications.find({userId:"U101"});
