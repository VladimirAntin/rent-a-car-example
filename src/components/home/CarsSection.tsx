'use client';
import {motion} from 'framer-motion';
import {cars} from '@data/cars';
import CarCard from '@components/CarCard';
import Link from 'next/link';
import {useTranslation} from 'react-i18next';

const CarsSection = () => {
  const {t} = useTranslation('home');
  const featuredCars = cars.filter(car => car.available).slice(0, 3);

  return (
    <section className={'bg-gray-50 py-16'}>
      <div className={'mx-auto max-w-7xl px-4'}>
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          className={'mb-12 text-center'}>
          <h2 className={'mb-4 text-3xl font-bold text-gray-900 md:text-4xl'}>
            {t('Izdvojena vozila')}
          </h2>
          <p className={'mx-auto max-w-2xl text-gray-600'}>
            {t('Proverite naše najpopularnije automobile koji su spremni za vaše avanture')}
          </p>
        </motion.div>

        <div className={'grid gap-6 md:grid-cols-2 lg:grid-cols-3'}>
          {featuredCars.map((car, index) => (
            <CarCard
              key={car.id}
              car={car}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          viewport={{once: true}}
          className={'mt-12 text-center'}>
          <Link
            href={'/cars'}
            className={
              'inline-block rounded-lg border border-blue-600 bg-blue-600 px-8 py-3 font-medium text-white transition-colors hover:bg-blue-700'
            }>
            {t('Pogledaj sva vozila')}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CarsSection;
