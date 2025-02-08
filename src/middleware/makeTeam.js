const { TeamModel } = require("../models/TeamModel");

async function makeTeam (request, response, next){
	if (!request.customData?.retrievedPokemon){
		return next(new Error("No data available to make a team with."));
	}

	let newTeamData = {
		pokemon: []
	}

	request.customData.retrievedPokemon.forEach(pokemon => {
		newTeamData.pokemon.push({
			name: pokemon.name,
			sprite: pokemon.sprites.front_default,
			types: pokemon.types.map(pokeType => pokeType.type.name),
			level: Math.floor(Math.random() * 100) + 1
		})
	});

	let newTeam = await TeamModel.create(newTeamData);

	request.customData.newTeam = newTeam;

	next();
}

module.exports = {
	makeTeam
}