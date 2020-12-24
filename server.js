const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const app = express()
const cors = require('cors');
const schema = require('./schema.js')


// Allow cross-origin
app.use(cors());

// run GraphQL server
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`GraphQL Server Runninng on port...${PORT}`));
