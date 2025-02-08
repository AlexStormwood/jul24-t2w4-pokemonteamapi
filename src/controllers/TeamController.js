const express = require("express");
const { TeamModel } = require("../models/TeamModel");
const { getPokemonData } = require("../middleware/getPokemonData");
const router = express.Router();

//							  teamid is a MongoDB document/object ID
// http://localhost:5678/team/one/-19038ryth2iwgvbn;saldvncjkasoivduwgsho
router.get(
	"/one/:teamid",  // route path 
	async (request, response) => { // route final callback 
		
		response.json({
			
		});
	}
);

// http://localhost:5678/team/all
router.get(
	"/all",  // route path 
	async (request, response) => { // route final callback 
		
		let teamData = await TeamModel.find();

		response.json({
			data: teamData
		});
	}
);

// http://localhost:5678/team/
/*
{
	userId: "lashjcalfkjanclakc",
	pokemon: [
		"pikachu",
		"squirtle",
		"mewtwo"
	]
}
*/
router.post(
	"/",  // route path 
	// DO NOT WANT validatePokemonNames // only if we have some local copy of pokemon names

	getPokemonData, // fetch data from pokeapi and throw errors on invalid pokemon 
	// makeTeam // turn provided data and fetched data into a Team document
	// 
	async (request, response) => { // route final callback 
		console.log(request.customData.retrievedPokemon.length);

		let newTeam = await TeamModel.create(request.body.teamData);

		response.json({
			// requestBody: request.body,
			team: newTeam
		});
	}
);

// http://localhost:5678/team/0813uropqieawknfgoadljkvhga
router.patch(
	"/:teamid",  // route path 
	async (request, response) => { // route final callback 
		
		response.json({
			
		});
	}
);


// http://localhost:5678/team/0813uropqieawknfgoadljkvhga
router.delete(
	"/:teamid",  // route path 
	async (request, response) => { // route final callback 
		
		response.json({
			
		});
	}
);


module.exports = {
	TeamRouter: router
}