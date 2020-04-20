const graphql = require("graphql");
const GraphQLList = require('graphql').GraphQLList;
const itemType = require('./types');
const psql = require('./database');
const {
	GraphQLObjectType,
	GraphQLID,
	GraphQLString,
	GraphQLBoolean,
} = graphql;

module.exports = new GraphQLObjectType({
	name: "RootMutationType",
	type: "Mutation",
	fields: {
		addItem: {
			type: new GraphQLList(itemType),
			args: {
				id: { type: GraphQLID },
				text: { type: GraphQLString },
				status: { type: GraphQLBoolean }
			},
			resolve(parentValue, args) {
				const query = `INSERT INTO todolist(text, status) VALUES ($1, $2); SELECT * FROM todolist`;
				const values = [
					args.text,
					args.status,
				];
				return psql
					.manyOrNone(query, values)
					.then(data => data)
					.catch(err => err);
			}
		},
		deleteItem: {
			type: new GraphQLList(itemType),
			args: {
				id: { type: GraphQLID },
				text: { type: GraphQLString },
				status: { type: GraphQLBoolean },
			},
			resolve(parentValue, args) {
				const query = `DELETE FROM todolist WHERE id=${args.id}; SELECT * FROM todolist`;
				const values = [
					args.id,
				];
				return psql
					.manyOrNone(query, values)
					.then(data => data)
					.catch(err => err);
			}
		},
		editStatus: {
			type: new GraphQLList(itemType),
			args: {
				id: { type: GraphQLID },
			},
			resolve(parentValue, args) {
				const query = `UPDATE toDoList SET status = not status WHERE id=${args.id}; SELECT * FROM todolist WHERE id=${args.id}`;
				const values = [
					args.id,
				];
				return psql
					.manyOrNone(query, values)
					.then(data => data)
					.catch(err => err);
			}
		}
	}
});