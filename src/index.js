import ReactDOM from 'react-dom';
import React from 'react';
import Header from './Header.js';
import Separator from './Separator.js';
import Section from './Section.js';

export const App = () => {
  return (
    <div>
      <Header />
      <Separator />
      <Section title='Work'/>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
