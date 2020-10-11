import React from 'react';
import ReactDOM from 'react-dom';

import { client } from 'api';
import HomePage from 'pages/HomePage';
import NotFound from 'pages/NotFound';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import { ApolloProvider } from '@apollo/client';

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
