import React, {
  forwardRef,
  ReactNode,
  useRef
} from 'react';

import {
  useIsComponentVisible,
  useTheme,
  useWindowSize
} from 'hooks';
import { Styles } from 'types';
import { getMaxWidthFromScreenWidth } from 'utils';
import {
  Colors,
  ScreenSize
} from 'values';

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
  alignItems?: 'center' | 'baseline';
  animate?: boolean;
}

const defaultProps: { height: 'fit-content'; justifyContent: 'center'; flexDirection: 'column'; alignItems: 'center' } = {
  height: 'fit-content',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
};

// eslint-disable-next-line react/display-name
const Section = forwardRef((props: SectionProps, ref: any) => {
  const { justifyContent, children, title, height, background, flexDirection, alignItems, animate } = props;
  const [width] = useWindowSize();
  const titleRef = useRef(null);
  const isVisible = useIsComponentVisible(titleRef, 300);
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
      alignItems,
      flexDirection,
      justifyContent,
      height: '100%',
    },
  };

  if (width < ScreenSize.PHONE) {
    styles.innerContainer.margin = '20px';
  }

  const Title = (
    <StyledText color={theme.primary} styleType="TITLE">
      {title}
    </StyledText>
  );

  return (
    <section ref={ref} style={styles.outerContainer}>
      <div ref={titleRef} style={styles.innerContainer}>
        {title && (
          <Margin vertical="LARGE">
            {animate ? (
              <Animate direction={'BOTTOM'} isVisible={isVisible}>
                {Title}
              </Animate>
            ) : (
              Title
            )}
          </Margin>
        )}
        {children}
      </div>
    </section>
  );
});

Section.defaultProps = defaultProps;

export default Section;
