import React from 'react';

import {
  Link,
  Section,
  StyledText
} from 'components';
import Footer from 'pages/HomePage/Footer';
import { Colors } from 'values';

const NotFound = () => {
  return (
    <>
      <Section background={Colors.GRAY_LIGHT} title="404 page not found :(" height="90%">
        <StyledText color={Colors.PRIMARY} styleType="PARAGRAPH">
          Are you lost? Go back to the <Link url="/">home page</Link>.
        </StyledText>
      </Section>
      <Footer></Footer>
    </>
  );
};

export default NotFound;
