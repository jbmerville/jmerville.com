/* eslint-disable quotes */
import { CardItem } from 'types';
import { Colors } from 'values';

enum Categories {
  WORK_HISTORY = 'WORK_HISTORY',
  PROJECTS = 'PROJECTS',
}

export const CONTENT: CardItem[] = [
  {
    id: 'sortingVisualizer',
    category: Categories.PROJECTS,
    title: 'Sorting Visualizer',
    description: [
      'A web app that visually displays how common sorting algorithms operate on a data set.',
      'Control the speed, pause the algorithm, follow along the pseudo-code.',
    ],
    image: {
      url: 'images/sorting-visualizer.png',
      backgroundColor: Colors.YELLOW,
    },
    githubProjectName: 'sort-visualizer',
    projectUrl: 'https://sort-visualizer.jmerville.com/',
  },
  {
    id: 'csbot',
    category: Categories.PROJECTS,
    title: 'CSbot',
    description: [
      'CS Bot is a Messenger bot that let’s Facebook users get in touch with other Facebook users to work on Computer Science project together.',
      'CS Bot is designed to feel less like a robot and more like your friend 🤖.',
    ],
    image: {
      url: 'images/cs-bot.png',
      backgroundColor: Colors.FACEBOOK,
    },
    githubProjectName: 'CSBot',
  },
  {
    id: 'maze',
    category: Categories.PROJECTS,
    title: 'Maze App',
    description: [
      'Maze App is a fun web application where you can draw mazes and use different algorithms to see how it would be solved.',
      'Maze App is also a good tool to understand how we can create mazes by generating walls using different patterns.',
    ],
    image: {
      url: 'images/path-finder.png',
      backgroundColor: Colors.PURPLE_LIGHT,
    },
    githubProjectName: 'MazeApp',
    projectUrl: 'path-finder.jmerville.com/',
  },
  {
    id: 'hideYourNotes',
    category: Categories.PROJECTS,
    title: 'Hide Your Notes',
    description: [
      "Hide Your Notes is a Google Docs add-on that let's you hide and show parts of your documents to make preparing for tests easy!",
      'Hide Your Notes supports many types of documents and makes learning a better experience.',
    ],
    image: {
      url: 'images/hide-your-notes.png',
      backgroundColor: Colors.GREEN,
    },
    githubProjectName: 'HideYourNotes',
  },
  {
    id: 'jmerville',
    category: Categories.PROJECTS,
    title: 'jmerville.com',
    description: [
      "This website! jmerville is my personal website, I'm usually experimenting with it.",
      'For example, in the lastest update, I added repository statistics to each project.',
    ],
    image: {
      url: 'images/jmerville.png',
      backgroundColor: Colors.GRAY_DARK,
    },
    githubProjectName: 'jmerville.com',
  },
];
