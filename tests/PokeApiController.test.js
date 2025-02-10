const supertest = require("supertest");
const { app } = require("../src/server");
const { connect, disconnect } = require("../src/database");
// const request = require("supertest"); // Same thing as above 


beforeAll(async () => {
	try {
		await connect("mongodb://localhost:27017/PokemonTeamBuilder-test");
	} catch (error) {
		console.error(error);
	}
});

afterAll(async () => {
	await disconnect();
});




describe("PokeApi endpoint testing", () => {



	test("Retrieve a correct name from the PokeAPI when sent a valid Pokemon name", async () => {

		let response = await supertest(app).get("/pokeapi/style1/pikachu");
		// let data = await response.json();

		console.log(response.body);
		expect(response.body.name).toBe("pikachu");

	});



});

