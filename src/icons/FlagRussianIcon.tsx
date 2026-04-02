import {FC, memo} from 'react';

const Icon: FC<Icon> = ({width = 64, height = 64, className}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={'0 0 72 72'}
      className={className}>
      <path
        fill={'#d22f27'}
        d={'M5 17h62v38H5z'}></path>
      <path
        fill={'#fff'}
        d={'M5 17h62v13H5z'}></path>
      <path
        fill={'#1e50a0'}
        d={'M5 30h62v12H5z'}></path>
      <path
        fill={'none'}
        stroke={'#000'}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
        strokeWidth={'2'}
        d={'M5 17h62v38H5z'}></path>
    </svg>
  );
};

export default memo(Icon);
