// Create and configure the server
// and all of its endpoints 

const express = require("express");

// Create an instance of the Expres system 
const app = express();

const mongoose = require("mongoose");

let databaseUrl = "";
switch (process.env.NODE_ENV?.toLocaleLowerCase()) {
	case "test":
		databaseUrl = "mongodb://localhost:27017/PokemonTeamBuilder-test";
		break;

	case "dev":
	case "development":
		databaseUrl = "mongodb://localhost:27017/PokemonTeamBuilder-dev";
		break;

	case "production":
	case "prod":
		// This should match a variable in the .env or in the deployment platform 
		// so it knows where to find MongoDB Cloud Atlas 
		databaseUrl = process.env.DATABASE_URL;
		break;

	default: 
		console.error("Incorrect environment detected!");
		process.exit();
		// break;
}
// After figuring out the DB URL, 
// connect to the DB using that DB URL 
const { connect } = require("./database.js");
connect(databaseUrl);


app.get("/", (request, response) => {
	response.json({
		message: "Hello, world!"
	});
});

app.get("/databaseHealth", (request, response) => {
	// Data from Mongoose: 
	// https://mongoosejs.com/docs/api/connection.html
	response.json({
		name: mongoose.connection.name, 
		models: mongoose.connection.modelNames(),
		address: mongoose.connection.host, 
		readyState: mongoose.connection.readyState
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