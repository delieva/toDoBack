const pgPromise = require('pg-promise');

//your db credentials
const config = {
	host: 'localhost',
	port: 5432,
	database: 'postgres', //to fill up
	user: 'your_user', //to fill up
	password: 'your_password' //to fill up
};

const pgp = pgPromise({});
module.exports = pgp(config);
