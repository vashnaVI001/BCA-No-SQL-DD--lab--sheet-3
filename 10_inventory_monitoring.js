// Task 10: Inventory Monitoring
db = db.getSiblingDB("bca305p_lab3");
db.inventory.drop();
db.inventory.insertMany([
  {product:"Keyboard",stock:20,minStock:5,supplier:"Supplier A",restockDate:new Date("2026-10-20")},
  {product:"Mouse",stock:3,minStock:10,supplier:"Supplier B",restockDate:new Date("2026-10-15")},
  {product:"Monitor",stock:8,minStock:8,supplier:"Supplier C",restockDate:new Date("2026-10-18")}
]);
print("Items requiring immediate restocking:");
db.inventory.find({$expr:{$lte:["$stock","$minStock"]}});
