// install npm install /install/inquirer/mysql
//All dependencies
var inquirer = require('inquirer');
var mysql = require('mysql');

// MySQL connection parameters
var connection = mysql.createConnection({
	host: 'localhost',
	port: 8889, //for macs
	user: 'root',
	password: 'root',
	database: 'bamazon'
});

// function to only enter # when prompt a question
function validateNum(value) {
	var integer = Number.isInteger(parseFloat(value));
	var sign = Math.sign(value);

	if (integer && (sign === 1)) {
		return true;
	} else {//if not
		return 'Please enter a whole non-zero number.';
	}
}

// purchase will prompt the user for the item/quantity they would like to purchase
function Purchase() {
	inquirer.prompt([
		{
			type: 'input',
			name: 'item_id',
			message: 'Please enter the Item ID which you would like to purchase.',
			validate: validateNum,
			filter: Number
		},
		{
			type: 'input',
			name: 'quantity',
			message: 'How many units would you like to buy?',
			validate: validateNum,
			filter: Number
		}

	]).then(function(input) {
		
		var item = input.item_id;
		var quantity = input.quantity;

		// Query  - Does the ItemID exist?
		var queryStr = 'SELECT * FROM products WHERE ?';

		connection.query(queryStr, {item_id: item}, function(err, data) {
			if (err) throw err;
			if (data.length === 0) {// Error if the Item ID doesn't exist
				console.log('ERROR: Invalid Item ID. Please select a valid Item ID.');
				Inventory();
			} 
			else {
				//item and quantity in stock
				var DB = data[0];
				if (quantity <= DB.stock_quantity) {
					console.log('Order placed!');

					// Construct the updating query string
					var updateDB = 'UPDATE products SET stock_quantity = ' + (DB.stock_quantity - quantity) + ' WHERE item_id = ' + item;

					// Update the inventory
					connection.query(updateDB, function(err, data) {
						if (err) throw err;

						console.log('Your oder has been placed! Your total is $' + DB.price * quantity);
						console.log('Thank you for shopping with us!');
						console.log("\n---------------------------------------------------------------------\n");

						// End the database connection
						connection.end();
					})
				} else {
					console.log('Insufficient quantity!');
					console.log('Please modify your order.');
					console.log("\n---------------------------------------------------------------------\n");

					Inventory();
				}
			}
		})
	})
}

// displayInventory will retrieve the current inventory from the database and output it to the console
function Inventory() {
	// Construct the db query string
	queryStr = 'SELECT * FROM products';
	connection.query(queryStr, function(err, data) {
		if (err) throw err;

		console.log('Existing Inventory: ');
		console.log('...................\n');

		var strOut = '';
		for (var i = 0; i < data.length; i++) {
			strOut = '';
			strOut += 'Item ID: ' + data[i].item_id + '  //  ';
			strOut += 'Product Name: ' + data[i].product_name + '  //  ';
			strOut += 'Department: ' + data[i].department_name + '  //  ';
			strOut += 'Price: $' + data[i].price + '\n';

			console.log(strOut);
		}
	  	Purchase();
	})
}

function runBamazon() {
	Inventory();
}

runBamazon();