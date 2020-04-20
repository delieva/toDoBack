const itemType = require('./types');
const graphql = require("graphql");
const GraphQLList = require('graphql').GraphQLList;
const psql = require('./database');
const {
	GraphQLObjectType,
	GraphQLID,
	GraphQLString,
	GraphQLBoolean,
} = graphql;


module.exports = new GraphQLObjectType({
	name: 'RootQueryType',
	type: "Query",
	fields: {
		items: {
			type: new GraphQLList(itemType),
			resolve(parentValue, args) {
				const query = `SELECT * FROM todolist`;
				return psql
					.manyOrNone(query)
					.then(data => data)
					.catch(err => err);
			}
		},
		item: {
			type: new GraphQLList(itemType),
			args: { id: { type: GraphQLID } },
			resolve(parentValue, args) {
				const query = `SELECT * FROM todolist WHERE id=${args.id}`;
				const values = [args.id];
				
				return psql
					.manyOrNone(query, values)
					.then(data => data)
					.catch(err => err);
			}
		},
	}
});