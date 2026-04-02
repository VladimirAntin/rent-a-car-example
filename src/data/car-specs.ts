import {TFunction} from 'i18next';

const specs = (car: Car, t: TFunction): {icon: IconName; label: string; value: string}[] => [
  {
    icon: 'users',
    label: t('Broj sedišta'),
    value: t('{{seats}} sedišta', {seats: car.seats}),
  },
  {
    icon: 'gauge',
    label: t('Menjač'),
    value: t(car.transmission === 'automatic' ? 'Automatski' : 'Manuelni'),
  },
  {
    icon: 'fuel',
    label: t('Gorivo'),
    value: t(car.fuelType),
  },
  {
    icon: 'calendar',
    label: t('Godište'),
    value: car.year.toString(),
  },
];

export default specs;
