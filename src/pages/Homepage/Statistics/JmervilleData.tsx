import React from 'react';

import { GITHUB_QUERY } from 'api';
import { StyledText } from 'components';
import { useTheme } from 'hooks';
import moment from 'moment';
import {
  Colors,
  repoLinesStats
} from 'values';

import { useQuery } from '@apollo/client';

const colorText = (text: string | number, color: Colors): JSX.Element => <span style={{ color, fontWeight: 'bold' }}>{text}</span>;

const JmervilleData = () => {
  const { comment, code, nFiles } = repoLinesStats.TypeScript;
  const { theme } = useTheme();
  const { loading, error, data } = useQuery(GITHUB_QUERY, {
    variables: { repository: 'jmerville.com' },
  });

  return (
    <>
      <StyledText
        color={theme.text}
        style="PARAGRAPH"
        isLoading={loading}
        isError={error ? true : false}
        errorMessage="Error loading Github data."
      >
        {data ? (
          <>
            The last update for this website was {colorText(moment(data.githubStats.lastPushedAt).fromNow(), Colors.ORANGE)} and was the{' '}
            {colorText(moment.localeData().ordinal(data.githubStats.commitCount), Colors.ORANGE)} commits.
          </>
        ) : (
          ''
        )}
      </StyledText>
      <StyledText color={theme.text} style="PARAGRAPH">
        The last build of this website contains {colorText(code, Colors.GREEN)} lines of TypeScript code, and{' '}
        {colorText(comment, Colors.GREEN)} comments, across {colorText(nFiles, Colors.GREEN)} files.
      </StyledText>
    </>
  );
};

export default JmervilleData;
