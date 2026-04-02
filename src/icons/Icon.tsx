'use client';

import {FC, memo} from 'react';
import ArrowIcon from '@icons/ArrowIcon';
import AwardIcon from '@icons/AwardIcon';
import CalendarIcon from '@icons/CalendarIcon';
import CarIcon from '@icons/CarIcon';
import CheckIcon from '@icons/CheckIcon';
import ClockIcon from '@icons/ClockIcon';
import FacebookIcon from '@icons/FacebookIcon';
import FilterIcon from '@icons/FilterIcon';
import FuelIcon from '@icons/FuelIcon';
import GaugeIcon from '@icons/GaugeIcon';
import HeartIcon from '@icons/HeartIcon';
import HomeIcon from '@icons/HomeIcon';
import InstagramIcon from '@icons/InstagramIcon';
import LocationIcon from '@icons/LocationIcon';
import MailIcon from '@icons/MailIcon';
import PhoneIcon from '@icons/PhoneIcon';
import PlaneIcon from '@icons/PlaneIcon';
import SearchIcon from '@icons/SearchIcon';
import SendIcon from '@icons/SendIcon';
import ShieldCheckIcon from '@icons/ShieldCheckIcon';
import TargetIcon from '@icons/TargetIcon';
import TwitterIcon from '@icons/TwitterIcon';
import UsersIcon from '@icons/UsersIcon';
import ZapIcon from '@icons/ZapIcon';

const Icon = ({name, ...props}: {name: IconName} & Icon) => {
  const icons: Record<IconName, FC<Icon>> = {
    arrow: ArrowIcon,
    award: AwardIcon,
    calendar: CalendarIcon,
    car: CarIcon,
    check: CheckIcon,
    clock: ClockIcon,
    facebook: FacebookIcon,
    filter: FilterIcon,
    fuel: FuelIcon,
    gauge: GaugeIcon,
    heart: HeartIcon,
    home: HomeIcon,
    instagram: InstagramIcon,
    location: LocationIcon,
    mail: MailIcon,
    phone: PhoneIcon,
    plane: PlaneIcon,
    search: SearchIcon,
    send: SendIcon,
    shieldCheck: ShieldCheckIcon,
    target: TargetIcon,
    twitter: TwitterIcon,
    users: UsersIcon,
    zap: ZapIcon,
  };

  const IconComponent = icons[name];

  return IconComponent ? <IconComponent {...props} /> : null;
};

export default memo(Icon);
