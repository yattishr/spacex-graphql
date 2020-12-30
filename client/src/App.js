import React, { Component } from 'react';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Launches from './components/Launches';
import Launch from './components/Launch';

import './App.css';


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
})



function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <img src="https://www.logolynx.com/images/logolynx/98/98cc583fc70ca9b9da14fc9f848da582.png" alt="" style={{ width: 500, display: 'block', margin: 'auto' }} />
          <Route exact path="/" component={ Launches } />        
          <Route exact path="/launch/:flight_number" component={ Launch } />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
