// Task 5: E-Commerce Order Management
db = db.getSiblingDB("bca305p_lab3");
db.customers.drop(); db.products.drop(); db.orders.drop();
db.customers.insertMany([{_id:"C101",name:"Aarav"},{_id:"C102",name:"Diya"}]);
db.products.insertMany([{_id:"P1",name:"Keyboard",price:900},{_id:"P2",name:"Mouse",price:500},{_id:"P3",name:"Monitor",price:8500}]);
db.orders.insertMany([
  {customerId:"C101",items:[{productId:"P1",quantity:1,price:900},{productId:"P2",quantity:2,price:500}],date:new Date()},
  {customerId:"C101",items:[{productId:"P3",quantity:1,price:8500}],date:new Date()},
  {customerId:"C102",items:[{productId:"P2",quantity:1,price:500}],date:new Date()}
]);
print("Complete purchase history for customer C101:");
db.orders.find({customerId:"C101"});
print("Order totals:");
db.orders.aggregate([
  {$unwind:"$items"},
  {$group:{_id:"$_id",customerId:{$first:"$customerId"},date:{$first:"$date"},total:{$sum:{$multiply:["$items.quantity","$items.price"]}}}},
  {$sort:{date:-1}}
]);
