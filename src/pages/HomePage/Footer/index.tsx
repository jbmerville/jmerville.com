import React from 'react';

import { Link, Margin, Section, StyledText } from 'components';
import { useTheme, useWindowSize } from 'hooks';
import { Styles } from 'types';
import { ScreenSize } from 'values';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { CONTENT } from './config';

const Footer = () => {
  const { theme } = useTheme();
  const [width] = useWindowSize();

  const isScreenTypeMobile = width < ScreenSize.PHONE;

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
      marginBottom: '10px',
      marginTop: '10px',
    },
    link: {
      color: theme.accent,
    },
  };

  if (isScreenTypeMobile) {
    styles.container.flexDirection = 'column';
  }

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
              Social
            </StyledText>
            <StyledText styleType="PARAGRAPH" color={theme.text}>
              Connect with me on social medias and lets start a conversation!
            </StyledText>
            <StyledText styleType="PARAGRAPH" color={theme.text}>
              {CONTENT.map((item, index) => {
                const isLastItem = index === CONTENT.length - 1;
                const { icon, link } = item;

                return isLastItem ? (
                  <Link key={link.label} url={link.url} onHoverColor={theme.accent}>
                    <FontAwesomeIcon icon={icon} size="2x" />
                  </Link>
                ) : (
                  <Margin key={link.label} right="SMALL" display="inline-block">
                    <Link url={link.url} onHoverColor={theme.accent}>
                      <FontAwesomeIcon icon={icon} size="2x" />
                    </Link>
                  </Margin>
                );
              })}
            </StyledText>
          </div>
        </div>
      </Margin>
    </Section>
  );
};

export default Footer;
