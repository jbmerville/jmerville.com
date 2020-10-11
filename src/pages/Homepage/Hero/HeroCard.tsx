import React from 'react';

import {
  Animate,
  Button,
  Margin,
  SeparationBar,
  StyledText
} from 'components';
import {
  useTheme,
  useWindowSize
} from 'hooks';
import { Styles } from 'types';
import { ScreenSize } from 'values';

import { CONTENT } from './hero-config';

interface HeroCardProp {
  isVisible: boolean;
  projectsRef: any;
  statisticsRef: any;
}

const HeroCard = (props: HeroCardProp) => {
  const [width] = useWindowSize();
  const { theme } = useTheme();
  const { isVisible, projectsRef, statisticsRef } = props;

  const styles: Styles = {
    cardContainer: {
      background: theme.card,
      borderRadius: '15px',
      maxWidth: '515px',
      height: 'fit-content',
      position: 'relative',
    },
    buttonContainer: {
      display: 'flex',
      flexFlow: 'row',
    },
  };

  if (width < ScreenSize.PHONE) {
    styles.cardContainer.padding = '20px';
  }

  return (
    <div style={styles.cardContainer}>
      <Margin horizontal="SMALL" vertical="SMALL">
        <Animate direction={'BOTTOM'} isVisible={isVisible} speed="0.5x">
          <Margin top="SMALL">
            <StyledText color={theme.primary} styleType="TITLE">
              {CONTENT.title.primary}
            </StyledText>
          </Margin>
        </Animate>
        <Animate direction={'BOTTOM'} isVisible={isVisible}>
          <Margin vertical="REGULAR">
            <StyledText color={theme.text} styleType="SUBTITLE">
              {CONTENT.title.secondary}
            </StyledText>
          </Margin>
        </Animate>
        <Margin bottom="SMALL">
          <Animate direction={'BOTTOM'} isVisible={isVisible}>
            <SeparationBar />
          </Animate>
        </Margin>
        <Animate direction={'BOTTOM'} isVisible={isVisible}>
          <StyledText color={theme.text} styleType="PARAGRAPH">
            {CONTENT.description}
          </StyledText>
        </Animate>
        <Animate direction={'BOTTOM'} isVisible={isVisible} speed="1.5x">
          <div style={styles.buttonContainer}>
            <Margin right="SMALL" vertical="SMALL">
              <Button
                text="Projects"
                onClick={() => {
                  projectsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              />
            </Margin>
            <Margin top="SMALL">
              <Button
                text="Cool stats"
                onClick={() => {
                  statisticsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              />
            </Margin>
          </div>
        </Animate>
      </Margin>
    </div>
  );
};

export default HeroCard;
