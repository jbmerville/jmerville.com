import React from 'react';

import CSS from 'csstype';

interface Styles {
  separotor: CSS.Properties;
}

const Separator = () => {
  const styles: Styles = {
    separotor: {
      height: '15px',
      width: '100%',
    },
  };

  return <div style={styles.separotor}></div>;
};

export default Separator;
