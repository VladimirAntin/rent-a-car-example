'use client';

import {motion} from 'framer-motion';
import Icon from '@icons/Icon';
import ourValues from '@data/our-values';
import team from '@data/team';
import {useTranslation} from 'react-i18next';
import {memo} from 'react';

const stats = [
  {value: '10+', label: 'Godina iskustva'},
  {value: '50+', label: 'Vozila'},
  {value: '5000+', label: 'Klijenata'},
  {value: '4.9', label: 'Prosečna ocena'},
];

const AboutPage = () => {
  const {t} = useTranslation('about');
  return (
    <div className={'bg-gray-50 py-12'}>
      <div className={'mx-auto max-w-7xl px-4'}>
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          className={'mb-16 text-center'}>
          <h1 className={'mb-4 text-4xl font-bold text-gray-900 md:text-5xl'}>{t('O nama')}</h1>
          <p className={'mx-auto max-w-2xl text-lg text-gray-600'}>
            {t('Vaš pouzdan partner za iznajmljivanje vozila već više od 10 godina')}
          </p>
        </motion.div>

        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          className={'mb-16 overflow-hidden rounded-xl border bg-white shadow-sm'}>
          <div className={'grid gap-8 md:grid-cols-2'}>
            <div className={'p-8 md:p-12'}>
              <h2 className={'mb-4 text-3xl font-bold text-gray-900'}>{t('Naša priča')}</h2>
              <div className={'space-y-4 text-gray-700'}>
                <p>
                  {t(
                    'Rent a Car je osnovan 2014. godine sa vizijom da pruži vrhunsku uslugu iznajmljivanja vozila u Srbiji. Počeli smo sa svega 5 automobila i velikim snovima.',
                  )}
                </p>
                <p>
                  {t(
                    'Danas, nakon više od decenije rada, ponos nam je što raspolažemo flotom od preko 50 vozila različitih kategorija i što smo uslugu pružili hiljadama zadovoljnih klijenata.',
                  )}
                </p>
                <p>
                  {t(
                    'Naš tim stručnjaka posvećen je tome da svaki klijent dobije najbolje moguće iskustvo - od trenutka kada nas kontaktira do momenta vraćanja vozila.',
                  )}
                </p>
              </div>
            </div>
            <div className={'relative h-64 bg-gray-100 md:h-auto'}>
              <img
                src={
                  'https://images.unsplash.com/photo-1643142314913-0cf633d9bbb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBkZWFsZXJzaGlwJTIwc2hvd3Jvb218ZW58MXx8fHwxNzc0OTU4MDUxfDA&ixlib=rb-4.1.0&q=80&w=1080'
                }
                alt={'Showroom'}
                className={'h-full w-full object-cover'}
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          className={'mb-16'}>
          <h2 className={'mb-8 text-center text-3xl font-bold text-gray-900'}>
            {t('Naše vrednosti')}
          </h2>
          <div className={'grid gap-6 sm:grid-cols-2 lg:grid-cols-4'}>
            {ourValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: index * 0.1}}
                className={'rounded-xl border bg-white p-6 text-center shadow-sm'}>
                <div
                  className={
                    'mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100'
                  }>
                  <Icon
                    name={value.icon}
                    width={32}
                    height={32}
                    className={'text-blue-600'}
                  />
                </div>
                <h3 className={'mb-2 text-xl font-semibold text-gray-900'}>{t(value.title)}</h3>
                <p className={'text-gray-600'}>{t(value.description)}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          className={
            'mb-16 overflow-hidden rounded-xl border bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-white shadow-lg md:p-12'
          }>
          <div className={'grid gap-8 md:grid-cols-4'}>
            {stats.map(stat => (
              <div
                key={stat.label}
                className={'text-center'}>
                <div className={'mb-2 text-4xl font-bold'}>{stat.value}</div>
                <div className={'text-blue-100'}>{t(stat.label)}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}>
          <h2 className={'mb-8 text-center text-3xl font-bold text-gray-900'}>{t('Naš tim')}</h2>
          <div className={'grid gap-6 sm:grid-cols-2 lg:grid-cols-3'}>
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: index * 0.1}}
                className={'overflow-hidden rounded-xl border bg-white shadow-sm'}>
                <div className={'aspect-square overflow-hidden bg-gray-100'}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className={'h-full w-full object-cover'}
                  />
                </div>
                <div className={'p-6 text-center'}>
                  <h3 className={'mb-1 text-xl font-semibold text-gray-900'}>{member.name}</h3>
                  <p className={'text-gray-600'}>{t(member.role)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default memo(AboutPage);
