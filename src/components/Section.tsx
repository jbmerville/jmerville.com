import React from 'react';

import CSS from 'csstype';
import { SideMargin } from 'values/Style';

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
      padding: SideMargin.COMPUTER,
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
    styles.outerContainer = {
      position: 'relative',
      height: 'fit-content',
      padding: SideMargin.PHONE,
      paddingBottom: 0,
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
      padding: SideMargin.TABLET,
      paddingBottom: '10px',
      background: Colors.BACKGROUND,
    };
  } else if (width > 1500) {
    styles.outerContainer = {
      position: 'relative',
      height: 'fit-content',
      padding: SideMargin.TV,
      paddingBottom: '10px',
      background: Colors.BACKGROUND,
    };
  }

  return (
    <section key={props.section.id} style={styles.outerContainer}>
      <div style={styles.title}>{props.section.title}</div>
      {props.content}
    </section>
  );
};

export default Section;
