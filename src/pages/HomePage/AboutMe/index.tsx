import React, { forwardRef } from 'react';

import { Br, Section, StyledText } from 'components';
import { useTheme } from 'hooks';

import { CONTENT } from './config';


const AboutMe = forwardRef((props: {}, ref: any) => {
  const { theme } = useTheme();

  return (
    <Section ref={ref} title="About me" background={theme.card}>
      <StyledText color={theme.text} styleType="DESCRIPTION" textAlign="justify">
        {CONTENT.map((item) => (
          <div key={item}>
            {item}
            <Br key={item} />
          </div>
        ))}
      </StyledText>
    </Section>
  );
});

AboutMe.displayName = 'AboutMe';


export default AboutMe;
