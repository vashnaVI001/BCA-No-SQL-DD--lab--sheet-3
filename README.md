# BCA305P-AS02 — NoSQL Database Design Lab Sheet 3

This repository contains MongoDB (`mongosh`) solutions for the 15 tasks listed in the supplied lab sheet.

## Requirements
- MongoDB Community Server or MongoDB Atlas
- `mongosh`
- For Task 11 (transactions), use a **replica set** or a sharded cluster. Transactions do not work on a standalone MongoDB server.

## Run
1. Start MongoDB and open `mongosh`.
2. From this folder, run scripts in order:
   ```javascript
   load("01_student_activity.js")
   load("02_event_logging.js")
   // ... continue through 15_news_database.js
   ```
   Alternatively, paste each script into `mongosh`.
3. Scripts use sample data and are intended for learning. Re-running them may add duplicate sample records unless the script clears its collection first.

## Tasks
1. Student Activity Tracking
2. Event Logging
3. Mini Blogging Platform
4. Flexible Product Catalog
5. E-Commerce Order Management
6. Website Analytics
7. Content Management System
8. Shopping Cart
9. Product Reviews and Ratings
10. Inventory Monitoring
11. Bank Wallet Transfer (transaction)
12. User Notifications
13. Course Learning Platform
14. Real-Time Order Tracking
15. Flexible News Database
