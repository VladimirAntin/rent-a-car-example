import Link from 'next/link';
import HomeIcon from '@icons/HomeIcon';

export default function NotFound() {
  return (
    <div className={'flex min-h-[70vh] items-center justify-center bg-gray-50'}>
      <div className={'text-center'}>
        <h1 className={'mb-4 text-9xl font-bold text-gray-200'}>{'404'}</h1>
        <h2 className={'mb-4 text-3xl font-bold text-gray-900'}>{'Stranica nije pronađena'}</h2>
        <p className={'mb-8 text-gray-600'}>
          {'Stranica koju tražite ne postoji ili je premeštena.'}
        </p>
        <Link
          href={'/'}
          className={
            'inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700'
          }>
          <HomeIcon
            width={20}
            height={20}
          />
          {'Nazad na početnu'}
        </Link>
      </div>
    </div>
  );
}
