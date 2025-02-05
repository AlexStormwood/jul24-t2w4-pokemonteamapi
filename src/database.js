const mongoose = require("mongoose");

// Connect to the database 
async function connect(databaseURL){
	console.log("Database connecting to " + databaseURL);
	await mongoose.connect(databaseURL);
	console.log("Database connected!");
}

// Disconnect to the database 
async function disconnect(){
	await mongoose.connection.close();
}

// Export the connect and disconnect functions 
module.exports = {
	connect, disconnect
}