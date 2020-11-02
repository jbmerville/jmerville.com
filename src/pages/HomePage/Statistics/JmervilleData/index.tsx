import React, {
  useEffect,
  useState
} from 'react';

import { ALL_QUERY } from 'api';
import { StyledText } from 'components';
import { useTheme } from 'hooks';
import moment from 'moment';
import {
  Colors,
  repoLinesStats
} from 'values';

import { useQuery } from '@apollo/client';

import RefreshTimer from './RefreshTimer';

const REFRESH_INTERVAL = 60000;

const colorText = (text: string | number, color: Colors): JSX.Element => <span style={{ color, fontWeight: 'bold' }}>{text}</span>;

const JmervilleData = () => {
  const { comment, code, nFiles } = repoLinesStats.TypeScript;
  const { theme } = useTheme();
  const { loading, error, data, refetch } = useQuery(ALL_QUERY, {
    variables: { repository: 'jmerville.com' },
  });
  const [lastRefreshTime, setlastRefreshTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setlastRefreshTime(Date.now());
      refetch();
    }, REFRESH_INTERVAL);
    return () => {
      clearInterval(interval);
    };
  }, []);

  let text = <></>;
  if (data) {
    const { githubStats, traffic } = data;
    const { lastPushedAt, commitCount } = githubStats;
    const { sessionCount, pageViews, activeVisitorCount, toggleCount } = traffic;

    text = (
      <>
        You are among {colorText(activeVisitorCount, Colors.RED)} people visiting the site. The site has received{' '}
        {colorText(pageViews, Colors.YELLOW)} page views across {colorText(sessionCount, Colors.YELLOW)} sessions. The last update for this
        website was {colorText(moment(lastPushedAt).fromNow(), Colors.ORANGE)} and was the{' '}
        {colorText(moment.localeData().ordinal(commitCount), Colors.ORANGE)} commit. The last build of this website contains{' '}
        {colorText(code, Colors.GREEN)} lines of TypeScript code, and {colorText(comment, Colors.GREEN)} comments, across{' '}
        {colorText(nFiles, Colors.GREEN)} files. Dark mode was toggled {colorText(toggleCount, Colors.BLUE)} times.
      </>
    );
  }

  return (
    <StyledText color={theme.text} styleType="PARAGRAPH" isLoading={loading} isError={error ? true : false}>
      {text}
      <RefreshTimer color={theme.secondary} lastRefreshedAt={lastRefreshTime}></RefreshTimer>
    </StyledText>
  );
};

export default JmervilleData;
