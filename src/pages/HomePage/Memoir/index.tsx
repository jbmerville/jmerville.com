import React, {
  forwardRef,
  useRef
} from 'react';

import {
  Animate,
  Button,
  Margin,
  SeparationBar,
  StyledText
} from 'components';
import Section from 'components/Section';
import {
  useIsComponentVisible,
  useTheme,
  useWindowSize
} from 'hooks';
import ReactGA from 'react-ga';
import { Styles } from 'types';
import { ScreenSize } from 'values';

import { CONTENT } from './config';

const Memoir = forwardRef((props: {}, ref: any) => {
  const { theme, isDark } = useTheme();
  const [width] = useWindowSize();
  const cardRef = useRef(null);
  const isVisible = useIsComponentVisible(cardRef, 300);

  const { title, tagline, logoPath, paragraphs, links } = CONTENT;
  const isScreenTypeMobile = width < ScreenSize.PHONE;

  const styles: Styles = {
    card: {
      display: 'flex',
      flexDirection: isScreenTypeMobile ? 'column' : 'row',
      alignItems: isScreenTypeMobile ? 'center' : 'flex-start',
      width: '100%',
      background: theme.card,
      borderRadius: '15px',
      boxShadow: isDark ? 'rgb(18 18 18 / 55%) 0px 7px 14px, rgba(0, 0, 0, 0.08) 0px 3px 6px' : '0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08)',
    },
    logoContainer: {
      flexShrink: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      width: isScreenTypeMobile ? '140px' : '180px',
      height: isScreenTypeMobile ? '140px' : '180px',
      borderRadius: '24px',
    },
    textContainer: {
      flexGrow: 1,
    },
    buttonContainer: {
      display: 'flex',
      flexFlow: 'row wrap',
    },
  };

  const trackClick = (label: string) => {
    ReactGA.event({ category: 'Memoir', action: 'Click link', label });
  };

  return (
    <Section ref={ref} title={title} background={theme.background}>
      <div ref={cardRef} style={styles.card}>
        <Margin horizontal="SMALL" vertical="SMALL">
          <Animate direction={'BOTTOM'} isVisible={isVisible}>
            <div style={styles.logoContainer}>
              <img style={styles.logo} alt="Memoir logo" src={logoPath} />
            </div>
          </Animate>
        </Margin>
        <div style={styles.textContainer}>
          <Margin horizontal="SMALL" vertical="SMALL">
            <Animate direction={'BOTTOM'} isVisible={isVisible}>
              <StyledText color={theme.text} styleType="SUBTITLE">
                {tagline}
              </StyledText>
            </Animate>
            <Margin vertical="SMALL">
              <Animate direction={'BOTTOM'} isVisible={isVisible}>
                <SeparationBar />
              </Animate>
            </Margin>
            <Animate direction={'BOTTOM'} isVisible={isVisible} speed="1.5x">
              <StyledText color={theme.text} styleType="DESCRIPTION" textAlign="justify">
                {paragraphs.map((paragraph) => (
                  <Margin key={paragraph} bottom="SMALL" size="100%">
                    {paragraph}
                  </Margin>
                ))}
              </StyledText>
              <div style={styles.buttonContainer}>
                <Margin right="SMALL" top="SMALL">
                  <Button text={links.website.label} url={links.website.url} newTab onClickLink={() => trackClick(links.website.label)} />
                </Margin>
                <Margin top="SMALL">
                  <Button text={links.app.label} url={links.app.url} newTab onClickLink={() => trackClick(links.app.label)} />
                </Margin>
              </div>
            </Animate>
          </Margin>
        </div>
      </div>
    </Section>
  );
});

Memoir.displayName = 'Memoir';

export default Memoir;
