'use client';

import {motion} from 'framer-motion';
import Link from 'next/link';
import CheckIcon from '@icons/CheckIcon';
import BookingForm from '@components/BookingForm';
import ArrowIcon from '@icons/ArrowIcon';
import rentalConditions from '@data/rentalConditions';
import {useTranslation} from 'react-i18next';
import carSpecs from '@data/car-specs';
import Icon from '@icons/Icon';
import {memo} from 'react';

interface CarDetailClientProps {
  car: Car;
  similarCars: Car[];
}

const CarDetailClient = ({car, similarCars}: CarDetailClientProps) => {
  const {t} = useTranslation('cars');
  return (
    <div className={'bg-gray-50 py-12'}>
      <div className={'mx-auto max-w-7xl px-4'}>
        <Link
          href={'/cars'}
          className={
            'mb-6 inline-flex items-center gap-2 text-gray-600 transition-colors hover:text-gray-900'
          }>
          <ArrowIcon
            width={16}
            height={16}
            className={'rotate-[-90deg]'}
          />
          {t('Nazad na vozila')}
        </Link>

        <div className={'grid gap-8 lg:grid-cols-3'}>
          <div className={'lg:col-span-2'}>
            <motion.div
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              className={'overflow-hidden rounded-xl border bg-white shadow-sm'}>
              <div className={'relative aspect-video overflow-hidden bg-gray-100'}>
                <img
                  src={car.image}
                  alt={car.name}
                  className={'h-full w-full object-cover'}
                />
                {car.available ? null : (
                  <div
                    className={
                      'absolute top-4 right-4 rounded-full bg-red-500 px-4 py-2 font-semibold text-white'
                    }>
                    {t('Rezervisano')}
                  </div>
                )}
              </div>

              <div className={'p-8'}>
                <div className={'mb-6 flex items-start justify-between'}>
                  <div>
                    <h1 className={'mb-2 text-3xl font-bold text-gray-900'}>{car.name}</h1>
                    <p className={'text-lg text-gray-600'}>{car.brand}</p>
                  </div>
                  <div className={'text-right'}>
                    <div className={'flex items-baseline gap-1'}>
                      <span
                        className={
                          'text-4xl font-bold text-gray-900'
                        }>{`${car.pricePerDay}€`}</span>
                    </div>
                    <span className={'text-gray-500'}>{t(' / dan')}</span>
                  </div>
                </div>

                <p className={'mb-8 text-gray-700'}>{t(car.description)}</p>

                <div className={'mb-8 grid gap-4 sm:grid-cols-2'}>
                  {carSpecs(car, t).map(spec => (
                    <div
                      key={spec.label}
                      className={'flex items-center gap-3 rounded-lg border bg-gray-50 p-4'}>
                      <div
                        className={
                          'flex h-10 w-10 items-center justify-center rounded-full bg-blue-100'
                        }>
                        <Icon
                          width={24}
                          height={24}
                          name={spec.icon}
                          className={'text-blue-600'}
                        />
                      </div>
                      <div>
                        <div className={'text-sm text-gray-600'}>{spec.label}</div>
                        <div className={'font-semibold text-gray-900 capitalize'}>{spec.value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <h2 className={'mb-4 text-xl font-semibold text-gray-900'}>
                    {t('Karakteristike')}
                  </h2>
                  <div className={'grid gap-3 sm:grid-cols-2'}>
                    {car.features.map(feature => (
                      <div
                        key={feature}
                        className={'flex items-center gap-2'}>
                        <CheckIcon
                          width={20}
                          height={20}
                          className={'text-green-600'}
                        />
                        <span className={'text-gray-700'}>{t(feature)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.2}}
              className={'mt-8 rounded-xl border bg-white p-8 shadow-sm'}>
              <h2 className={'mb-4 text-xl font-semibold text-gray-900'}>{t('Uslovi najma')}</h2>
              <ul className={'space-y-3 text-gray-700'}>
                {rentalConditions.map(condition => (
                  <li
                    key={condition}
                    className={'flex items-start gap-2'}>
                    <CheckIcon
                      width={20}
                      height={20}
                      className={'mt-0.5 shrink-0 text-blue-600'}
                    />
                    <span>{t(condition)}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{opacity: 0, x: 20}}
            animate={{opacity: 1, x: 0}}
            className={'lg:sticky lg:top-24 lg:self-start'}>
            <BookingForm carName={car.name} />
          </motion.div>
        </div>

        {similarCars.length > 0 ? (
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            className={'mt-16'}>
            <h2 className={'mb-6 text-2xl font-bold text-gray-900'}>{t('Slična vozila')}</h2>
            <div className={'grid gap-6 sm:grid-cols-2 lg:grid-cols-3'}>
              {similarCars.map(similarCar => (
                <Link
                  key={similarCar.id}
                  href={`/cars/${similarCar.id}`}
                  className={
                    'group overflow-hidden rounded-xl border bg-white shadow-sm transition-shadow hover:shadow-lg'
                  }>
                  <div className={'relative aspect-[4/3] overflow-hidden bg-gray-100'}>
                    <img
                      src={similarCar.image}
                      alt={similarCar.name}
                      className={
                        'h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
                      }
                    />
                  </div>
                  <div className={'p-4'}>
                    <h3 className={'mb-1 font-semibold text-gray-900'}>{similarCar.name}</h3>
                    <div className={'flex items-baseline gap-1'}>
                      <span
                        className={
                          'text-xl font-bold text-gray-900'
                        }>{`${similarCar.pricePerDay}€`}</span>
                      <span className={'text-sm text-gray-500'}>{t(' / dan')}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        ) : null}
      </div>
    </div>
  );
};

export default memo(CarDetailClient);
