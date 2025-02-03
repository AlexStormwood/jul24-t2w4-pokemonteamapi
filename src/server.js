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





const {PokeApiRouter} = require("./controllers/PokeApiController.js");
app.use("/pokeapi", PokeApiRouter);





// Wildcard * means "match any route"
// Put this at the end of your route declarations
// to catch anything that does not match an earlier route
app.get("*", (request, response) => {
	console.log("User tried to visit " + request.path);
	response.json({
		message:"Page not found.",
		attemptedPath: request.path
	});
});


// Error handling catcher 
// applies to EVERY route in the entire server
app.use((error, request, response, next) => {
	console.log("Error occured in the server.");
	console.log(JSON.stringify(error));
	response.json({
		// errors: request.body?.errors,
		message: error.message
	});
});


module.exports = {
	app
}