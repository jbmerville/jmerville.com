import React, {
  useEffect,
  useState
} from 'react';

import { Section } from 'components';
import { useWindowSize } from 'hooks';
import { ScreenSize } from 'values';

import HeroCard from './HeroCard';
import HeroImage from './HeroImage';

interface HeroProps {
  projectsRef: any;
  statisticsRef: any;
}
const Hero = (props: HeroProps) => {
  const { projectsRef, statisticsRef } = props;
  const [width] = useWindowSize();
  const [isVisible, setIsVisible] = useState(false);
  const isScreenTypeMobile = width < ScreenSize.PHONE;

  useEffect(() => {
    setTimeout(() => setIsVisible(true));
  });

  return (
    <Section height={isScreenTypeMobile ? 'fit-content' : '90%'} flexDirection={isScreenTypeMobile ? 'column' : 'row'}>
      <HeroCard statisticsRef={statisticsRef} projectsRef={projectsRef} isVisible={isVisible} />
      <HeroImage />
    </Section>
  );
};

Hero.displayName = 'Hero';

export default Hero;
