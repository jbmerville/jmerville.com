import React from 'react';

const defaultProps = {
  count: 1,
};
const Br = (props: typeof defaultProps) => {
  const { count } = props;
  const brs = [];
  for (let i = 0; i < count; i++) {
    brs.push(<br key={i} />);
  }
  return <>{brs}</>;
};

Br.defaultProps = defaultProps;

export default Br;
