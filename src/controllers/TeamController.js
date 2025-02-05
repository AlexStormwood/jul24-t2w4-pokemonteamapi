const express = require("express");
const { TeamModel } = require("../models/TeamModel");
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
router.post(
	"/",  // route path 
	async (request, response) => { // route final callback 
		

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