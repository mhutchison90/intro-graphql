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
    {id:'1',name: 'John Doe', email: 'jdoe@gmail.com', age:35},
    {id:'2',name: 'Lucy Doe', email: 'ldoe@gmail.com', age:31},
    {id:'3',name: 'Wendy Doe', email: 'wdoe@gmail.com', age:11}
]

// Customer Type
const CustomerType = new GraphQLObjectType({
    name: 'Customer',
    fields:() => ({
        id:{type:GraphQLString},
        name:{type: GraphQLString},
        email:{type: GraphQLString},
        age:{type: GraphQLInt}
    })
});

// ROOT QUERY
const RootQuery = new GraphQLSchema({
    name:'RootQueryType',
    customer:{
        type: CustomerType
    }
})

module.exports = new GraphQLSchema({

});