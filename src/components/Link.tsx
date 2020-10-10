import React, {
  ReactNode,
  useState
} from 'react';

import { Style } from 'types';
import { Colors } from 'values';

interface LinkProps {
  children: ReactNode;
  offHoverColor?: Colors;
  onHoverColor?: Colors;
  url: string;
}
const Link = (props: LinkProps) => {
  const { children, offHoverColor, onHoverColor, url } = props;
  const [isHover, setIsHover] = useState(false);
  const color = isHover ? onHoverColor : offHoverColor;

  const style: Style = {
    color: color || 'inherit',
  };

  return (
    <a onMouseOver={() => setIsHover(true)} onMouseOut={() => setIsHover(false)} style={style} href={url}>
      {children}
    </a>
  );
};

export default Link;
