import React, { useRef } from 'react';

import { useWindowSize } from 'hooks';
import IsComponentVisible from 'hooks/useIsComponentVisible';
import { Styles } from 'types';
import { getPaddingsFromWidth } from 'utils';
import {
  Colors,
  FontSize,
  MaxWidth
} from 'values';

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
  const isVisible = IsComponentVisible(ref, 300);

  let styles: Styles = {
    outerContainer: {
      position: 'relative',
      height: 'fit-content',
      background: Colors.BACKGROUND,
    },
    innerContainer: {
      position: 'relative',
      maxWidth: MaxWidth,
      height: '100%',
      padding: '100px 0',
      margin: `0 ${getPaddingsFromWidth(width).LEFTRIGHT}`,
    },
    title: {
      textTransform: 'uppercase',
      fontWeight: 'bold',
      fontSize: FontSize.XXXL,
      color: Colors.PRIMARY,
      lineHeight: '1em',
      marginBottom: '100px',
    },
    titleBar: {
      marginTop: '7px',
      height: '1px',
      width: 'auto',
      background: Colors.PRIMARY,
    },
  };

  // Mobile style
  if (width < 600) {
    styles.title = {
      textTransform: 'uppercase',
      fontWeight: 'bold',
      fontSize: FontSize.XXL,
      color: Colors.PRIMARY,
    };
    // Overide padding
    styles.outerContainer.padding = '10px';
    styles.innerContainer.margin = '0';
  }

  return (
    <section ref={ref} key={props.section.id} style={styles.outerContainer}>
      <div style={styles.innerContainer}>
        <div className={isVisible} style={styles.title}>
          {props.section.title}
        </div>
        {props.content}
      </div>
    </section>
  );
};

export default Section;
