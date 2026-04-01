'use client';

import {useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import Link from 'next/link';
import MenuIcon from '@icons/MenuIcon';
import CloseIcon from '@icons/CloseIcon';
import PhoneIcon from '@icons/PhoneIcon';
import MailIcon from '@icons/MailIcon';

const navLinks = [
  {href: '/', label: 'Početna'},
  {href: '/cars', label: 'Vozila'},
  {href: '/about', label: 'O nama'},
  {href: '/contact', label: 'Kontakt'},
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={
        'sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80'
      }>
      <div className={'border-b bg-gray-50'}>
        <div className={'mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm'}>
          <div className={'flex items-center gap-4'}>
            <a
              href={'tel:+381112345678'}
              className={'flex items-center gap-2 text-gray-600 hover:text-gray-900'}>
              <PhoneIcon
                width={16}
                height={16}
              />
              <span className={'hidden sm:inline'}>{'+' + '381 11 234 5678'}</span>
            </a>
            <a
              href={'mailto:info@rentacar.rs'}
              className={'flex items-center gap-2 text-gray-600 hover:text-gray-900'}>
              <MailIcon
                width={16}
                height={16}
              />
              <span className={'hidden sm:inline'}>{'info@rentacar.rs'}</span>
            </a>
          </div>
          <div className={'text-gray-600'}>{'Pon - Pet: 08:00 - 20:00'}</div>
        </div>
      </div>

      <div className={'mx-auto max-w-7xl px-4'}>
        <div className={'flex h-16 items-center justify-between'}>
          <Link
            href={'/'}
            className={'flex items-center'}>
            <img
              src={'/logo.svg'}
              alt={'Rent a Car'}
              width={160}
              height={43}
            />
          </Link>

          <nav className={'hidden md:flex md:gap-6'}>
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={'text-gray-600 transition-colors hover:text-gray-900'}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className={'flex items-center gap-4'}>
            <Link
              href={'/contact'}
              className={
                'hidden rounded-lg bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700 md:block'
              }>
              {'Rezerviši sada'}
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={'md:hidden'}
              aria-label={'Toggle menu'}>
              {mobileMenuOpen ? (
                <CloseIcon
                  width={24}
                  height={24}
                />
              ) : (
                <MenuIcon
                  width={24}
                  height={24}
                />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen ? (
          <motion.div
            initial={{opacity: 0, height: 0}}
            animate={{opacity: 1, height: 'auto'}}
            exit={{opacity: 0, height: 0}}
            className={'border-t bg-white md:hidden'}>
            <nav className={'mx-auto max-w-7xl space-y-1 px-4 py-4'}>
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={
                    'block rounded-lg px-4 py-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900'
                  }>
                  {link.label}
                </Link>
              ))}
              <Link
                href={'/contact'}
                onClick={() => setMobileMenuOpen(false)}
                className={'mt-4 block rounded-lg bg-blue-600 px-4 py-2 text-center text-white'}>
                {'Rezerviši sada'}
              </Link>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
