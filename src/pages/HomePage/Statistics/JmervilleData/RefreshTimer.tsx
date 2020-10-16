import React, {
  useEffect,
  useState
} from 'react';

import { StyledText } from 'components';
import moment from 'moment';
import { Colors } from 'values';

import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface RefreshTimerProps {
  color: Colors;
  lastRefreshedAt: number;
}

const RefreshTimer = (props: RefreshTimerProps) => {
  const { color, lastRefreshedAt } = props;
  const [time, setTime] = useState(moment.now());
  useEffect(() => {
    const interval = setInterval(() => setTime(moment.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <StyledText color={color} styleType="UNDERTEXT">
      <FontAwesomeIcon icon={faInfoCircle} /> Refreshes every minute. Last refreshed {moment(time).diff(lastRefreshedAt, 's')}s ago.
    </StyledText>
  );
};

export default RefreshTimer;
