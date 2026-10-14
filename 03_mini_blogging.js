// Task 3: Mini Blogging Platform
db = db.getSiblingDB("bca305p_lab3");
db.blogs.drop();
db.blogs.insertMany([
  {title:"Learning MongoDB",author:"Aarav",category:"Technology",tags:["mongodb","database"],comments:[{user:"Diya",text:"Useful"}],published:true,publishedAt:new Date()},
  {title:"Healthy Study Habits",author:"Diya",category:"Education",tags:["study","productivity"],comments:[],published:true,publishedAt:new Date()},
  {title:"NoSQL Basics",author:"Kabir",category:"Technology",tags:["nosql","database"],comments:[{user:"Aarav",text:"Great intro"}],published:false}
]);
print("Technology blogs:");
db.blogs.find({category:"Technology"});
print("Blogs with database tag:");
db.blogs.find({tags:"database"});
print("Technology blogs tagged database:");
db.blogs.find({category:"Technology",tags:"database"});
print("Blogs matching either mongodb or nosql tag:");
db.blogs.find({tags:{$in:["mongodb","nosql"]}});
