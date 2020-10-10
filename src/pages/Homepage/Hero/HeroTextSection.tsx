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
import { Colors } from 'values';

import { CONTENT } from './hero-config';

interface HeroTextSectionProp {
  isVisible: boolean;
}

const HeroTextSection = (props: HeroTextSectionProp) => {
  const [width] = useWindowSize();
  const { theme } = useTheme();
  const { isVisible } = props;

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

  return (
    <div style={styles.cardContainer}>
      <Margin horizontal={'SMALL'} vertical="SMALL">
        <Animate direction={'BOTTOM'} isVisible={isVisible} speed="0.5x">
          <StyledText color={theme.primary} styleType="TITLE">
            {CONTENT.title.primary}
          </StyledText>
        </Animate>
        <Animate direction={'BOTTOM'} isVisible={isVisible}>
          <Margin vertical="SMALL">
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
        {width > 600 && (
          <Animate direction={'BOTTOM'} isVisible={isVisible} speed="1.5x">
            <Margin top="SMALL">
              <div style={styles.buttonContainer}>
                <Margin right="SMALL">
                  <Button text={{ link: { id: 'projects', label: 'Projects', url: '' }, color: Colors.WHITE }} />
                </Margin>
                <Button text={{ link: { id: 'experience', label: 'Experience', url: '' }, color: Colors.WHITE }} />
              </div>
            </Margin>
          </Animate>
        )}
      </Margin>
    </div>
  );
};

export default HeroTextSection;
