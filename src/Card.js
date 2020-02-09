import React from 'react';
import Colors from './values/Colors';

const Card = (props) => {
  console.log(props);
  const styles = {
    outerContainer: {
      position: 'relative',
      transition: 'transform .2s',
      cursor: 'pointer',
      height: '250px',
      width: '400px',
      background: Colors.lightGray,
    },
    image: {
      height: '100%',
      transition: 'transform .2s',
      position: 'absolute',
    }
  };


  return (
    <div 
      className='card'
      style={styles.outerContainer} 
    >
      <img style={styles.image} src={`images/${props.image}`} />
    </div>
  );
};

export default Card;
