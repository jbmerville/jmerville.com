import React, { Component } from 'react';

import ReactGA from 'react-ga';
import { Route } from 'react-router-dom';
import { ProcessEnv } from 'types';

interface GoogleAnalyticsProps {
  location: {
    pathname: string;
    search: string;
  };
}

class GoogleAnalytics extends Component<GoogleAnalyticsProps, {}> {
  componentDidMount() {
    this.logPageChange(this.props.location.pathname, this.props.location.search);
  }

  componentDidUpdate(prevLocation: GoogleAnalyticsProps) {
    const { pathname, search } = this.props.location;
    const isDifferentPathname = pathname !== prevLocation.location.pathname;
    const isDifferentSearch = search !== prevLocation.location.search;
    if (isDifferentPathname || isDifferentSearch) {
      this.logPageChange(pathname, search);
    }
  }

  logPageChange(pathname: string, search = '') {
    const page = pathname + search;
    const { location } = window;
    ReactGA.set({
      page,
      location: `${location.origin}${page}`,
    });
    ReactGA.pageview(page);
  }

  render() {
    return null;
  }
}

const RouteTracker = () => <Route component={GoogleAnalytics} />;

const init = (options?: Object) => {
  const isGAEnabled = process.env.NODE_ENV === 'production';
  if (isGAEnabled) {
    ReactGA.initialize((process.env as ProcessEnv).REACT_APP_TRACKING_ID, options);
  }
  return isGAEnabled;
};

export default {
  GoogleAnalytics,
  RouteTracker,
  init,
};
