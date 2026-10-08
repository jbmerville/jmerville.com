export const CONTENT = {
  title: 'Creating Memoir',
  tagline: 'Turn the photos on your phone into a printed album.',
  logoPath: '/images/memoir-logo.png',
  paragraphs: [
    'In June 2026 I left Amazon to found Memoir. Pick photos on your phone, arrange them into pages by hand or with AI, design a cover, and receive a printed book at your door.',
    'I design and build the whole product solo: iOS and Android apps (React Native / Expo), a Next.js website, Shopify checkout, and a print pipeline that turns a paid order into a press-ready PDF with no manual step.',
    'The AI arrange engine, built on Amazon Bedrock, curates hundreds of photos, writes captions and lays out pages against a template library. It is the default path for new albums and is used on 95% of ordered books.',
    'The serverless backend runs on AWS (CDK, Lambda, DynamoDB, S3, SES) with dashboards, alarms and runbooks, and keeps the whole product running for under €25 a month.',
  ],
  links: [
    { id: 'memoir_website', label: 'Website', url: 'https://memoirprint.com' },
    {
      id: 'memoir_get_the_app',
      label: 'Get the app',
      url: 'https://memoirprint.com/get-the-app',
    },
  ],
};
