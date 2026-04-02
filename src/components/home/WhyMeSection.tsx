'use client';

import {motion} from 'framer-motion';
import whyChooseUs from '@data/why-choose-us';
import {useTranslation} from 'react-i18next';

const WhyMeSection = () => {
  const {t} = useTranslation('home');
  return (
    <section className={'py-16'}>
      <div className={'mx-auto max-w-7xl px-4'}>
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          className={'mb-12 text-center'}>
          <h2 className={'mb-4 text-3xl font-bold text-gray-900 md:text-4xl'}>
            {t('Zašto izabrati nas?')}
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
              <h3 className={'mb-2 text-xl font-semibold text-gray-900'}>{t(item.title)}</h3>
              <p className={'text-gray-600'}>{t(item.description)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMeSection;
