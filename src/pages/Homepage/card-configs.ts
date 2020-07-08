import { ICard } from 'types';
import { Colors } from 'values/Colors';

enum Categories {
  WORK_HISTORY = 'WORK_HISTORY',
  PROJECTS = 'PROJECTS',
}

export const SECTION_CATEGORIES = [
  {
    id: Categories.PROJECTS,
    title: 'Projects',
  },
  {
    id: Categories.WORK_HISTORY,
    title: 'Work history',
  },
];

export const SECTION_CONTENT: (ICard.Card | ICard.CardExtra)[] = [
  {
    id: 'amazon',
    type: ICard.CardTypes.NORMAL,
    category: Categories.WORK_HISTORY,
    link: 'https://www.amazon.jobs/en/working/working-amazon',
    title: {
      primary: 'Amazon · Upcoming Software Engineer Intern',
      secondary: 'Summer 2020',
    },
    description:
      'I am currently interning with the Amazon Prime Video team in London, UK. Where I am working on adding searching capabilities to internal websites using ElasticSearch.',
    image: {
      url: 'amazon.png',
      style: {
        height: '110%',
      },
      backgroundColor: Colors.GRAY_LIGHT,
    },
  },
  {
    id: 'srvice',
    type: ICard.CardTypes.NORMAL,
    category: Categories.WORK_HISTORY,
    link: 'https://www.srvice.ca/',
    title: {
      primary: 'Srvice · Full-Stack Developer',
      secondary: 'Fall 2019 - Spring 2020',
    },
    description:
      'Since fall 2019 I have been an active developer at Srvice’s. Srvice’s vision is to bring customers closer to local services with the help of technology. Using agile methodologies I build iOS and Android applications with frameworks like React and React-Native.',
    image: {
      url: 'srvice.png',
      style: {
        height: '20%',
      },
      backgroundColor: Colors.SRVICE,
    },
  },
  {
    id: 'yorku',
    type: ICard.CardTypes.NORMAL,
    category: Categories.WORK_HISTORY,
    link: 'https://lassonde.yorku.ca/',
    title: {
      primary: 'York University · Teacher Assistant',
      secondary: 'Spring 2020',
    },
    description:
      'Led weekly classes for undergraduate Computer Science students, teaching object-oriented programming for mobile application development.',
    image: {
      url: 'yorku.png',
      style: {
        height: '40%',
      },
      backgroundColor: Colors.GRAY_LIGHT,
    },
  },
  {
    id: 'genesys',
    type: ICard.CardTypes.NORMAL,
    category: Categories.PROJECTS,
    link: 'https://www.genesys.com/',
    title: {
      primary: 'Genesys Hackathon - 3rd Place',
      secondary: 'Fall 2019',
    },
    description:
      'After a 24+ hours of brainstorming, designing and programming my 2 awesome teammates and I finished Stalk My Prof. Stalk My Prof is a web application build in React that utilizes the Genesys API and makes the use of machine learning to answer questions about York University professors.',
    image: {
      url: 'genesys.png',
      style: {
        height: '80%',
      },
      backgroundColor: Colors.GRAY_LIGHT,
    },
  },
  {
    id: 'sortVisualizer',
    type: ICard.CardTypes.EXTENDED,
    category: Categories.PROJECTS,
    title: {
      primary: 'Sort Visualizer',
      secondary: 'Fall 2019',
    },
    description:
      'Sort Visualizer is a web app that visualizes how common sorting algorithms operate on a data set.',
    image: {
      url: 'sortvisualizer.png',
      style: {
        height: '75%',
        marginLeft: '10px',
      },
      caption: {
        text: 'Sort visualizer',
        color: Colors.PRIMARY,
      },
      backgroundColor: Colors.GRAY_LIGHT,
    },
    extra: {
      sections: [
        {
          image: 'images/sortvisualizer1.png',
          title: 'Select a sorting algorithm ✨',
          caption: 'Choose from a list of 6 popular algorithms',
        },
        {
          image: 'images/sortvisualizer2.png',
          title: 'Follow along some code 🤖',
        },
        {
          image: 'images/sortvisualizer3.gif',
          title: 'Enjoy comprehensive animations 🚀',
          caption: 'See which element is being treated and control the speed of the animation!',
        },
      ],
      howWasItMade:
        'I built Sort Visualizer using React and TypeScript. Srvice, the startup I was working for, decided to make the switch to TypeScript and I previously made a project similar to this one. I revamped this famous and simple project as an exercise to learn TypeScript.',
      buttons: [
        {
          link: 'https://github.com/jbmerville/sort-visualizer',
          text: 'GitHub',
          icon: {
            fontAwesomeIcon: 'fa fa-github',
          },
        },
        {
          link: 'https://sort-visualizer.jmerville.com/',
          text: 'View Project',
          icon: {
            fontAwesomeIcon: 'fa fa-window-maximize',
            size: '18px',
          },
        },
      ],
    },
  },
  {
    id: 'csbot',
    category: Categories.PROJECTS,
    type: ICard.CardTypes.EXTENDED,
    title: {
      primary: 'CSbot',
      secondary: 'Fall 2019',
    },
    description:
      'CS Bot is a Messenger bot that let’s Facebook users get in touch with other Facebook users to work on Computer Science project together. CSbot is designed to feel less like a robot and more like your friend! :)',
    image: {
      url: 'csbot.png',
      style: {
        height: '90%',
        marginTop: '-10px',
      },
      caption: {
        text: 'csbot',
      },
      backgroundColor: Colors.FACEBOOK,
    },
    extra: {
      sections: [
        {
          image: 'images/csbot1.png',
          imageWidth: '300px',
          title: 'Meet csbot 🤖',
          caption: 'Get a conversion started with csbot and get ready to answer a couple questions!',
        },
        {
          image: 'images/csbot2.png',
          imageWidth: '300px',
          title: 'Answer short questions 💯',
          caption: 'csbots asks you questions to better understand who you are and what you are looking for',
        },
        {
          image: 'images/csbot3.png',
          imageWidth: '300px',
          title: 'Get matched ✌',
          caption: 'Fingers crossed and csbot will find the right person for your next cs project :)',
        },
      ],
      howWasItMade:
        'I implemented csbot by getting into webhook servers. csbot is made with Node and is hosted on Heroku. csbot also utilizes a MongoDB cluster to store the information necessary to match users together.',
      buttons: [
        {
          link: 'https://github.com/jbmerville/CSBot',
          text: 'GitHub',
          icon: {
            fontAwesomeIcon: 'fa fa-github',
          },
        },
        {
          link: 'https://github.com/jbmerville/CSBot',
          text: 'View Project',
          icon: {
            fontAwesomeIcon: 'fa fa-facebook',
          },
        },
      ],
    },
  },
  {
    id: 'maze',
    type: ICard.CardTypes.EXTENDED,
    category: Categories.PROJECTS,
    title: {
      primary: 'Maze App',
      secondary: 'Fall 2019',
    },
    description:
      'Maze App is a fun web application where you can draw mazes and use different algorithms to see how it would be solved. Maze App is also a good tool to understand how we can create mazes by generating walls using different patterns.',
    image: {
      url: 'maze.png',
      style: {
        height: '75%',
        marginLeft: '10px',
      },
      caption: {
        text: 'maze app',
      },
      backgroundColor: Colors.BLUE_LIGHT,
    },
    extra: {
      sections: [
        {
          image: 'images/maze1.png',
          title: 'Draw a maze ✨',
          caption: 'Drag across the grid to draw the wall of a maze',
        },
        {
          image: 'images/maze2.png',
          imageWidth: '230px',
          title: 'Pick an alogirthm 🤖',
          caption: 'Select an algorithm from a few popular maze solving algorithms!',
        },
        {
          image: 'images/maze3.gif',
          title: 'Solve the maze 🚀',
          caption: 'Watch colorful animations for different popular graph algorithms!',
        },
      ],
      howWasItMade:
        'I built Maze App using React and Node. After getting into React through a Udemy turorial and building project along the way I wanted to use what I just learned to make something of my own.',
      buttons: [
        {
          link: 'https://github.com/jbmerville/MazeApp',
          text: 'GitHub',
          icon: {
            fontAwesomeIcon: 'fa fa-github',
          },
        },
        {
          link: 'https://github.com/jbmerville/MazeApp',
          text: 'View Project',
          icon: {
            fontAwesomeIcon: 'fa fa-window-maximize',
            size: '18px',
          },
        },
      ],
    },
  },
  {
    id: 'hideYourNotes',
    type: ICard.CardTypes.EXTENDED,
    category: Categories.PROJECTS,
    title: {
      primary: 'Hide Your Notes',
      secondary: 'Summer 2019',
    },
    description:
      "Hide Your Notes is a Google Docs add-on that let's you hide and show parts of your documents to make preparing for tests easy! hide your notes support many many types of documents and gives the users options to make learning an interactive experience!",
    image: {
      url: 'hide-your-notes.png',
      style: {
        height: '80%',
      },
      caption: {
        text: 'hide your notes',
      },
      backgroundColor: Colors.GREEN,
    },
    extra: {
      howWasItMade:
        'Hide Your Notes was one of my first independent programing project. I build Hide Your Notes using the Google Docs API.',
      buttons: [
        {
          link: 'https://github.com/jbmerville/HideYourNotes',
          text: 'GitHub',
          icon: {
            fontAwesomeIcon: 'fa fa-github',
          },
        },
      ],
      sections: [
        {
          image: 'images/hide-your-notes1.png',
          imageWidth: '170px',
          title: 'Select what type of text to hide 💭',
          caption: 'Hide Your Notes uses the attributes of the document like font-size and color',
        },
        {
          image: 'images/hide-your-notes2.png',
          title: 'Before 🙈',
        },
        {
          image: 'images/hide-your-notes3.png',
          title: 'After ✨',
        },
      ],
    },
  },
];
