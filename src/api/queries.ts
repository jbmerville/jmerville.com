import { gql } from '@apollo/client';

export const GITHUB_QUERY = gql`
  query GetGithubStats($repository: String!) {
    githubStats(repository: $repository) {
      commitCount
      lastPushedAt
    }
  }
`;
