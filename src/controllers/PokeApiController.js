const express = require("express");

const router = express.Router();


function checkForCoolPokemon(request, response, next){
	let allowedPokemon = [
		"pikachu",
		"squirtle",
		"snorlax",
		"garchomp",
		"dragonite"
	];

	// if (request.params.name.length > 29){
	// 	next()
	// } else {
	// 	next(new Error("Value too short!"));
	// }

	if (allowedPokemon.includes(request.params.name)){
		next();
	} else {
		next(new Error("Invalid Pokemon name requested."));
	}

}

// http://localhost:5678/pokeapi/style1/pikachu
// http://localhost:5678/pokeapi/style1/alex
router.get(
	"/style1/:name",  // route path 
	checkForCoolPokemon, // middleware chain 
	async (request, response) => { // route final callback 
		let pokeApiResponse = await fetch("https://pokeapi.co/api/v2/pokemon/" + request.params.name);
		let pokeApiData = await pokeApiResponse.json();

		response.json({
			name: pokeApiData.name
		});
	}
);

module.exports = {
	PokeApiRouter: router
}