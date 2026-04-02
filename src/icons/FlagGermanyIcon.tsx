import {FC, memo} from 'react';

const Icon: FC<Icon> = ({width = 64, height = 64, className}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={'0 0 36 36'}
      className={className}>
      <path
        fill={'#ffcd05'}
        d={'M0 27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-4H0z'}></path>
      <path
        fill={'#ed1f24'}
        d={'M0 14h36v9H0z'}></path>
      <path
        fill={'#141414'}
        d={'M32 5H4a4 4 0 0 0-4 4v5h36V9a4 4 0 0 0-4-4'}></path>
    </svg>
  );
};

export default memo(Icon);
