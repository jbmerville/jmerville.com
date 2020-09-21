import React from 'react';

import { Styles } from 'types';
import {
  Colors,
  FontSize,
  MaxWidth,
  repoLinesStats
} from 'values';

const colorText = (text: string | number, color: Colors): JSX.Element => <span style={{ color, fontWeight: 'bold' }}>{text}</span>;

const renderGithubStatistics = (): JSX.Element => {
  const { comment, code, nFiles } = repoLinesStats.TypeScript;
  return (
    <div>
      The last build of this website contains {colorText(code, Colors.BLUE)} lines of TypeScript code, and {colorText(comment, Colors.BLUE)}{' '}
      comments, across {colorText(nFiles, Colors.BLUE)} files.
    </div>
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
          {renderGithubStatistics()}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
