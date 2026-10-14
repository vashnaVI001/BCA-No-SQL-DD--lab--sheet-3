// Task 15: Flexible News Database
db = db.getSiblingDB("bca305p_lab3");
db.news.drop();
db.news.insertMany([
  {title:"City Opens New Library",author:"Reporter A",location:"Shamli",category:"Local",tags:["education","city"],images:["library.jpg"],sources:["City Council"],publishedAt:new Date()},
  {title:"Technology Update",category:"Technology",tags:["AI","software"],sources:["Tech Desk"]},
  {title:"Sports Results",author:"Reporter B",category:"Sports",location:"Delhi",tags:["cricket"],publishedAt:new Date()}
]);
print("Search articles by category:");
db.news.find({category:"Technology"});
print("Search by tag, even when optional fields vary:");
db.news.find({tags:"education"});
print("Articles with a location field:");
db.news.find({location:{$exists:true}});
print("Articles that have either author or source information:");
db.news.find({$or:[{author:{$exists:true}},{sources:{$exists:true}}]});
