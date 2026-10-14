// Task 1: Student Activity Tracking System
db = db.getSiblingDB("bca305p_lab3");
db.students.drop();
db.students.insertMany([
  {name:"Aarav", rollNo:101, courses:["DBMS","Java"], attendance:92, skills:["MongoDB","JavaScript"], recentActivities:[{type:"quiz",score:88,date:new Date()}]},
  {name:"Diya", rollNo:102, courses:["DBMS","Python"], attendance:68, skills:["Python"], recentActivities:[{type:"assignment",score:75,date:new Date()}]},
  {name:"Kabir", rollNo:103, courses:["Java","Web"], attendance:84, skills:["MongoDB","HTML"], recentActivities:[{type:"project",score:95,date:new Date()}]}
]);
print("Students with attendance >= 75:");
db.students.find({attendance:{$gte:75}});
print("Students with MongoDB skill:");
db.students.find({skills:"MongoDB"});
print("Students with quiz score >= 80:");
db.students.find({"recentActivities":{$elemMatch:{type:"quiz",score:{$gte:80}}}});
