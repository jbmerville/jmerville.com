import React, {
  useEffect,
  useRef,
  useState
} from 'react';

import Button from 'components/Button';
import CSS from 'csstype';
import UseWindowSize from 'hooks/WindowSize';
import { ICard } from 'types';
import { Colors } from 'values';

interface CardProps {
  item: ICard.Card;
  onClick?: () => void;
}
interface Styles {
  container: CSS.Properties;
  rightContainer: CSS.Properties;
  headline: CSS.Properties;
  description: CSS.Properties;
  button: CSS.Properties;
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

  const getAnimationFactor = () => {
    const res = (ref.current ? 100 - (height - ref.current?.getBoundingClientRect().top) : 0) / 5 + 50;
    return res >= 0 ? (res <= 100 ? res : 100) : 0;
  };

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
      marginBottom: '150px',
      marginTop: '150px',
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
    rightContainer: {
      gridColumn: 'media-start/media-end',
      gridRow: 'media-start/media-end',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.PRIMARY,
    },
    button: {
      position: 'absolute',
      bottom: '60px',
    },
  };

  // Mobile style
  if (width < 600) {
  } else if (width < 1200) {
  }

  const { title, description, image, link, type } = props.item;
  return (
    <div style={styles.container} ref={ref}>
      <div style={styles.rightContainer}>
        <div></div>
      </div>
      <h3 style={styles.headline}>{title.primary}</h3>
      <div style={styles.description}>
        {description}
        <div style={styles.button}>
          <Button
            link={{ id: title.primary.replace(' ', ''), label: 'View Project', url: '' }}
            backgrounColor={Colors.TEXT}
            textColor={Colors.BACKGROUND}
            showShadow={false}
            hoverColor={Colors.TEXT}
            size="0.8em"
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
