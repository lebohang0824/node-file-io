const Visitor = require('../src/Visitor.js');
const load 	  = require('../src/load.js');

describe('Node file IO', () => {

	beforeAll(() => {
		let objLebohang = new Visitor('Lebohang Mokoena', 28, '01-01-2020', '06:00', 'Awesome', 'Katleho Nthebe');
		objSaveLebohang = objLebohang.save();

		objLoadLebohang = JSON.parse(load('Lebohang Mokoena'));
	});

	it('Should return fullname', () => {
		expect(objSaveLebohang.fullname).toBe(objLoadLebohang.fullname);
	});

	it('Should return age', () => {
		expect(objSaveLebohang.age).toBe(objLoadLebohang.age);
	});

	it('Should return date of visit', () => {
		expect(objSaveLebohang.date_of_visit).toBe(objLoadLebohang.date_of_visit);
	});

	it('Should return time of visit', () => {
		expect(objSaveLebohang.time_of_visit).toBe(objLoadLebohang.time_of_visit);
	});

	it('Should return comment', () => {
		expect(objSaveLebohang.comments).toBe(objLoadLebohang.comments);
	});

	it('Should return assisted by', () => {
		expect(objSaveLebohang.assisted).toBe(objLoadLebohang.assisted);
	});

});