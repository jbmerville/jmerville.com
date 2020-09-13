import React from 'react';

import Br from 'components/Br';
import moment from 'moment';
import { Styles } from 'types';
import { GITHUB_QUERY } from 'utils/Appolo';
import {
  Colors,
  FontSize,
  MaxWidth
} from 'values';

import { useQuery } from '@apollo/client';

const getColoredText = (text: string | number, color: Colors): JSX.Element => <span style={{ color, fontWeight: 'bold' }}>{text}</span>;

interface DataGithub {
  loading?: any;
  error?: any;
  data?: {
    repository: any;
  };
}

const GetGithubStats = (): JSX.Element => {
  const { loading, error, data }: DataGithub = useQuery(GITHUB_QUERY);
  if (loading) return getColoredText('Loading...', Colors.ORANGE);
  let commitCount: number;
  let howLongAgoWasLastBuild: number;
  try {
    if (error) throw error;
    const { repository } = data!;
    commitCount = repository.object.history.totalCount;
    const lastBuildUpdateDate = moment(repository.deployments.nodes[0].updatedAt);
    const currentDate = moment();
    howLongAgoWasLastBuild = currentDate.diff(lastBuildUpdateDate, 'd');
  } catch (err) {
    return getColoredText('Error loading Github statistics :(', Colors.RED);
  }
  return (
    <>
      The last build of this site was {getColoredText(howLongAgoWasLastBuild, Colors.GREEN)} days ago and the master branch has{' '}
      {getColoredText(commitCount, Colors.GREEN)} commits.
    </>
  );
};

const Statistics = () => {
  const styles: Styles = {
    outerContainer: {
      overflow: 'hidden',
      position: 'relative',
      height: '400px',
      background: Colors.GRAY_LIGHT,
    },
    innerContainer: {
      position: 'relative',
      maxWidth: MaxWidth,
      height: '100%',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
    },
    textContainer: {
      fontSize: FontSize.M,
      lineHeight: FontSize.XL,
    },
    headline: {
      textTransform: 'uppercase',
      fontWeight: 'bold',
      fontSize: FontSize.XXL,
      color: Colors.PRIMARY,
      marginBottom: '30px',
    },
  };

  return (
    <div style={styles.outerContainer}>
      <div style={styles.innerContainer}>
        <div style={styles.textContainer}>
          <div style={styles.headline}>Statistics</div>
          You are among {getColoredText('0', Colors.RED)} people currently visiting the site.
          <Br />
          The site has received {getColoredText('0', Colors.FACEBOOK)} page views across {getColoredText('0', Colors.FACEBOOK)} sessions.
          <Br />
          {GetGithubStats()}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
