import { gql } from '@apollo/client';

export const GITHUB_QUERY = gql`
  query GetGithubStats($repository: String!) {
    githubStats(repository: $repository) {
      commitCount
      lastPushedAt
    }
  }
`;

export const TRAFFIC_QUERY = gql`
  query traffic {
    userCount
    sessionCount
    pageViews
    avgSessionDuration
  }
`;

export const ALL_QUERY = gql`
  query GetGithubStats($repository: String!) {
    githubStats(repository: $repository) {
      commitCount
      lastPushedAt
    }
    traffic {
      activeVisitorCount
      userCount
      sessionCount
      pageViews
      avgSessionDuration
    }
  }
`;
