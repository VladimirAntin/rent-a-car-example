import {FC, memo} from 'react';

const CarIcon: FC<Icon> = ({width = 24, height = 24, className}) => (
  <svg
    xmlns={'http://www.w3.org/2000/svg'}
    width={width}
    height={height}
    viewBox={'0 0 24 24'}
    fill={'none'}
    stroke={'currentColor'}
    strokeWidth={'2'}
    strokeLinecap={'round'}
    strokeLinejoin={'round'}
    className={className}>
    <rect
      width={'18'}
      height={'8'}
      x={'3'}
      y={'11'}
      rx={'2'}
    />
    <path d={'M5 11V9a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2'} />
    <circle
      cx={'9'}
      cy={'17'}
      r={'1'}
    />
    <circle
      cx={'15'}
      cy={'17'}
      r={'1'}
    />
  </svg>
);

export default memo(CarIcon);
