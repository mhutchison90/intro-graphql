const express  = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema.js')

const app = express();

app.use('/graphql', expressGraphQL({
    schema:schema,
    graphiql:true
}));

const Port = 4000

app.listen(Port, () =>{
    console.log(`Server is running on port ${Port}...`)
})
