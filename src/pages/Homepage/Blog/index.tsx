import React, { useRef } from 'react';

import {
  Animate,
  Margin,
  Section,
  StyledText
} from 'components';
import {
  useIsComponentVisible,
  useTheme,
  useWindowSize
} from 'hooks';
import { Styles } from 'types';
import { Colors } from 'values';

import Column from './Column';

const Blog = () => {
  const [width] = useWindowSize();
  const ref = useRef(null);
  const isVisible = useIsComponentVisible(ref, 400);
  const { theme } = useTheme();

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
    leftContainer: {
      width: 'fit-content',
      height: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'left',
      position: 'relative',
      zIndex: 1,
    },
    rightContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      width: '215px',
      height: '100%',
      position: 'relative',
    },
  };

  // Mobile style
  if (width < 600) {
    styles.leftContainer = {
      height: '100%',
      width: 'fit-content',
    };
    styles.rightContainer = {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'right',
      width: 'fit-content',
      height: '100%',
      position: 'relative',
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
    <Section height="400px" background={theme.card} justifyContent="space-between" flexDirection="row">
      {columns}
      <div ref={ref} style={styles.rightContainer}>
        <Margin bottom={'SMALL'}>
          <Animate direction={'RIGHT'} isVisible={isVisible}>
            <StyledText color={theme.primary} styleType="TITLE">
              Blog posts
            </StyledText>
          </Animate>
        </Margin>
        <Margin bottom={'SMALL'}>
          <Animate direction={'RIGHT'} isVisible={isVisible} speed="1.5x">
            <StyledText color={theme.text} styleType="PARAGRAPH">
              Coming soon!
            </StyledText>
          </Animate>
        </Margin>
      </div>
    </Section>
  );
};

export default Blog;
