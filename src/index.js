import ReactDOM from 'react-dom';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import React from 'react';
import Header from './Header.js';
import Separator from './Separator.js';
import Section from './Section.js';
import Card from './card';
import Colors from './values/Colors.js';
import Footer from './Footer.js';
import Blog from './blog';

export const App = () => {
    
  const workCards = [
    <Card 
      key='amazon' 
      link='https://www.amazon.jobs/en/working/working-amazon'
      title='Amazon · Upcoming Software Engineer Intern' 
      secondaryTitle='Summer 2020' 
      description='I will be interning with the Amazon Prime Video team in London, UK. Amazon is the most customer centric company, it’s mission is to always meet each customers needs, innovating new solutions to make things easier, faster, better, and more cost-effective.' 
      image='amazon.png'
      imageStyle={{
        height: '110%',
      }}
    />,
    <Card 
      key='srvice'
      link='https://www.srvice.ca/' 
      title='Srvice · Full-Stack Developer' 
      secondaryTitle='Fall 2019 - Present' 
      description='Since fall 2019 I have been an active developer at Srvice’s. Srvice’s vision is to bring customers closer to local services with the help of technology. Using agile methodologies I build iOS and Android applications with frameworks like React and React-Native.' 
      image='srvice.png' 
      imageStyle={{
        height: '20%',
      }}
      backgroundColor={Colors.srvice}
    />,
    <Card 
      key='yorku' 
      link='https://lassonde.yorku.ca/'
      title='York University · Teacher Assistant' 
      secondaryTitle='Spring 2020' 
      description='Led weekly classes for undergraduate Computer Science students, teaching object-oriented programming for mobile application development.' 
      image='yorku.png'
      imageStyle={{
        height: '40%',
      }}
    />,
  ];

  const projectHackathonCards = [
    <Card 
      key='genesys' 
      link='https://www.genesys.com/'
      title='Genesys Hackathon - 3rd Place' 
      secondaryTitle='Fall 2019' 
      description='After a 24+ hours of brainstorming, designing and programming my 2 awesome teammates and I finished Stalk My Prof. Stalk My Prof is a web application build in React that utilizes the Genesys API and makes the use of machine learning to answer questions about York University professors.' 
      image='genesys.png'
      imageStyle={{
        height: '80%',
      }}
    />,
    <Card 
      key='csbot' 
      link='https://github.com/jbmerville/MatchCS-Bot'
      title='CSbot' 
      secondaryTitle='Fall 2019' 
      description='CS Bot is a Messenger bot that let’s Facebook users get in touch with other Facebook users to work on Computer Science project together. CSbot is designed to feel less like a robot and more like your friend! :)' 
      image='csbot.png'
      imageStyle={{
        height: '90%',
        marginTop: '-10px',
      }}
      imageCaption='csbot'
      backgroundColor={Colors.facebook}
    />,
    <Card 
      key='maze' 
      link='https://jbmerville.github.io/Path-Finder/'
      title='Maze App' 
      secondaryTitle='Fall 2019' 
      description='Maze App is a fun web application where you can draw mazes and use different algorithms to see how it would be solved. Maze App is also a good tool to understand how we can create mazes by generating walls using different patterns.'
      image='maze.png' 
      imageStyle={{
        height: '75%',
        marginLeft: '10px',
      }}
      imageCaption='maze app'
      backgroundColor={Colors.lightBlue}
    />,
    <Card 
      key='hide-your-notes' 
      link='https://github.com/jbmerville/HideYourNotes'
      title='Hide Your Notes' 
      secondaryTitle='Summer 2019' 
      description='Hide Your Notes is a Google Docs add-on that let&apos;s you hide and show parts of your documents to make preparing for tests easy! hide your notes support many many types of documents and gives the users options to make learning an interactive experience!'
      image='hide-your-notes.png' 
      imageStyle={{
        height: '80%',
      }}
      imageCaption='hide your notes'
      backgroundColor={Colors.green}
    />,
  ];

  const styles = {
    container: {
      height: '100%',
      width: '100%',
      position: '100%',
    }
  };

  return (
    <div style={styles.container}>
      <Header />
      <Blog />
      <Section 
        title='Work' 
        cards={workCards}
      />
      <Separator />
      <Section 
        title='Project + Hackathon ' 
        cards={projectHackathonCards}
      />
      <Separator />
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
