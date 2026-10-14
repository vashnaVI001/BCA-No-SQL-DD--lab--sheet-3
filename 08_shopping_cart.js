// Task 8: Shopping Cart with embedded documents
db = db.getSiblingDB("bca305p_lab3");
db.carts.drop();
db.carts.insertOne({_id:"CART1",userId:"U101",items:[{productId:"P1",name:"Keyboard",price:900,quantity:1},{productId:"P2",name:"Mouse",price:500,quantity:2}]});
print("Initial cart:");
db.carts.findOne({_id:"CART1"});
// Add a product (or increase quantity if it already exists)
db.carts.updateOne({_id:"CART1", "items.productId":"P1"}, {$inc:{"items.$.quantity":1}});
db.carts.updateOne({_id:"CART1", "items.productId":{$ne:"P3"}}, {$push:{items:{productId:"P3",name:"USB Cable",price:250,quantity:1}}});
print("After adding items:");
db.carts.findOne({_id:"CART1"});
// Change quantity of Mouse
db.carts.updateOne({_id:"CART1","items.productId":"P2"},{$set:{"items.$.quantity":3}});
// Remove USB Cable
db.carts.updateOne({_id:"CART1"},{$pull:{items:{productId:"P3"}}});
print("Cart total:");
db.carts.aggregate([{$match:{_id:"CART1"}},{$unwind:"$items"},{$group:{_id:"$_id",total:{$sum:{$multiply:["$items.price","$items.quantity"]}}}}]);
