// Task 9: Product Review and Rating System
db = db.getSiblingDB("bca305p_lab3");
db.reviews.drop();
db.reviews.insertMany([
  {productId:"P1",customer:"U1",rating:5,review:"Excellent"},
  {productId:"P1",customer:"U2",rating:4,review:"Good value"},
  {productId:"P2",customer:"U3",rating:3,review:"Average"},
  {productId:"P2",customer:"U4",rating:4,review:"Works well"}
]);
print("Average rating and review count per product:");
db.reviews.aggregate([{$group:{_id:"$productId",averageRating:{$avg:"$rating"},reviewCount:{$sum:1}}},{$sort:{_id:1}}]);
