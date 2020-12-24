const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const app = express()
const cors = require('cors');
const schema = require('./schema.js')
const path = require('path');

// Allow cross-origin
app.use(cors());

// run GraphQL server
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.use(express.static('public'));

// redirct the user back to the React front-end when they hit Root dir
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`GraphQL Server Runninng on port: ${PORT}`));
