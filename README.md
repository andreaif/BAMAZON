# BAMAZON

Database in Workbench

DB: bamazon
table: products
columns:item_id, product_name, price, stock_quantity
![1](https://user-images.githubusercontent.com/44173075/52381813-edf46080-2a40-11e9-8bfb-c2ba2b4a24e7.png)

Code in bamazon.js (github)
![2](https://user-images.githubusercontent.com/44173075/52381834-05cbe480-2a41-11e9-80af-4768b5dc908f.png)

Terminal results
Node bamazonCustomer.js shows all existing Inventory and prompts the first question:
1.    Please enter the Item ID which you would like to purchase – ONLY NUMBERS – if empty, character or an invalid itemID is entered an error message will appear
2.    How many unots would you like to buy? – ONLY NUMBERS -– if empty, character or an invalid itemID is entered an error message will appear
![3](https://user-images.githubusercontent.com/44173075/52381837-09f80200-2a41-11e9-8304-b0d3d9d2759a.png)

![4](https://user-images.githubusercontent.com/44173075/52381838-09f80200-2a41-11e9-8a11-251c41ed49d3.png)

![5](https://user-images.githubusercontent.com/44173075/52381839-09f80200-2a41-11e9-9fcf-c02784d71d0b.png)

![6](https://user-images.githubusercontent.com/44173075/52381840-09f80200-2a41-11e9-8a69-5b9c92c83e82.png)

If quantity required is > than stock_quantity ; then a error message (Insufficient quantity!)

![7](https://user-images.githubusercontent.com/44173075/52381841-09f80200-2a41-11e9-926b-1e53bbd81307.png)

If stock_quantity is sufficient then order is placed and inventory in db will be updated

![8](https://user-images.githubusercontent.com/44173075/52381842-09f80200-2a41-11e9-956b-33539966b8c8.png)

![9](https://user-images.githubusercontent.com/44173075/52381843-09f80200-2a41-11e9-8a07-d566c9f85c51.png)

No more 8153 last two were bought now existing inventory was updated.

![10](https://user-images.githubusercontent.com/44173075/52381844-09f80200-2a41-11e9-9cc6-5523b89a4558.png)

