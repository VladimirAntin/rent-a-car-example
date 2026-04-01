import {FC, memo} from 'react';

const PlaneIcon: FC<Icon> = ({width = 24, height = 24, className}) => (
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
    <path
      d={
        'M17.8 19.2 16 11l3.5-3.5C21 6 21 4 19 2c-2-2-4-2-5.5-.5L10 5 1.8 6.2c-.5.1-.9.5-.5 1.2l2.8 4.8L2 14c0 2 1 3.5 2.5 3.5S8 16 8 16l2 2c0 1.5 1.5 2.5 3.5 2.5l1.7-2.1 4.8 2.8c.7.4 1.1 0 1.2-.5z'
      }
    />
  </svg>
);

export default memo(PlaneIcon);
