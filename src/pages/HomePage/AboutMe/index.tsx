import React, { useRef } from 'react';

import {
  Section,
  StyledText
} from 'components';
import { useTheme } from 'hooks';

const AboutMe = () => {
  const { theme } = useTheme();
  const ref = useRef(null);

  return (
    <Section ref={ref} title="About me" alignItems="flex-end" background={theme.card}>
      <StyledText color={theme.text} styleType="DESCRIPTION">
        Coming soon!
      </StyledText>
    </Section>
  );
};

export default AboutMe;
