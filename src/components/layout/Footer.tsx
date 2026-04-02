'use client';
import Link from 'next/link';
import FacebookIcon from '@icons/FacebookIcon';
import TwitterIcon from '@icons/TwitterIcon';
import MailIcon from '@icons/MailIcon';
import PhoneIcon from '@icons/PhoneIcon';
import LocationIcon from '@icons/LocationIcon';
import InstagramIcon from '@icons/InstagramIcon';
import LogoIcon from '@icons/LogoIcon';
import {cn} from '@/utils/CN';
import {useTranslation} from 'react-i18next';
import navLinks from '@data/nav-links';
import services from '@data/services';
import {memo} from 'react';

const Footer = () => {
  const {t} = useTranslation();
  return (
    <footer className={'border-t bg-gray-50'}>
      <div className={'mx-auto max-w-7xl px-4 py-12'}>
        <div className={'grid gap-8 md:grid-cols-2 lg:grid-cols-4'}>
          <div>
            <div className={'mb-4 flex flex-row items-center'}>
              <LogoIcon />
              <div className={cn('flex-start flex flex-col', 'ml-2')}>
                <span className={'text-xl font-bold text-gray-800'}>{t('Rent a Car')}</span>
                <span className={'text-black/40'}>{t('Iznajmljivanje auta')}</span>
              </div>
            </div>
            <p className={'text-sm text-gray-600'}>
              {t(
                'Vaš pouzdan partner za iznajmljivanje automobila. Širok spektar vozila i vrhunska usluga.',
              )}
            </p>
            <div className={'mt-4 flex gap-4'}>
              <a
                href={'#'}
                className={'text-gray-400 transition-colors hover:text-blue-600'}
                aria-label={'Facebook'}>
                <FacebookIcon
                  width={20}
                  height={20}
                />
              </a>
              <a
                href={'#'}
                className={'text-gray-400 transition-colors hover:text-blue-600'}
                aria-label={'Instagram'}>
                <InstagramIcon
                  width={20}
                  height={20}
                />
              </a>
              <a
                href={'#'}
                className={'text-gray-400 transition-colors hover:text-blue-600'}
                aria-label={'Twitter / X'}>
                <TwitterIcon
                  width={20}
                  height={20}
                />
              </a>
            </div>
          </div>

          <div>
            <h3 className={'mb-4 font-semibold text-gray-900'}>{t('Brzi linkovi')}</h3>
            <ul className={'space-y-2 text-sm'}>
              {navLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={'text-gray-600 transition-colors hover:text-blue-600'}>
                    {t(link.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={'mb-4 font-semibold text-gray-900'}>{t('Usluge')}</h3>
            <ul className={'space-y-2 text-sm text-gray-600'}>
              {services.map(service => (
                <li key={service}>{t(service)}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={'mb-4 font-semibold text-gray-900'}>{t('Kontakt')}</h3>
            <ul className={'space-y-3 text-sm'}>
              <li className={'flex items-start gap-2 text-gray-600'}>
                <LocationIcon
                  width={16}
                  height={16}
                  className={'mt-0.5 shrink-0'}
                />
                <span>{'Glavna 45, 11080 Zemun, Beograd'}</span>
              </li>
              <li className={'flex items-center gap-2 text-gray-600'}>
                <PhoneIcon
                  width={16}
                  height={16}
                  className={'shrink-0'}
                />
                <a
                  href={'tel:+381112345678'}
                  className={'hover:text-blue-600'}>
                  {'+381 11 234 5678'}
                </a>
              </li>
              <li className={'flex items-center gap-2 text-gray-600'}>
                <MailIcon
                  width={16}
                  height={16}
                  className={'shrink-0'}
                />
                <a
                  href={'mailto:info@rentacar.rs'}
                  className={'hover:text-blue-600'}>
                  {'info@rentacar.rs'}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={'mt-12 border-t pt-8 text-center text-sm text-gray-600'}>
          <p>
            {`© ${new Date().getFullYear()} Rent a Car.`} {t('Sva prava zadržana.')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
