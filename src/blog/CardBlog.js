import React from 'react';
import Colors from './../values';
import PropTypes from 'prop-types';
import useWindowSize from './../WindowSize.js';

const CardBlog = (props) => {

  const { color, emoji, title, isColorLight, widths } = props;
  const [width] = useWindowSize();

  let styles = {
    outerContainer: {
      transition: 'transform 0.5s cubic-bezier(0.215,0.61,0.355,1) 0s',
      cursor: 'pointer',
      position: 'relative',
      height: '250px',
      minHeight: '250px',
      width: '190px',
      borderRadius: '7px',
      backgroundColor: color,
      marginTop: '20px',
    },
    innerContainer: {
      padding: '20px',
      height: '100%',
    },
    emoji: {
      fontSize: '1.8em',
      display: 'table-cell',
      verticalAlign: 'middle',
      height: '50px',
      width: '50px',
      borderRadius: '25px',
      backgroundColor: Colors.transparent,
      textAlign: 'center',
    },
    title: {
      textTransform: 'uppercase',
      fontWeight: '600',
      fontSize: '1em',
      paddingTop: '20px',
      color: isColorLight? Colors.primary: Colors.background,
    },
    barContainer: {
      paddingTop: '20px',
      height: 'fit-content',
      position: 'relative',
    },
    bar: {
      marginBottom: '7px',
      positin: 'relative',
      height: '7px',
      borderRadius: '4px',
      background: Colors.transparent,
    },
  };

  // Mobile style
  if (width < 600) {
    styles.outerContainer = {
      transition: 'transform 0.5s cubic-bezier(0.215,0.61,0.355,1) 0s',
      cursor: 'pointer',
      position: 'relative',
      height: '180px',
      minHeight: '250px',
      maxWidth: '190px',
      borderRadius: '7px',
      backgroundColor: color,
      marginTop: '20px',
    };
    styles.innerContainer = {
      padding: '15px',
      height: '100%',
    };
  }

  let bars = [];
  for (let i = 0; i < 3; i++){
    bars.push(<div style={{ ...styles.bar, width: widths[i] }}></div>);
  }
  
  return (
    <div className='card-blog' style={styles.outerContainer}>
      <div style={styles.innerContainer}>
        <div style={styles.emoji}>
          {emoji}
        </div>
        <div style={styles.title}>
          {title}
        </div>
        <div style={styles.barContainer}>
          {bars}
        </div>
      </div>
    </div>
  );

};

CardBlog.propTypes = {
  color: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isColorLight: PropTypes.bool.isRequired,
  widths: PropTypes.array.isRequired,
};

export default CardBlog;
