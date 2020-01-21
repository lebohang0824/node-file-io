const fs = require('fs');

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
		let name = this.fullname.replace(' ', '_').toLowerCase();

		let err = fs.writeFileSync(__dirname+ `/visitor_${name}.json`, JSON.stringify(this));

		if (err) throw err;
		
		return this;
	}

}

module.exports = Visitor;