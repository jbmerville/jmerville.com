import React, { useState } from 'react';

import {
  Margin,
  StyledText
} from 'components';
import {
  useTheme,
  useWindowSize
} from 'hooks';
import { Styles } from 'types';
import { ScreenSize } from 'values';

import { Experience } from './config';

interface WorkHistoryCard {
  floatLeft: boolean;
  isFirstCard: boolean;
  isLastCard: boolean;
  experience: Experience;
}
const WorkHistoryCard = (props: WorkHistoryCard) => {
  const { theme, isDark } = useTheme();
  const [width] = useWindowSize();
  const [isHover, setIsHover] = useState(false);

  const { floatLeft, experience, isFirstCard, isLastCard } = props;
  const { company, title, location, startDate, endDate, description, link, logoPath } = experience;

  const isScreenTypeMobile = width < ScreenSize.PHONE;
  const floatLeftOrMobile = isScreenTypeMobile ? false : floatLeft;

  const styles: Styles = {
    outerContainer: {
      width: '100%',
      display: 'flex',
      flexDirection: floatLeftOrMobile ? 'row' : 'row-reverse',
      justifyContent: 'space-evenly',
    },
    infoContainer: {
      paddingTop: '5px',
      width: '450px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: floatLeftOrMobile ? 'right' : 'left',
      flexDirection: 'column',
      textAlign: floatLeftOrMobile ? 'right' : 'left',
    },
    middleBarContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    cardContainer: {
      margin: '20px 0',
      borderRadius: '10px',
      background: theme.card,
      maxWidth: '450px',
      textAlign: floatLeftOrMobile ? 'left' : 'right',
      textDecoration: 'none',
      boxShadow: isHover
        ? isDark
          ? 'rgb(18 18 18 / 55%) 0px 7px 14px, rgba(0, 0, 0, 0.08) 0px 3px 6px'
          : '0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08)'
        : '',
      transition: 'all .15s ease',
      transform: isHover ? 'translateY(-1px)' : '',
    },
    barContainer: {
      height: '100%',
    },
    bar: {
      width: '3px',
      height: '100%',
      background: theme.highlight,
    },
    logoContainer: {
      height: '40px',
      width: '40px',
      display: 'grid',
      justifyContent: 'center',
      alignItems: 'center',
      background: theme.card,
      borderRadius: '40px',
      padding: '10px',
      margin: '10px 20px',
    },
    logo: {
      height: '30px',
    },
  };

  const renderBar = (isVisible: boolean) => (
    <div style={styles.barContainer}>
      <div style={{ ...styles.bar, background: isVisible ? theme.highlight : 'none' }} />
    </div>
  );

  return (
    <div style={styles.outerContainer}>
      {!isScreenTypeMobile && (
        <div style={styles.infoContainer}>
          <StyledText color={theme.text} styleType="DESCRIPTION">
            {startDate} - {endDate}
          </StyledText>
          <StyledText color={theme.text} styleType="DESCRIPTION">
            {location}
          </StyledText>
        </div>
      )}
      <div style={styles.middleBarContainer}>
        {renderBar(!isFirstCard)}
        <div style={styles.logoContainer}>
          <img style={styles.logo} alt="logo" src={logoPath} />
        </div>
        {renderBar(!isLastCard)}
      </div>
      <a href={link} style={styles.cardContainer} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
        <Margin horizontal="REGULAR" vertical="REGULAR">
          <StyledText color={theme.text} styleType="PARAGRAPH" bold>
            {company}
          </StyledText>
          <StyledText color={theme.text} styleType="PARAGRAPH" bold>
            {title}
          </StyledText>
          <StyledText color={theme.text} styleType="DESCRIPTION">
            {description}
          </StyledText>
        </Margin>
      </a>
    </div>
  );
};

export default WorkHistoryCard;
