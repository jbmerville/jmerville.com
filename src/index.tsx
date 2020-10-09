import React from 'react';
import ReactDOM from 'react-dom';

import { client } from 'api';
import HomePage from 'pages/Homepage';
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
          <Route path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
