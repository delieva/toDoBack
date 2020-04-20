const graphql = require("graphql");

const {
	GraphQLObjectType,
	GraphQLID,
	GraphQLString,
	GraphQLBoolean,
} = graphql;

module.exports = new GraphQLObjectType({
	name: 'item',
	fields: () => ({
		id: { type: GraphQLID },
		text: { type: GraphQLString },
		status: { type: GraphQLBoolean },
	})
});