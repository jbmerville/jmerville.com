export interface CardItem {
  id: string;
  title: string;
  description: string[];
  image: {
    url: string;
    backgroundColor?: string;
    objectFit?: 'contain' | 'cover';
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
    image: {
      url: '/images/moonvegas-logo.png',
      backgroundColor: '#1a1035',
      objectFit: 'contain',
    },
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
];
