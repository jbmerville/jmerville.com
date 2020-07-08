import '../node_modules/font-awesome/css/font-awesome.min.css';

import React from 'react';
import ReactDOM from 'react-dom';

import CSS from 'csstype';
import HomePage from 'pages/Homepage';

interface Styles {
  container: CSS.Properties;
}

export const App = () => {
  const styles: Styles = {
    container: {
      height: '100%',
      width: '100%',
      position: 'relative',
    },
  };

  return (
    <div style={styles.container}>
      <HomePage />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
