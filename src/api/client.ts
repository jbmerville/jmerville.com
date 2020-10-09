import {
  BASE_URL,
  ENDPOINTS
} from 'values/Endpoints';

import {
  ApolloClient,
  InMemoryCache
} from '@apollo/client';

const client = new ApolloClient({
  uri: BASE_URL + ENDPOINTS.GRAPQL,
  cache: new InMemoryCache(),
});

export default client;
