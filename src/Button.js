import React from 'react';
import PropTypes from 'prop-types';
import Colors from './values';
import UseWindowSize from './WindowSize.js';

const Button = (props) => {

  const { text, link, fontAwesomeIcon, size, isFirst } = props;
  const [width] = UseWindowSize();

  const styles = {
    buttonContainer: {
      marginTop: isFirst? '' : '40px',
      cursor: 'pointer',
      height: 'fit-content',
      width: 'fit-content',
      borderRadius: '4px',
    },
    iconContainer: {
      position: 'relative',
      float: 'left',
      display: 'table',
      height: '45px',
      width: '45px',
      marginLeft: '5px',
      borderRadius: '25px',
      backgroundColor: Colors.lightPurple,
    },
    icon: {
      fontSize: size ? size: '25px',
      display: 'table-cell',
      textAlign: 'center',
      verticalAlign: 'middle',
      color: Colors.facebook,
    },
    buttonText: {
      display: 'inline-block',
      position: 'relative',
      fontSize: '1.3em',
      padding: '10px',
      paddingRight: '20px',
      width: 'fit-content',
      color: Colors.primary,
    },
    link: {
      position: 'relative',
      height: 'fit-content',
      width: 'fit-content',
      display: 'block',
    }
  };

  // Mobile style
  if (width < 600) {
    styles.buttonText = {
      display: 'inline-block',
      position: 'relative',
      fontSize: '1em',
      padding: '10px',
      paddingRight: '15px',
      width: 'fit-content',
      color: Colors.primary,
    };
    styles.buttonContainer = {
      marginTop: isFirst? '' : '20px',
      cursor: 'pointer',
      height: 'fit-content',
      width: 'fit-content',
      borderRadius: '4px',
    };
  }

  return (
    <a style={styles.link} href={link}>
      <div className='button' style={styles.buttonContainer}>
        <div style={styles.iconContainer}>
          <i style={styles.icon} className={fontAwesomeIcon}></i>
        </div>   
        <div className='buttonText' style={styles.buttonText}>{text}</div>
      </div>
    </a>
  );

};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  size: PropTypes.string,
  fontAwesomeIcon: PropTypes.string.isRequired,
  isFirst: PropTypes.bool,
};

export default Button;
