import React, { Component } from 'react';

import ReactGA from 'react-ga';
import { Route } from 'react-router-dom';
import { ProcessEnv } from 'types';

interface GoogleAnalyticsProps {
  location: {
    pathname: string;
    search: string;
  };
  options: any;
}

class GoogleAnalytics extends Component<GoogleAnalyticsProps, {}> {
  componentDidMount() {
    this.logPageChange(this.props.location.pathname, this.props.location.search);
  }

  componentDidUpdate(prevProps: GoogleAnalyticsProps) {
    const {
      location: { pathname, search },
    } = this.props;
    const isDifferentPathname = pathname !== prevProps.location.pathname;
    const isDifferentSearch = search !== prevProps.location.search;

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
      ...this.props.options,
    });
    ReactGA.pageview(page);
  }

  render() {
    return null;
  }
}

const RouteTracker = () => <Route component={GoogleAnalytics} />;

const init = (options = {}) => {
  const isGAEnabled = process.env.NODE_ENV === 'production';

  if (isGAEnabled) {
    ReactGA.initialize((process.env as ProcessEnv).TRACKING_ID);
  }

  return isGAEnabled;
};

export default {
  GoogleAnalytics,
  RouteTracker,
  init,
};
