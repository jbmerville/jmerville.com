import { ProcessEnv } from 'types';

import {
  ApolloClient,
  createHttpLink,
  gql,
  InMemoryCache
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const GITHUB_GRAPHQL_ENDPOINT = 'https://api.github.com/graphql';
const GITHUB_QUERY = gql`
  query {
    repository(owner: "jbmerville", name: "jmerville.com") {
      object(expression: "master") {
        ... on Commit {
          history {
            totalCount
          }
        }
      }
      deployments(environments: "github-pages", last: 1) {
        nodes {
          updatedAt
        }
      }
    }
  }
`;

const httpLink = createHttpLink({
  uri: GITHUB_GRAPHQL_ENDPOINT,
});

const authLink = setContext(() => {
  const token = (process.env as ProcessEnv).REACT_APP_GITHUB_TOKEN;
  return {
    headers: {
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export { client, GITHUB_QUERY };
