const cors = require('cors');
const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema');
const GraphQLServer = express().use('*', cors());


GraphQLServer.use('/graphql', expressGraphQL({
	schema,
	graphiql: true
}));
GraphQLServer.listen(4000, () => {
	console.log('Server is listening on port 4000')
});
