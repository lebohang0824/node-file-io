const fs = require('fs');

const load = fullname => {
	
	let name = fullname.replace(' ', '_').toLowerCase();

	let data = fs.readFileSync(__dirname+ `/visitor_${name}.json`, 'utf8');

	return data;
}	

module.exports = load;