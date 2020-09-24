import React, { useRef } from 'react';

import {
  useIsComponentVisible,
  useTheme,
  useWindowSize
} from 'hooks';
import { Styles } from 'types';
import { getPaddingsFromWidth } from 'utils';
import { MaxWidth } from 'values';

import Animate from './Animate';
import Margin from './Margin';
import StyledText from './StyledText';

interface SectionProps {
  section: {
    id: string;
    title: string;
  };
  content: JSX.Element[];
}

const Section = (props: SectionProps) => {
  const [width] = useWindowSize();
  const ref = useRef(null);
  const isVisible = useIsComponentVisible(ref, 300);
  const { theme } = useTheme();

  let styles: Styles = {
    outerContainer: {
      position: 'relative',
      height: 'fit-content',
      background: theme.background,
    },
    innerContainer: {
      position: 'relative',
      maxWidth: MaxWidth,
      height: '100%',
      padding: '100px 0',
      margin: `0 ${getPaddingsFromWidth(width).LEFTRIGHT}`,
    },
  };

  // Mobile style
  if (width < 600) {
    // Overide padding
    styles.outerContainer.padding = '10px';
    styles.innerContainer.margin = '0';
  }

  return (
    <section ref={ref} key={props.section.id} style={styles.outerContainer}>
      <div style={styles.innerContainer}>
        <Margin bottom="REGULAR">
          <Animate direction={'BOTTOM'} isVisible={isVisible}>
            <StyledText color={theme.primary} style="TITLE">
              {props.section.title}
            </StyledText>
          </Animate>
        </Margin>
        {props.content}
      </div>
    </section>
  );
};

export default Section;
