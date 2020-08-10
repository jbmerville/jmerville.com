import React from 'react';
import ReactDOM from 'react-dom';

import HomePage from 'pages/Homepage';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import GA from 'utils/GoogleAnalytics';

export const App = () => {
  return (
    <BrowserRouter>
      {GA.init() && <GA.RouteTracker />}
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
