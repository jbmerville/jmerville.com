import React, { useRef } from 'react';

import {
  Animate,
  Margin,
  Section,
  StyledText
} from 'components';
import {
  useIsComponentVisible,
  useTheme
} from 'hooks';

import JmervilleData from './JmervilleData';

const Statistics = () => {
  const ref = useRef(null);
  const isVisible = useIsComponentVisible(ref, 300);
  const { theme } = useTheme();

  return (
    <Section ref={ref} height="400px" background={theme.card}>
      <Margin bottom={'SMALL'}>
        <Animate direction={'LEFT'} isVisible={isVisible}>
          <StyledText color={theme.primary} styleType="TITLE">
            Statistics
          </StyledText>
        </Animate>
      </Margin>
      <Margin bottom={'SMALL'}>
        <Animate direction={'LEFT'} isVisible={isVisible} speed="1.5x">
          <JmervilleData />
        </Animate>
      </Margin>
    </Section>
  );
};

export default Statistics;
