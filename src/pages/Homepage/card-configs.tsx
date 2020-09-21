import React from 'react';

import Br from 'components/Br';
import StyledText, { TextStyle } from 'components/StyledText';
import { ICard } from 'types';
import { Colors } from 'values';

enum Categories {
  WORK_HISTORY = 'WORK_HISTORY',
  PROJECTS = 'PROJECTS',
}

export const SECTION_CATEGORIES = [
  // {
  //   id: Categories.WORK_HISTORY,
  //   title: 'Work history',
  // },
  {
    id: Categories.PROJECTS,
    title: 'Projects',
  },
];

const renderTwoParagraphs = (topText: string, bottomText: string): JSX.Element => {
  return (
    <>
      <StyledText color={Colors.TEXT} style={TextStyle.DESCRIPTION}>
        {topText}
      </StyledText>
      <Br count={1} />
      <StyledText color={Colors.TEXT} style={TextStyle.DESCRIPTION}>
        {bottomText}
      </StyledText>
    </>
  );
};

export const SECTION_CONTENT: ICard.Card[] = [
  {
    id: 'amazon',
    category: Categories.WORK_HISTORY,
    projectUrl: 'https://www.amazon.jobs/en/working/working-amazon',
    title: 'Amazon · Upcoming Software Engineer Intern',
    description: (
      <StyledText color={Colors.TEXT} style={TextStyle.DESCRIPTION}>
        I am currently interning with the Amazon Prime Video team in London, UK. Where I am working on adding searching capabilities to
        internal websites using ElasticSearch.
      </StyledText>
    ),
    image: {
      url: 'amazon.png',
      backgroundColor: Colors.GRAY_LIGHT,
    },
  },
  {
    id: 'srvice',
    category: Categories.WORK_HISTORY,
    projectUrl: 'https://www.srvice.ca/',
    title: 'Srvice · Full-Stack Developer',
    description: (
      <StyledText color={Colors.TEXT} style={TextStyle.DESCRIPTION}>
        Since fall 2019 I have been an active developer at Srvice’s. Srvice’s vision is to bring customers closer to local services with the
        help of technology. Using agile methodologies I build iOS and Android applications with frameworks like React and React-Native.
      </StyledText>
    ),
    image: {
      url: 'srvice.png',
      backgroundColor: Colors.SRVICE,
    },
  },
  {
    id: 'yorku',
    category: Categories.WORK_HISTORY,
    projectUrl: 'https://lassonde.yorku.ca/',
    title: 'York University · Teacher Assistant',
    description: (
      <StyledText color={Colors.TEXT} style={TextStyle.DESCRIPTION}>
        Led weekly classes for undergraduate Computer Science students, teaching object-oriented programming for mobile application
        development.
      </StyledText>
    ),
    image: {
      url: 'yorku.png',
      backgroundColor: Colors.GRAY_LIGHT,
    },
  },
  {
    id: 'jmerville',
    category: Categories.PROJECTS,
    title: 'jmerville.com',
    description: renderTwoParagraphs(
      "This website! jmerville is my personal website, I'm usually experimenting with it.",
      'For example, in the lastest update, I added repository statistics to each project.'
    ),
    image: {
      url: 'images/jmerville.png',
      backgroundColor: Colors.GRAY_DARK,
    },
    githubUrl: 'https://github.com/jbmerville/jmerville.com',
  },
  {
    id: 'sortingVisualizer',
    category: Categories.PROJECTS,
    title: 'Sorting Visualizer',
    description: renderTwoParagraphs(
      'A web app that visually displays how common sorting algorithms operate on a data set.',
      'Control the speed, pause the algorithm, follow along the pseudo-code.'
    ),
    image: {
      url: 'images/sorting-visualizer.png',
      backgroundColor: Colors.YELLOW,
    },
    githubUrl: 'https://github.com/jbmerville/sort-visualizer',
    projectUrl: 'https://sort-visualizer.jmerville.com/',
  },
  {
    id: 'csbot',
    category: Categories.PROJECTS,
    title: 'CSbot',
    description: renderTwoParagraphs(
      'CS Bot is a Messenger bot that let’s Facebook users get in touch with other Facebook users to work on Computer Science project together.',
      'CS Bot is designed to feel less like a robot and more like your friend 🤖.'
    ),
    image: {
      url: 'images/cs-bot.png',
      backgroundColor: Colors.FACEBOOK,
    },
    githubUrl: 'https://github.com/jbmerville/CSBot',
  },
  {
    id: 'maze',
    category: Categories.PROJECTS,
    title: 'Maze App',
    description: renderTwoParagraphs(
      'Maze App is a fun web application where you can draw mazes and use different algorithms to see how it would be solved.',
      'Maze App is also a good tool to understand how we can create mazes by generating walls using different patterns.'
    ),
    image: {
      url: 'images/path-finder.png',
      backgroundColor: Colors.PURPLE_LIGHT,
    },
    githubUrl: 'https://github.com/jbmerville/MazeApp',
    projectUrl: 'path-finder.jmerville.com/',
  },
  {
    id: 'hideYourNotes',
    category: Categories.PROJECTS,
    title: 'Hide Your Notes',
    description: renderTwoParagraphs(
      "Hide Your Notes is a Google Docs add-on that let's you hide and show parts of your documents to make preparing for tests easy!",
      'Hide Your Notes supports many types of documents and makes learning a better experience.'
    ),
    image: {
      url: 'images/hide-your-notes.png',
      backgroundColor: Colors.GREEN,
    },
    githubUrl: 'https://github.com/jbmerville/HideYourNotes',
  },
];
