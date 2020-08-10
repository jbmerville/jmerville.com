import React, { useRef } from 'react';

import CSS from 'csstype';
import IsComponentVisible from 'hooks/ComponentVisibility';
import UseWindowSize from 'hooks/WindowSize';
import { getPaddingsFromWidth } from 'utils';
import {
  Colors,
  Paddings
} from 'values';

interface SectionProps {
  section: {
    id: string;
    title: string;
  };
  content: JSX.Element[];
}

interface Styles {
  outerContainer: CSS.Properties;
  title: CSS.Properties;
  titleBar: CSS.Properties;
}

const Section = (props: SectionProps) => {
  const [width] = UseWindowSize();
  const ref = useRef(null);
  const isVisible = IsComponentVisible(ref, 300);

  let styles: Styles = {
    outerContainer: {
      position: 'relative',
      height: 'fit-content',
      padding: getPaddingsFromWidth(width).ALL,
      paddingBottom: '10px',
      background: Colors.BACKGROUND,
    },
    title: {
      textTransform: 'uppercase',
      fontWeight: 'bold',
      fontSize: '3.5em',
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
      fontSize: '3.5em',
      color: Colors.PRIMARY,
      margin: Paddings.PHONE.ALL,
      padding: Paddings.PHONE.ALL,
    };
    // Overide padding
    styles.outerContainer.padding = '10px';
  }

  return (
    <section ref={ref} key={props.section.id} style={styles.outerContainer}>
      <div className={isVisible} style={styles.title}>
        {props.section.title}
      </div>
      {props.content}
    </section>
  );
};

export default Section;
