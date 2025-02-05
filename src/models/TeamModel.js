const mongoose = require("mongoose");

const PokemonSchema = new mongoose.Schema({
	name: String, 
	sprite: String,
	types: {
		type: [String],
		validate:  [limitArrayLength(2), "Cannot have more than 2 types per Pokemon."]
	},
	level: {
		type: Number,
		min: 1,
		max: 100
	},
});


// Make a schema with data properties
const TeamSchema = new mongoose.Schema({
	pokemon: {
		type: [PokemonSchema],
		validate: [limitArrayLength(6), "Cannot have more than 6 Pokemon per team."]
	},
	trainer: {
		type: mongoose.Types.ObjectId, 
		ref: 'User'
	}
});

function limitArrayLength(limit){
	return function (value) {
		return value.length <= limit;
	}
}


// Make a model that uses the schema 
//								Name in DB, schema to use for its validation rules 
const TeamModel = mongoose.model('Team', TeamSchema);

// Export the model 
module.exports = {
	TeamModel
}