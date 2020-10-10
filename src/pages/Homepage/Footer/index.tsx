import React from 'react';

import {
  Link,
  Margin,
  Section,
  StyledText
} from 'components';
import {
  useTheme,
  useWindowSize
} from 'hooks';
import { Styles } from 'types';

import {
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  const [width] = useWindowSize();
  const { theme } = useTheme();

  const styles: Styles = {
    container: {
      height: '100%',
      width: '100%',
      display: 'flex',
    },
    section: {
      height: '100%',
      width: '300px',
      display: 'flex',
      flexDirection: 'column',
      marginRight: '20px',
    },
    link: {
      color: theme.accent,
    },
  };

  return (
    <Section justifyContent="flex-end">
      <Margin vertical="SMALL">
        <div style={styles.container}>
          <div style={styles.section}>
            <StyledText styleType="SUBTITLE" color={theme.text}>
              About
            </StyledText>
            <StyledText styleType="PARAGRAPH" color={theme.text}>
              Hero image designed by Stories -
              <Link url="https://www.freepik.com" onHoverColor={theme.accent}>
                Freepik.com
              </Link>
            </StyledText>
          </div>
          <div style={styles.section}>
            <StyledText styleType="SUBTITLE" color={theme.text}>
              Connect
            </StyledText>
            <StyledText styleType="PARAGRAPH" color={theme.text}>
              Connect with me on social medias and lets start a conversation!
            </StyledText>
            <StyledText styleType="PARAGRAPH" color={theme.text}>
              <Margin right="SMALL" display="inline-block">
                <Link url="https://www.linkedin.com/in/jbmerville/" onHoverColor={theme.accent}>
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </Link>
              </Margin>
              <Margin right="SMALL" display="inline-block">
                <Link url="https://github.com/jbmerville" onHoverColor={theme.accent}>
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </Link>
              </Margin>
              <Link url="mailto:jb.merville@gmail.com" onHoverColor={theme.accent}>
                <FontAwesomeIcon icon={faEnvelope} size="lg" />
              </Link>
            </StyledText>
          </div>
        </div>
      </Margin>
    </Section>
  );
};

export default Footer;
