import React, { useRef } from 'react';

import {
  Animate,
  Margin,
  StyledText
} from 'components';
import {
  useIsComponentVisible,
  useTheme
} from 'hooks';
import { Styles } from 'types';
import {
  Colors,
  FontSize,
  MaxWidth
} from 'values';

import JmervilleData from './JmervilleData';

const Statistics = () => {
  const ref = useRef(null);
  const isVisible = useIsComponentVisible(ref, 300);
  const { theme } = useTheme();

  const styles: Styles = {
    outerContainer: {
      overflow: 'hidden',
      position: 'relative',
      height: '400px',
      background: theme.card,
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
    <div ref={ref} style={styles.outerContainer}>
      <div style={styles.innerContainer}>
        <div style={styles.textContainer}>
          <Margin bottom={'SMALL'}>
            <Animate direction={'LEFT'} isVisible={isVisible}>
              <StyledText color={theme.primary} style="TITLE">
                Statistics
              </StyledText>
            </Animate>
          </Margin>
          <Animate direction={'LEFT'} isVisible={isVisible} speed="1.5x">
            <JmervilleData />
          </Animate>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
