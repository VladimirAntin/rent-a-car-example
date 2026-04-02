'use client';

import {motion} from 'framer-motion';
import Link from 'next/link';
import features from '@data/features';
import Icon from '@icons/Icon';
import {useTranslation} from 'react-i18next';

export function HeroSection() {
  const {t} = useTranslation('home');
  return (
    <div className={'relative overflow-hidden bg-gray-900'}>
      <div className={'absolute inset-0'}>
        <img
          src={
            'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBoaWdod2F5JTIwZHJpdmluZ3xlbnwxfHx8fDE3NzUwNTI4NzR8MA&ixlib=rb-4.1.0&q=80&w=1080'
          }
          alt={'Hero background'}
          className={'h-full w-full object-cover'}
        />
        <div
          className={'absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80'}
        />
      </div>

      <div className={'relative mx-auto max-w-7xl px-4 py-20 md:py-32'}>
        <div className={'text-center'}>
          <motion.h1
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            className={'mb-6 text-4xl font-bold text-white md:text-6xl'}>
            {t('Iznajmite auto')}
            <br />
            <span className={'text-blue-400'}>{t('koji vam odgovara')}</span>
          </motion.h1>

          <motion.p
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: 0.2}}
            className={'mx-auto mb-8 max-w-2xl text-lg text-gray-200'}>
            {t(
              'Najbolji izbor vozila po povoljnim cenama. Od kompaktnih gradskih automobila do luksuznih limuzina.',
            )}
          </motion.p>

          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: 0.4}}
            className={'flex flex-col items-center justify-center gap-4 sm:flex-row'}>
            <Link
              href={'/cars'}
              className={
                'w-full rounded-lg bg-blue-600 px-8 py-3 font-medium text-white transition-colors hover:bg-blue-700 sm:w-auto'
              }>
              {t('Pogledaj vozila')}
            </Link>
            <Link
              href={'/contact'}
              className={
                'w-full rounded-lg border border-gray-300 bg-white/10 px-8 py-3 font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:w-auto'
              }>
              {t('Kontaktiraj nas')}
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{opacity: 0, y: 40}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6, delay: 0.6}}
          className={'mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'}>
          {features.map(feature => (
            <div
              key={feature.title}
              className={
                'rounded-xl border border-white/10 bg-white/10 p-6 text-center backdrop-blur-sm'
              }>
              <div
                className={
                  'mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20'
                }>
                <Icon
                  name={feature.icon}
                  width={24}
                  height={24}
                  className={'text-blue-400'}
                />
              </div>
              <h3 className={'mb-1 font-semibold text-white'}>{t(feature.title)}</h3>
              <p className={'text-sm text-gray-300'}>{t(feature.description)}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
