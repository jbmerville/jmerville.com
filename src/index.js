import ReactDOM from 'react-dom';
import React from 'react';
import Header from './Header.js';
import Separator from './Separator.js';
import Section from './Section.js';
import Card from './Card.js';

export const App = () => {
  const workCards = [
    <Card 
      key='amazon' title='Amazon · Upcoming Software Engineer Intern' 
      secondaryTitle='Summer 2020' 
      description='I will be interning with the Amazon Prime Video team in London, UK. Amazon is the most customer centric company, it’s mission is to always meet each customers needs, innovating new solutions to make things easier, faster, better, and more cost-effective.' 
      image='amazon.png'
      imageStyle={{
        height: '110%',
        top: '-5px',
        left: '5px',
      }}
    />,
    <Card 
      key='yorku' 
      title='York University · Teacher Assistant' 
      secondaryTitle='Spring 2020' 
      description='Lead weekly classes for undergraduate Computer Science students, teaching object-oriented programming for mobile application development.' 
      image='yorku.png'
      imageStyle={{
        height: '50%',
        top: '55px',
        left: '15px',
      }}
    />,
    <Card 
      key='srvice' 
      title='Srvice · Full-Stack Developer' 
      secondaryTitle='Fall 2019 - Present' 
      description='Since fall 2019 I have been an active developer at Srvice’s. Srvice’s vision is to bring customers closer to local services with the help of technology. Using agile methodologies I build iOS and Android applications using frameworks like React and React-Native.' 
      image='srvice.png' 
      imageStyle={{
        height: '110%',
        top: '-13px',
        left: '-12px',
      }}
    />,
  ];
  return (
    <div>
      <Header />
      <Separator />
      <Section title='Work' cards={workCards}/>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
