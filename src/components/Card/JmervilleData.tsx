import { useQuery } from '@apollo/client';
import { GITHUB_QUERY } from 'api';
import { useTheme } from 'hooks';
import moment from 'moment';
import React from 'react';
import StyledText from '../StyledText';

interface JmervilleDataProps {
  repository: string;
}

const JmervilleData = (props: JmervilleDataProps) => {
  const { repository } = props;
  const { theme } = useTheme();
  const { loading, error, data } = useQuery(GITHUB_QUERY, {
    variables: { repository },
  });

  return (
    <StyledText color={theme.secondary} style="UNDERTEXT" isLoading={loading} isError={error ? true : false}>
      {data ? `Last updated ${moment(data.githubStats.lastPushedAt).fromNow()}` : ''}
    </StyledText>
  );
};

export default JmervilleData;
