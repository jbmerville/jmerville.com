import ReactDOM from 'react-dom';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import React from 'react';
import Header from './Header.js';
import Separator from './Separator.js';
import Section from './Section.js';
import Card from './card';
import CardExtra from './cardExtra';
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
    <CardExtra
      key='csbot' 
      card={<Card 
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
      />}
      extra={[{
        image: 'images/csbot1.png',
        imageWidth: '300px',
        title: 'Meet csbot 🤖',
        caption: 'Get a conversion started with csbot and get ready to answer a couple questions!',
      }, {
        image: 'images/csbot2.png',
        imageWidth: '300px',
        title: 'Answer short questions 💯',
        caption: 'csbots asks you questions to better understand who you are and what you are looking for',
      },{ 
        image: 'images/csbot3.png',
        imageWidth: '300px',
        title: 'Get matched ✌',
        caption: 'Fingers crossed and csbot will find the right person for your next cs project :)',
      }]}
      howWasItMade='I implemented csbot by getting into webhook servers. csbot is made with Node and is hosted on Heroku. csbot also utilizes a MongoDB cluster to store the information necessary to match users together.'
      buttons={[
        {
          link: 'https://github.com/jbmerville/CSBot',
          text: 'GitHub',
          fontAwesomeIcon: 'fa fa-github',
        }, {
          link: 'https://github.com/jbmerville/CSBot',
          text: 'View Project',
          fontAwesomeIcon: 'fa fa-facebook',
        }
      ]}
    />,
    <CardExtra
      key='maze' 
      card={<Card 
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
      />}
      extra={[{
        image: 'images/maze1.png',
        title: 'Draw a maze ✨',
        caption: 'Drag across the grid to draw the wall of a maze',
      }, 
      { 
        image: 'images/maze2.png' ,
        imageWidth: '230px',
        title: 'Pick an alogirthm 🤖',
        caption: 'Watch colorful animations for different popular graph algorithms!',
      }]}
      howWasItMade='I built Maze App using React and Node. After getting into React through a Udemy turorial and building project along the way I wanted to use what I just learned to make something of my own.'
      buttons={[
        {
          link: 'https://github.com/jbmerville/MazeApp',
          text: 'GitHub',
          fontAwesomeIcon: 'fa fa-github',
        }, {
          link: 'https://github.com/jbmerville/MazeApp',
          text: 'View Project',
          fontAwesomeIcon: 'fa fa-window-maximize',
          size: '18px',
        }
      ]}
    />,
    <CardExtra
      key='hide-your-notes' 
      card={<Card 
        title='Hide Your Notes' 
        secondaryTitle='Summer 2019' 
        description='Hide Your Notes is a Google Docs add-on that let&apos;s you hide and show parts of your documents to make preparing for tests easy! hide your notes support many many types of documents and gives the users options to make learning an interactive experience!'
        image='hide-your-notes.png' 
        imageStyle={{
          height: '80%',
        }}
        imageCaption='hide your notes'
        backgroundColor={Colors.green}
      />}
      extra={[{
        image: 'images/hide-your-notes1.png',
        imageWidth: '170px',
        title: 'Select what type of text to hide 💭',
        caption: 'Hide Your Notes uses the attribute of the documents like font-size and color',
      }, 
      {
        image: 'images/hide-your-notes2.png',
        title: 'Before 🙈',
      }, 
      { 
        image: 'images/hide-your-notes3.png' ,
        title: 'After ✨',
      }]}
      howWasItMade='Hide Your Notes was one of my first independent programing project. I build Hide Your Notes using the Google Docs API.'
      buttons={[
        {
          link: 'https://github.com/jbmerville/HideYourNotes',
          text: 'GitHub',
          fontAwesomeIcon: 'fa fa-github',
        }
      ]}
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
