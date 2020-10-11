import React, {
  useEffect,
  useState
} from 'react';

import { Section } from 'components';
import { useWindowSize } from 'hooks';
import { ScreenSize } from 'values';

import HeroCard from './HeroCard';
import HeroImage from './HeroImage';

const Hero = () => {
  const [width] = useWindowSize();
  const [isVisible, setIsVisible] = useState(false);
  const isScreenTypeMobile = width < ScreenSize.PHONE;

  useEffect(() => {
    setTimeout(() => setIsVisible(true));
  });

  return (
    <Section height={isScreenTypeMobile ? 'fit-content' : '90%'} flexDirection={isScreenTypeMobile ? 'column' : 'row'}>
      <HeroCard isVisible={isVisible} />
      <HeroImage />
    </Section>
  );
};

export default Hero;
