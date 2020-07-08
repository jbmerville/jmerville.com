import React from 'react';

import CSS from 'csstype';

import UseWindowSize from '../hooks/WindowSize';
import { Colors } from '../values';

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

  let styles: Styles = {
    outerContainer: {
      position: 'relative',
      height: 'fit-content',
      padding: '150px',
      background: Colors.BACKGROUND,
    },
    title: {
      textTransform: 'uppercase',
      fontWeight: 'bold',
      fontSize: '2.3em',
      color: Colors.PRIMARY,
      marginTop: '-30px',
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
    styles.outerContainer = {
      position: 'relative',
      height: 'fit-content',
      padding: '20px',
      background: Colors.BACKGROUND,
    };
    styles.title = {
      textTransform: 'uppercase',
      fontWeight: 'bold',
      fontSize: '1.5em',
      color: Colors.PRIMARY,
      marginTop: '40px',
    };
  } else if (width < 1200) {
    styles.outerContainer = {
      position: 'relative',
      height: 'fit-content',
      padding: '100px',
      background: Colors.BACKGROUND,
    };
    styles.title = {
      textTransform: 'uppercase',
      fontWeight: 'bold',
      fontSize: '1.8em',
      color: Colors.PRIMARY,
      marginTop: '10px',
    };
  } else if (width > 1500) {
    styles.outerContainer = {
      position: 'relative',
      height: 'fit-content',
      padding: '250px',
      background: Colors.BACKGROUND,
    };
  }

  return (
    <div key={props.section.id} style={styles.outerContainer}>
      <div style={styles.title}>{props.section.title}</div>
      <div style={styles.titleBar}></div>
      {props.content}
    </div>
  );
};

export default Section;
