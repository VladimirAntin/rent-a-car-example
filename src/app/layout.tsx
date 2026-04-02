import type {Metadata} from 'next';
import {memo, ReactNode} from 'react';
import Header from '@components/layout/Header';
import Footer from '@components/layout/Footer';
import './globals.css';
import '@i18n/localeConfig';

export const metadata: Metadata = {
  title: 'Rent a Car — Iznajmljivanje vozila Beograd',
  description:
    'Iznajmite auto po najboljim cenama u Beogradu. Širok izbor vozila, kasko osiguranje uključeno, dostava na adresu.',
  icons: {icon: '/favicon.png', apple: '/favicon.png'},
};

const RootLayout = ({children}: {children: ReactNode}) => {
  return (
    <html lang={'sr'}>
      <body className={'flex min-h-screen flex-col'}>
        <Header />
        <main className={'flex-1'}>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default memo(RootLayout);
