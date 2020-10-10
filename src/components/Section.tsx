import React, {
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

import Animate from './Animate';
import Margin from './Margin';
import StyledText from './StyledText';

interface SectionProps {
  title?: string;
  children: ReactNode;
  justifyContent?: 'flex-end' | 'flex-start';
  height?: 'fit-content' | '90%';
}

const defaultProps = {
  height: 'fit-content',
  justifyContent: 'flex-start',
};

const Section = (props: SectionProps) => {
  const { justifyContent, children, title, height } = props;
  const [width] = useWindowSize();
  const ref = useRef(null);
  const isVisible = useIsComponentVisible(ref, 300);
  const { theme } = useTheme();
  const sectionMaxWidth = getMaxWidthFromScreenWidth(width);

  let styles: Styles = {
    outerContainer: {
      position: 'relative',
      height,
      display: 'flex',
      justifyContent: 'center',
      background: theme.background,
    },
    innerContainer: {
      position: 'relative',
      width: sectionMaxWidth,
      display: 'flex',
      justifyContent: justifyContent,
      height: '100%',
      flexFlow: 'wrap',
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
};

Section.defaultProps = defaultProps;
export default Section;
