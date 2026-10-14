// Task 13: Course Learning Platform
db = db.getSiblingDB("bca305p_lab3");
db.learningProgress.drop();
db.learningProgress.insertMany([
  {student:"Aarav",course:"MongoDB",instructor:"Ms Sharma",modules:8,completedModules:7,progress:87.5,completed:false},
  {student:"Diya",course:"Python",instructor:"Mr Verma",modules:10,completedModules:10,progress:100,completed:true},
  {student:"Kabir",course:"MongoDB",instructor:"Ms Sharma",modules:8,completedModules:3,progress:37.5,completed:false}
]);
print("Students with progress >= 75%:");
db.learningProgress.find({progress:{$gte:75}});
print("Students who completed a course:");
db.learningProgress.find({completed:true});
print("MongoDB students with progress below 50%:");
db.learningProgress.find({course:"MongoDB",progress:{$lt:50}});
