import React from 'react';
import ReactDOM from 'react-dom';

import { client } from 'api';
import {
  HomePage,
  NotFound
} from 'pages';
import ReactGA from 'react-ga';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import { ApolloProvider } from '@apollo/client';

ReactGA.initialize('UA-175122635-1');

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

ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(<App />, document.getElementById('root'));
