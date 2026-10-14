// Task 11: Bank Wallet Transfer using MongoDB transactions
// IMPORTANT: Run on a replica set or sharded cluster, not standalone MongoDB.
db = db.getSiblingDB("bca305p_lab3");
db.wallets.drop();
db.wallets.insertMany([{_id:"U101",balance:5000},{_id:"U102",balance:2000}]);

const session = db.getMongo().startSession();
const sdb = session.getDatabase("bca305p_lab3");
try {
  session.startTransaction();
  const amount = 750;
  const debit = sdb.wallets.updateOne({_id:"U101",balance:{$gte:amount}},{$inc:{balance:-amount}});
  if (debit.matchedCount !== 1) throw new Error("Sender not found or insufficient balance");
  const credit = sdb.wallets.updateOne({_id:"U102"},{$inc:{balance:amount}});
  if (credit.matchedCount !== 1) throw new Error("Recipient not found");
  session.commitTransaction();
  print("Transfer completed.");
} catch (e) {
  session.abortTransaction();
  print("Transfer failed; transaction aborted: " + e.message);
} finally {
  session.endSession();
}
print("Wallet balances:");
db.wallets.find();
