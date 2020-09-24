import React, { useRef } from 'react';

import {
  Animate,
  Margin,
  StyledText
} from 'components';
import {
  useIsComponentVisible,
  useWindowSize
} from 'hooks';
import { Styles } from 'types';
import {
  Colors,
  MaxWidth,
  Paddings
} from 'values';

import Column from './Column';

const Blog = () => {
  const [width] = useWindowSize();
  const ref = useRef(null);
  const isVisible = useIsComponentVisible(ref, 300);

  const leftColumn = [
    [Colors.GRAY_DARK, '🤖', 'Placeholder', true],
    [Colors.SECONDARY, '👽', 'Placeholder', true],
    [Colors.PRIMARY, '🤞', 'Placeholder', true],
  ];
  const rightColumn = [
    [Colors.PRIMARY, '🤞', 'Placeholder', true],
    [Colors.GRAY_DARK, '🤖', 'Placeholder', true],
    [Colors.SECONDARY, '👽', 'Placeholder', true],
  ];

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
    },
    leftContainer: {
      float: 'left',
      width: '70%',
      height: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'left',
      position: 'relative',
      zIndex: 1,
    },
    rightContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'right',
      float: 'right',
      width: '30%',
      height: '100%',
      position: 'relative',
    },
    textContainer: {},
  };

  // Mobile style
  if (width < 600) {
    styles.outerContainer = {
      overflow: 'hidden',
      position: 'relative',
      height: '400px',
      padding: Paddings.PHONE.ALL,
      paddingTop: '0 !important',
      paddingBottom: '0 !important',
      background: Colors.GRAY_LIGHT,
    };
    styles.leftContainer = {
      float: 'left',
      width: '50%',
      height: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      position: 'relative',
      zIndex: 1,
    };
    styles.rightContainer = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'right',
      float: 'right',
      width: '50%',
      height: '100%',
      position: 'relative',
    };
    styles.textContainer = {
      position: 'relative',
      paddingLeft: '20px',
    };
  }

  const columns =
    width < 600 ? (
      <div style={styles.leftContainer}>
        <Column cards={[...leftColumn, ...rightColumn]} offset="0px" />
      </div>
    ) : (
      <div style={styles.leftContainer}>
        <Column cards={leftColumn} offset="0px" />
        <Column cards={rightColumn} offset="-100px" />
      </div>
    );

  return (
    <div ref={ref} style={styles.outerContainer}>
      <div style={styles.innerContainer}>
        {columns}
        <div style={styles.rightContainer}>
          <div style={styles.textContainer}>
            <Animate direction={'RIGHT'} isVisible={isVisible}>
              <Margin bottom={'SMALL'}>
                <StyledText color={Colors.PRIMARY} style="TITLE">
                  Blog posts
                </StyledText>
              </Margin>
            </Animate>
            <Animate direction={'RIGHT'} isVisible={isVisible} speed="1.5x">
              <StyledText color={Colors.TEXT} style="DESCRIPTION">
                Coming soon!
              </StyledText>
            </Animate>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
