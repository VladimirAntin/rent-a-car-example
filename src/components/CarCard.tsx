'use client';

import {motion} from 'framer-motion';
import Link from 'next/link';
import CarIcon from '@icons/CarIcon';
import CheckIcon from '@icons/CheckIcon';
import UsersIcon from '@icons/UsersIcon';
import {useTranslation} from 'react-i18next';
import {memo} from 'react';

type CarCardProps = {
  car: Car;
  index?: number;
};

const CarCard = ({car, index = 0}: CarCardProps) => {
  const {t} = useTranslation('cars');
  return (
    <Link href={`/cars/${car.id}`}>
      <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: index * 0.1}}
        className={
          'group relative overflow-hidden rounded-xl border bg-white shadow-sm transition-shadow hover:shadow-lg'
        }>
        {car.available ? null : (
          <div
            className={
              'absolute top-3 right-3 z-10 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white'
            }>
            {t('Rezervisano')}
          </div>
        )}

        <div className={'relative aspect-[4/3] overflow-hidden bg-gray-100'}>
          <img
            src={car.image}
            alt={car.name}
            className={
              'h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
            }
          />
        </div>

        <div className={'p-5'}>
          <div className={'mb-2 flex items-start justify-between'}>
            <div>
              <h3 className={'text-lg font-semibold text-gray-900'}>{car.name}</h3>
              <p className={'text-sm text-gray-500'}>{car.brand}</p>
            </div>
            <span className={'rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700'}>
              {car.year}
            </span>
          </div>

          <div className={'mb-4 grid grid-cols-2 gap-3 text-sm text-gray-600'}>
            <div className={'flex items-center gap-2'}>
              <UsersIcon
                width={16}
                height={16}
              />
              <span>{t('{{seats}} sedišta', {seats: car.seats})}</span>
            </div>
            <div className={'flex items-center gap-2'}>
              <CarIcon
                width={16}
                height={16}
              />
              <span>{t(car.transmission === 'automatic' ? 'Automatski' : 'Manuelni')}</span>
            </div>
          </div>

          <div className={'mb-3 flex flex-wrap gap-1'}>
            {car.features.slice(0, 2).map(feature => (
              <span
                key={feature}
                className={
                  'flex items-center gap-1 rounded-full bg-gray-50 px-2 py-0.5 text-xs text-gray-600'
                }>
                <CheckIcon
                  width={12}
                  height={12}
                  className={'text-green-500'}
                />
                {t(feature)}
              </span>
            ))}
          </div>

          <div className={'mb-4 border-t pt-4'}>
            <div className={'flex items-baseline gap-1'}>
              <span className={'text-2xl font-bold text-gray-900'}>{`${car.pricePerDay}€`}</span>
              <span className={'text-sm text-gray-500'}>{t(' / dan')}</span>
            </div>
          </div>

          <div
            className={
              car.available
                ? 'block w-full rounded-lg bg-blue-600 px-4 py-2 text-center font-medium text-white transition-colors hover:bg-blue-700'
                : 'block w-full cursor-not-allowed rounded-lg bg-gray-200 px-4 py-2 text-center font-medium text-gray-500'
            }>
            {t(car.available ? 'Pogledaj detalje' : 'Nije dostupno')}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default memo(CarCard);
