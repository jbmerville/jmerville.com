import React, { useRef } from 'react';

import {
  Br,
  Section,
  StyledText
} from 'components';
import { useTheme } from 'hooks';

import { CONTENT } from './config';

const AboutMe = () => {
  const { theme } = useTheme();
  const ref = useRef(null);

  return (
    <Section ref={ref} title="About me" alignItems="flex-end" background={theme.card}>
      <StyledText color={theme.text} styleType="DESCRIPTION" textAlign="justify">
        {CONTENT.map((item) => (
          <>
            {item}
            <Br />
          </>
        ))}
      </StyledText>
    </Section>
  );
};

export default AboutMe;
