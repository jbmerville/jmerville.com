import React, {
  useEffect,
  useRef,
  useState
} from 'react';

import Button from 'components/Button';
import CSS from 'csstype';
import UseWindowSize from 'hooks/WindowSize';
import { ICard } from 'types';
import { getPaddingsFromWidth } from 'utils';
import { Colors } from 'values';

interface CardProps {
  item: ICard.Card;
  onClick?: () => void;
}
interface Styles {
  container: CSS.Properties;
  imageContainer: CSS.Properties;
  headline: CSS.Properties;
  description: CSS.Properties;
  button: CSS.Properties;
  buttonContainer: CSS.Properties;
}
const Card = (props: CardProps) => {
  const [width, height] = UseWindowSize();
  const ref = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const positionY = window.scrollY;
      setScrollTop(positionY);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  const getBoundary = (min: number, max: number, val: number) => {
    return Math.min(Math.max(min, val), max);
  };

  const getAnimationFactor = (isMobile = false) => {
    const calc = (ref.current ? 100 - (height - ref.current?.getBoundingClientRect().top) : 0) / 5 + 50;
    return isMobile ? getBoundary(0, 1, 1 - calc / 250) : getBoundary(0, 100, calc);
  };

  const { item } = props;
  const { title, description, image, websiteUrl, codeUrl } = item;
  const { url, backgroundColor } = image;

  let styles: Styles = {
    container: {
      display: 'grid',
      gridTemplateColumns:
        '[headline-start excerpt-start cta-start] 1fr [media-start headline-end excerpt-end cta-end copy-start] 1fr [margin-end media-end]',
      gridTemplateRows:
        '[margin-start media-start] 96px [headline-start copy-start] max-content [headline-end excerpt-start] auto [excerpt-end copy-end cta-start] max-content [cta-end] 40px [margin-end media-end]',
      borderRadius: '30px',
      overflow: 'hidden',
      position: 'relative',
      minHeight: '600px',
      width: 'webkit-fill-available',
      background: Colors.GRAY_LIGHT,
      marginLeft: 'auto',
      marginRight: 'auto',
      margin: `${getPaddingsFromWidth(width).TOPBOTTOM} 0px`,
      transform: `matrix(1, 0, 0, 1, 0, ${getAnimationFactor()})`,
    },
    headline: {
      fontSize: '3em',
      lineHeight: '1.125',
      margin: '0px 70px',
      marginBottom: '.5em',
      color: Colors.TEXT,
      gridColumn: 'headline-start/headline-end',
      gridRow: 'headline-start/headline-end',
    },
    description: {
      margin: '0px 70px',
      gridColumn: 'excerpt-start/excerpt-end',
      gridRow: 'excerpt-start/excerpt-end',
      lineHeight: '1.5',
    },
    imageContainer: {
      gridColumn: 'media-start/media-end',
      gridRow: 'media-start/media-end',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: backgroundColor || '',
      backgroundImage: `url("${url}")`,
      backgroundSize: 'cover',
    },
    buttonContainer: {
      position: 'absolute',
      bottom: '60px',
    },
    button: {
      display: 'inline-block',
      marginRight: '20px',
    },
  };

  // Mobile style
  if (width < 600) {
    styles.container.display = 'block';
    styles.imageContainer.height = '400px';
    styles.container.margin = '60px 0px';
    styles.container.gridTemplateColumns =
      '[margin-start] 38px [headline-start excerpt-start cta-start] 1fr [media-start headline-end excerpt-end cta-end copy-start] 1fr [margin-end media-end]';
    styles.container.gridTemplateRows =
      '[margin-start media-start] 96px [headline-start copy-start] max-content [headline-end excerpt-start] auto [excerpt-end copy-end cta-start] max-content [cta-end] 40px [margin-end media-end]';
    styles.container.transform = `matrix(${getAnimationFactor(true)}, 0, 0, ${getAnimationFactor(
      true
    )}, 0, 0)`;
    styles.imageContainer.marginBottom = '50px';
    styles.buttonContainer.position = 'relative';
    styles.buttonContainer.padding = '20px 0';
    styles.buttonContainer.bottom = '0px';
    styles.button.padding = '10px 0';
    styles.description.margin = '20px';
    styles.headline.margin = '20px';
  } else if (width < 1200) {
  }
  const websiteButton = websiteUrl && (
    <div style={styles.button}>
      <Button
        link={{ id: websiteUrl, label: 'View Project', url: '' }}
        backgrounColor={Colors.PRIMARY}
        textColor={Colors.BACKGROUND}
        hoverColor={Colors.SECONDARY}
        showShadow={false}
        width={'130px'}
        icon={{ fontAwesomeIcon: 'fa fa-external-link-square' }}
      />
    </div>
  );
  const codeButton = codeUrl && (
    <div style={styles.button}>
      <Button
        link={{ id: codeUrl, label: 'View Code', url: '' }}
        backgrounColor={Colors.PRIMARY}
        textColor={Colors.BACKGROUND}
        hoverColor={Colors.SECONDARY}
        showShadow={false}
        width={'130px'}
        icon={{ fontAwesomeIcon: 'fa fa-github' }}
      />
    </div>
  );

  return (
    <div style={styles.container} ref={ref}>
      <div style={styles.imageContainer}>
        <div></div>
      </div>
      <h3 style={styles.headline}>{title}</h3>
      <div style={styles.description}>
        {description}
        <div style={styles.buttonContainer}>
          {codeButton}
          {websiteButton}
        </div>
      </div>
    </div>
  );
};

export default Card;
