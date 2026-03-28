export interface CardItem {
  id: string;
  title: string;
  description: string[];
  image: {
    url: string;
    backgroundColor?: string;
  };
  githubProjectName?: string;
  projectUrl?: string;
}

export const CONTENT: CardItem[] = [
  {
    id: 'moonvegas',
    title: 'MoonVegas',
    description: [
      'MoonVegas is a blockchain-based gaming platform featuring two provably fair games — a raffle and a coin flip — powered by EVM smart contracts.',
      'In the raffle, players purchase tickets and a winner is selected at random once all tickets are sold, claiming the entire prize pool.',
      'The coin flip game lets players bet on heads or tails, doubling their money on a correct guess.',
      'The project was built with Solidity for the smart contract backend and React with Next.js for the frontend. It showcases full-stack Web3 development, combining on-chain game logic with a modern, responsive user interface.',
    ],
    image: { url: '/images/moonvegas.png', backgroundColor: '#1a1035' },
    githubProjectName: 'moonvegas',
    projectUrl: 'https://moonvegas.jmerville.com/',
  },
  {
    id: 'elrondpunks',
    title: 'ElrondPunks',
    description: [
      'ElrondPunks was the first NFT collection ever minted on the Elrond blockchain.',
      'Built both the smart contract backend and the frontend from scratch, handling the full NFT minting lifecycle on-chain.',
      "Much of the project's success was driven by being first to market — launching before any other NFT project on the network created strong demand and community momentum.",
      'The project has since been acquired, and is now operated under new ownership after the original team sold it.',
    ],
    image: { url: '/images/elrondpunks.png' },
    projectUrl: 'https://elrondpunks.com',
  },
  {
    id: 'sortingVisualizer',
    title: 'Sorting Visualizer',
    description: [
      'A web app that visually displays how common sorting algorithms operate on a data set.',
      'Control the speed, pause the algorithm, follow along the pseudo-code.',
    ],
    image: {
      url: '/images/sorting-visualizer.png',
      backgroundColor: '#f5c518',
    },
    githubProjectName: 'sort-visualizer',
    projectUrl: 'https://sort-visualizer.jmerville.com/',
  },
  {
    id: 'csbot',
    title: 'CSbot',
    description: [
      'CS Bot is a Messenger bot that lets Facebook users get in touch with other Facebook users to work on Computer Science projects together.',
      'CS Bot is designed to feel less like a robot and more like your friend 🤖.',
    ],
    image: { url: '/images/cs-bot.png', backgroundColor: '#1877f2' },
    githubProjectName: 'CSBot',
  },
  {
    id: 'maze',
    title: 'Maze App',
    description: [
      'Maze App is a fun web application where you can draw mazes and use different algorithms to see how it would be solved.',
      'Maze App is also a good tool to understand how we can create mazes by generating walls using different patterns.',
    ],
    image: { url: '/images/path-finder.png', backgroundColor: '#dfe6fa' },
    githubProjectName: 'MazeApp',
    projectUrl: 'https://path-finder.jmerville.com/',
  },
  {
    id: 'hideYourNotes',
    title: 'Hide Your Notes',
    description: [
      'Hide Your Notes is a Google Docs add-on that lets you hide and show parts of your documents to make preparing for tests easy!',
      'Hide Your Notes supports many types of documents and makes learning a better experience.',
    ],
    image: { url: '/images/hide-your-notes.png', backgroundColor: '#34a853' },
    githubProjectName: 'HideYourNotes',
  },
  {
    id: 'jmerville',
    title: 'jmerville.com',
    description: [
      "This website! jmerville.com is my personal website, I'm usually experimenting with it.",
      'For example, in the latest update, I added repository statistics to each project.',
    ],
    image: { url: '/images/jmerville.png', backgroundColor: '#3a3a3a' },
    githubProjectName: 'jmerville.com',
  },
];
