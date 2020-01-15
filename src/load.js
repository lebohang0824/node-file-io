const fs = require('fs');

const load = async fullname => {
	let file = fullname.replace(' ', '_').toLowerCase();

	await fs.readFile(`visitor_${file}.json`, (err, data) => {
		if (err) throw err;
		console.log(data.toString());
	});
}

module.exports = load;

// dionmabuza25@gmail.com