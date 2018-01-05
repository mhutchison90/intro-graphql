const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull

} = require('graphql');

// Hardcoded Data
const customers = [
    { id: '1', name: 'John Doe', email: 'jdoe@gmail.com', age: 35 },
    { id: '2', name: 'Lucy Doe', email: 'ldoe@gmail.com', age: 31 },
    { id: '3', name: 'Wendy Doe', email: 'wdoe@gmail.com', age: 11 }
]

// Customer Type
const CustomerType = new GraphQLObjectType({
    name: 'Customer',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        age: { type: GraphQLInt }
    })
});
// ROOT QUERY
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        customer: {
            type: CustomerType,
            args: {
                id: { type:GraphQLString }
            },
            resolve(parentValue, args) {
                for (let i = 0; customers.length; i++) {
                    if (customers[i].id == args.id) {
                        return customers[i];
                    }
                }
            }
        },
        customers:{
            type: new GraphQLList(CustomerType),
            resolve(parentValue,args){
                return customers;
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
});