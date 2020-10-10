import React, {
  forwardRef,
  ReactNode
} from 'react';

import {
  useIsComponentVisible,
  useTheme,
  useWindowSize
} from 'hooks';
import { Styles } from 'types';
import { getMaxWidthFromScreenWidth } from 'utils';
import { Colors } from 'values';

import Animate from './Animate';
import Margin from './Margin';
import StyledText from './StyledText';

interface SectionProps {
  title?: string;
  children: ReactNode;
  flexDirection?: 'row' | 'column';
  justifyContent?: 'flex-end' | 'flex-start' | 'space-between' | 'center';
  height?: 'fit-content' | '90%' | '400px';
  background?: Colors;
}

const defaultProps: { height: 'fit-content'; justifyContent: 'center'; flexDirection: 'column' } = {
  height: 'fit-content',
  justifyContent: 'center',
  flexDirection: 'column',
};

// eslint-disable-next-line react/display-name
const Section = forwardRef((props: SectionProps, ref: any) => {
  const { justifyContent, children, title, height, background, flexDirection } = props;
  const [width] = useWindowSize();
  const isVisible = useIsComponentVisible(ref, 300);
  const { theme } = useTheme();
  const sectionMaxWidth = getMaxWidthFromScreenWidth(width);

  let styles: Styles = {
    outerContainer: {
      position: 'relative',
      height,
      display: 'flex',
      justifyContent: 'center',
      background: background ? background : theme.background,
      overflow: 'hidden',
    },
    innerContainer: {
      position: 'relative',
      width: sectionMaxWidth,
      display: 'flex',
      alignItems: 'baseline',
      flexDirection,
      justifyContent,
      height: '100%',
    },
  };

  return (
    <section ref={ref} style={styles.outerContainer}>
      <div style={styles.innerContainer}>
        {title && (
          <Margin vertical="REGULAR">
            <Animate direction={'BOTTOM'} isVisible={isVisible}>
              <StyledText color={theme.primary} styleType="TITLE">
                {title}
              </StyledText>
            </Animate>
          </Margin>
        )}
        {children}
      </div>
    </section>
  );
});

Section.defaultProps = defaultProps;
export default Section;
