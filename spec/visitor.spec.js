const Visitor = require('../src/Visitor.js');
const load 	  = require('../src/load.js');

describe('Node file IO', () => {


	it('should return an object', () => {
		let katleho = new Visitor('Katleho Nthebe', 28, '01-01-2020', '06:00', 'Awesome', 'Lebohang Mokoena');

		let strKatleho = '{"fullname":"Katleho Nthebe","age":28,"date_of_visit":"01-01-2020","time_of_visit":"06:00","comments":"Awesome","assisted":"Lebohang Mokoena"}';
		expect(JSON.stringify(katleho)).toBe(strKatleho);	
	});

});