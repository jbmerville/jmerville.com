import React from 'react';
import ReactDOM from 'react-dom';

import HomePage from 'pages/Homepage';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import { client } from 'utils/Appolo';

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

ReactDOM.render(<App />, document.querySelector('#root'));
