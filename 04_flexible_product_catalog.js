// Task 4: Flexible Product Catalog
db = db.getSiblingDB("bca305p_lab3");
db.catalog.drop();
db.catalog.insertMany([
  {name:"Laptop A",category:"laptop",price:65000,ramGB:16,storageGB:512,processor:"i5"},
  {name:"Mobile B",category:"mobile",price:25000,ramGB:8,storageGB:128,batteryMah:5000},
  {name:"Camera C",category:"camera",price:48000,megapixels:24,sensor:"APS-C"}
]);
print("Laptops with at least 16 GB RAM:");
db.catalog.find({category:"laptop",ramGB:{$gte:16}});
print("Mobiles with battery >= 4500 mAh:");
db.catalog.find({category:"mobile",batteryMah:{$gte:4500}});
print("Cameras with at least 20 megapixels:");
db.catalog.find({category:"camera",megapixels:{$gte:20}});
