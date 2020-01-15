const fs = require('fs');
const load = require('./load');

class Visitor {

	constructor(fullname, age, date_of_visit, time_of_visit, comments, assisted) {
		this.fullname 		= fullname;
		this.age 			= age;
		this.date_of_visit 	= date_of_visit;
		this.time_of_visit 	= time_of_visit;
		this.comments 		= comments;
		this.assisted 		= assisted;
	}

	save() {		
		let file = this.fullname.replace(' ', '_').toLowerCase();
		fs.writeFile(`visitor_${file}.json`, JSON.stringify(this), err => {
			if (err) throw err;
		});
	}

}

module.exports = Visitor;