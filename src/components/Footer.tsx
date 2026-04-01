import Link from 'next/link';
import FacebookIcon from '@icons/FacebookIcon';
import TwitterIcon from '@icons/TwitterIcon';
import MailIcon from '@icons/MailIcon';
import PhoneIcon from '@icons/PhoneIcon';
import LocationIcon from '@icons/LocationIcon';
import InstagramIcon from '@icons/InstagramIcon';

export function Footer() {
  return (
    <footer className={'border-t bg-gray-50'}>
      <div className={'mx-auto max-w-7xl px-4 py-12'}>
        <div className={'grid gap-8 md:grid-cols-2 lg:grid-cols-4'}>
          <div>
            <div className={'mb-4'}>
              <img
                src={'/logo.svg'}
                alt={'Rent a Car'}
                width={180}
                height={48}
              />
            </div>
            <p className={'text-sm text-gray-600'}>
              {
                'Vaš pouzdan partner za iznajmljivanje automobila. Širok spektar vozila i vrhunska usluga.'
              }
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
            <h3 className={'mb-4 font-semibold text-gray-900'}>{'Brzi linkovi'}</h3>
            <ul className={'space-y-2 text-sm'}>
              {[
                {href: '/', label: 'Početna'},
                {href: '/cars', label: 'Vozila'},
                {href: '/about', label: 'O nama'},
                {href: '/contact', label: 'Kontakt'},
              ].map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={'text-gray-600 transition-colors hover:text-blue-600'}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={'mb-4 font-semibold text-gray-900'}>{'Usluge'}</h3>
            <ul className={'space-y-2 text-sm text-gray-600'}>
              {[
                'Dnevni najam',
                'Nedeljni najam',
                'Mesečni najam',
                'Korporativni najam',
                'Dostava vozila',
              ].map(service => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={'mb-4 font-semibold text-gray-900'}>{'Kontakt'}</h3>
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
          <p>{`© ${new Date().getFullYear()} Rent a Car. Sva prava zadržana.`}</p>
        </div>
      </div>
    </footer>
  );
}
