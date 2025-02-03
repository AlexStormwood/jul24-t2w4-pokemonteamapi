// Create and configure the server
// and all of its endpoints 

const express = require("express");

// Create an instance of the Expres system 
const app = express();

app.get("/", (request, response) => {
	response.json({
		message: "Hello, world!"
	});
});


module.exports = {
	app
}