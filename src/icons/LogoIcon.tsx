import {FC, memo} from 'react';

const LogoIcon: FC<Icon> = ({width = 40, height = 40, className}) => (
  <svg
    xmlns={'http://www.w3.org/2000/svg'}
    width={width}
    height={height}
    viewBox={'0 0 48 48'}
    fill={'none'}>
    <defs>
      <linearGradient
        id={'logoGrad'}
        x1={'0'}
        y1={'0'}
        x2={'48'}
        y2={'48'}
        gradientUnits={'userSpaceOnUse'}>
        <stop stopColor={'#2563eb'} />
        <stop
          offset={'1'}
          stopColor={'#1e40af'}
        />
      </linearGradient>
    </defs>

    <rect
      width={'48'}
      height={'48'}
      rx={'10'}
      fill={'url(#logoGrad)'}
    />

    <rect
      x={'7'}
      y={'26'}
      width={'34'}
      height={'12'}
      rx={'2'}
      fill={'white'}
    />

    <path
      d={'M12 26 L16 17 L32 17 L36 26 Z'}
      fill={'white'}
    />

    <path
      d={'M17 17.5 L15 25 L23 25 L23 17.5 Z'}
      fill={'#1e40af'}
      fillOpacity={'0.45'}
      rx={'1'}
    />
    <path
      d={'M23 17.5 L23 25 L33 25 L31 17.5 Z'}
      fill={'#1e40af'}
      fillOpacity={'0.45'}
    />

    <rect
      x={'7'}
      y={'35'}
      width={'34'}
      height={'2'}
      rx={'1'}
      fill={'#dbeafe'}
    />

    <circle
      cx={'15'}
      cy={'38'}
      r={'5'}
      fill={'#1e40af'}
    />
    <circle
      cx={'15'}
      cy={'38'}
      r={'2.5'}
      fill={'white'}
    />
    <circle
      cx={'33'}
      cy={'38'}
      r={'5'}
      fill={'#1e40af'}
    />
    <circle
      cx={'33'}
      cy={'38'}
      r={'2.5'}
      fill={'white'}
    />
  </svg>
);

export default memo(LogoIcon);
