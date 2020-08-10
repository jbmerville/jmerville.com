import React from 'react';

interface BrProps {
  count: number;
}
const Br = (props: BrProps) => {
  const { count } = props;
  const brs = [];
  for (let i = 0; i < count; i++) {
    brs.push(<br key={i} />);
  }
  return <>{brs}</>;
};

export default Br;
