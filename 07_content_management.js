// Task 7: Content Management System
db = db.getSiblingDB("bca305p_lab3");
db.articles.drop();
db.articles.insertMany([
  {title:"MongoDB Introduction",author:"Aarav",category:"Technology",tags:["database"],status:"published",publishedAt:new Date()},
  {title:"Draft: Indexes",author:"Diya",category:"Technology",tags:["mongodb","indexes"],status:"draft"},
  {title:"Study Tips",author:"Kabir",category:"Education",tags:["study"],status:"published",publishedAt:new Date()}
]);
print("Published articles:");
db.articles.find({status:"published"});
print("Unpublished/draft articles:");
db.articles.find({status:{$ne:"published"}});
print("Published Technology articles tagged database:");
db.articles.find({status:"published",category:"Technology",tags:"database"});
