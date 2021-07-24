import React, {
  useEffect,
  useState
} from 'react';

import { Section } from 'components';
import { useWindowSize } from 'hooks';
import { ScreenSize } from 'values';

import { CONTENT } from './config';
import HeroCard from './HeroCard';
import HeroImage from './HeroImage';

interface HeroProps {
  aboutMeRef: any;
  statisticsRef: any;
}
const Hero = (props: HeroProps) => {
  const [width] = useWindowSize();
  const [isVisible, setIsVisible] = useState(false);
  const isScreenTypeMobile = width < ScreenSize.PHONE;
  const { title, description } = CONTENT;

  useEffect(() => {
    setTimeout(() => setIsVisible(true));
  });

  return (
    <Section
      height={isScreenTypeMobile ? 'fit-content' : '90%'}
      flexDirection={isScreenTypeMobile ? 'column' : 'row'}
      justifyContent="center"
      alignItems="center"
    >
      <HeroCard title={title} description={description} isVisible={isVisible} {...props}/>
      <HeroImage />
    </Section>
  );
};

Hero.displayName = 'Hero';

export default Hero;
