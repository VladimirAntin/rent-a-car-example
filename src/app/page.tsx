'use client';

import {motion} from 'framer-motion';
import Link from 'next/link';
import {HeroSection} from '@components/HeroSection';
import {CarCard} from '@components/CarCard';
import {cars} from '@data/cars';

const whyChooseUs = [
  {
    title: 'Najbolje cene',
    description: 'Garantujemo najkonkurentnije cene na tržištu sa transparentnim uslovima najma.',
  },
  {
    title: 'Širok izbor',
    description: 'Od ekonomičnih modela do luksuznih vozila - imamo sve što vam je potrebno.',
  },
  {
    title: 'Fleksibilnost',
    description: 'Prilagodite period najma vašim potrebama - od nekoliko sati do nekoliko meseci.',
  },
  {
    title: 'Čista vozila',
    description: 'Sva naša vozila se detaljno čiste i dezinfikuju pre svakog iznajmljivanja.',
  },
  {
    title: 'Bez skrivenih troškova',
    description: 'Puna transparentnost - sve troškove ćete znati unapred, bez iznenađenja.',
  },
  {
    title: 'Dostava vozila',
    description: 'Dostavićemo automobil na adresu po vašem izboru u Beogradu i okolini.',
  },
];

export default function HomePage() {
  const featuredCars = cars.filter(car => car.available).slice(0, 3);

  return (
    <div>
      <HeroSection />

      <section className={'bg-gray-50 py-16'}>
        <div className={'mx-auto max-w-7xl px-4'}>
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            className={'mb-12 text-center'}>
            <h2 className={'mb-4 text-3xl font-bold text-gray-900 md:text-4xl'}>
              {'Izdvojena vozila'}
            </h2>
            <p className={'mx-auto max-w-2xl text-gray-600'}>
              {'Proverite naše najpopularnije automobile koji su spremni za vaše avanture'}
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
              {'Pogledaj sva vozila'}
            </Link>
          </motion.div>
        </div>
      </section>

      <section className={'py-16'}>
        <div className={'mx-auto max-w-7xl px-4'}>
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            className={'mb-12 text-center'}>
            <h2 className={'mb-4 text-3xl font-bold text-gray-900 md:text-4xl'}>
              {'Zašto izabrati nas?'}
            </h2>
          </motion.div>

          <div className={'grid gap-8 md:grid-cols-2 lg:grid-cols-3'}>
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: index * 0.1}}
                className={'rounded-xl border bg-white p-6 shadow-sm'}>
                <h3 className={'mb-2 text-xl font-semibold text-gray-900'}>{item.title}</h3>
                <p className={'text-gray-600'}>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
