'use client';

import {useState} from 'react';
import {motion} from 'framer-motion';
import {useForm} from 'react-hook-form';
import ClockIcon from '@icons/ClockIcon';
import PhoneIcon from '@icons/PhoneIcon';
import MailIcon from '@icons/MailIcon';
import LocationIcon from '@icons/LocationIcon';
import SendIcon from '@icons/SendIcon';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const contactInfo = [
  {
    icon: (
      <LocationIcon
        width={24}
        height={24}
        className={'text-blue-600'}
      />
    ),
    title: 'Adresa',
    content: 'Glavna 45, 11080 Zemun, Beograd',
    link: undefined as string | undefined,
  },
  {
    icon: (
      <PhoneIcon
        width={24}
        height={24}
        className={'text-blue-600'}
      />
    ),
    title: 'Telefon',
    content: '+381 11 234 5678',
    link: 'tel:+381112345678',
  },
  {
    icon: (
      <MailIcon
        width={24}
        height={24}
        className={'text-blue-600'}
      />
    ),
    title: 'Email',
    content: 'info@rentacar.rs',
    link: 'mailto:info@rentacar.rs',
  },
  {
    icon: (
      <ClockIcon
        width={24}
        height={24}
        className={'text-blue-600'}
      />
    ),
    title: 'Radno vreme',
    content: 'Pon - Pet: 08:00 - 20:00\nSub: 09:00 - 17:00\nNed: Zatvoreno',
    link: undefined as string | undefined,
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = (_data: ContactFormData) => {
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      reset();
    }, 3000);
  };

  return (
    <div className={'bg-gray-50 py-12'}>
      <div className={'mx-auto max-w-7xl px-4'}>
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          className={'mb-12 text-center'}>
          <h1 className={'mb-4 text-4xl font-bold text-gray-900 md:text-5xl'}>
            {'Kontaktirajte nas'}
          </h1>
          <p className={'mx-auto max-w-2xl text-lg text-gray-600'}>
            {'Imate pitanje ili želite da rezervišete vozilo? Tu smo da vam pomognemo!'}
          </p>
        </motion.div>

        <div className={'grid gap-8 lg:grid-cols-3'}>
          <motion.div
            initial={{opacity: 0, x: -20}}
            animate={{opacity: 1, x: 0}}
            className={'space-y-6'}>
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: index * 0.1}}
                className={'rounded-xl border bg-white p-6 shadow-sm'}>
                <div
                  className={
                    'mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100'
                  }>
                  {info.icon}
                </div>
                <h3 className={'mb-2 font-semibold text-gray-900'}>{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className={'text-gray-600 transition-colors hover:text-blue-600'}>
                    {info.content}
                  </a>
                ) : (
                  <p className={'whitespace-pre-line text-gray-600'}>{info.content}</p>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{opacity: 0, x: 20}}
            animate={{opacity: 1, x: 0}}
            className={'lg:col-span-2'}>
            <div className={'rounded-xl border bg-white p-8 shadow-sm'}>
              <h2 className={'mb-6 text-2xl font-bold text-gray-900'}>{'Pošaljite nam poruku'}</h2>

              {submitted ? (
                <motion.div
                  initial={{opacity: 0, scale: 0.9}}
                  animate={{opacity: 1, scale: 1}}
                  className={'rounded-lg bg-green-50 p-8 text-center'}>
                  <div className={'mb-3 text-5xl'}>{'✓'}</div>
                  <h3 className={'mb-2 text-xl font-semibold text-green-900'}>
                    {'Hvala na poruci!'}
                  </h3>
                  <p className={'text-green-700'}>
                    {'Kontaktiraćemo vas u najkraćem mogućem roku.'}
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className={'space-y-6'}>
                  <div className={'grid gap-6 md:grid-cols-2'}>
                    <div>
                      <label
                        htmlFor={'contact-name'}
                        className={'mb-2 block font-medium text-gray-700'}>
                        {'Ime i prezime *'}
                      </label>
                      <input
                        id={'contact-name'}
                        type={'text'}
                        {...register('name', {required: 'Ime je obavezno'})}
                        className={
                          'w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none'
                        }
                      />
                      {errors.name ? (
                        <p className={'mt-1 text-sm text-red-600'}>{errors.name.message}</p>
                      ) : null}
                    </div>

                    <div>
                      <label
                        htmlFor={'contact-email'}
                        className={'mb-2 block font-medium text-gray-700'}>
                        {'Email *'}
                      </label>
                      <input
                        id={'contact-email'}
                        type={'email'}
                        {...register('email', {
                          required: 'Email je obavezan',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Unesite validan email',
                          },
                        })}
                        className={
                          'w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none'
                        }
                      />
                      {errors.email ? (
                        <p className={'mt-1 text-sm text-red-600'}>{errors.email.message}</p>
                      ) : null}
                    </div>
                  </div>

                  <div className={'grid gap-6 md:grid-cols-2'}>
                    <div>
                      <label
                        htmlFor={'contact-phone'}
                        className={'mb-2 block font-medium text-gray-700'}>
                        {'Telefon *'}
                      </label>
                      <input
                        id={'contact-phone'}
                        type={'tel'}
                        {...register('phone', {required: 'Telefon je obavezan'})}
                        className={
                          'w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none'
                        }
                      />
                      {errors.phone ? (
                        <p className={'mt-1 text-sm text-red-600'}>{errors.phone.message}</p>
                      ) : null}
                    </div>

                    <div>
                      <label
                        htmlFor={'contact-subject'}
                        className={'mb-2 block font-medium text-gray-700'}>
                        {'Tema *'}
                      </label>
                      <select
                        id={'contact-subject'}
                        {...register('subject', {required: 'Tema je obavezna'})}
                        className={
                          'w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none'
                        }>
                        <option value={''}>{'Izaberite temu'}</option>
                        <option value={'reservation'}>{'Rezervacija'}</option>
                        <option value={'info'}>{'Informacije'}</option>
                        <option value={'support'}>{'Podrška'}</option>
                        <option value={'other'}>{'Ostalo'}</option>
                      </select>
                      {errors.subject ? (
                        <p className={'mt-1 text-sm text-red-600'}>{errors.subject.message}</p>
                      ) : null}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor={'contact-message'}
                      className={'mb-2 block font-medium text-gray-700'}>
                      {'Poruka *'}
                    </label>
                    <textarea
                      id={'contact-message'}
                      {...register('message', {required: 'Poruka je obavezna'})}
                      rows={6}
                      className={
                        'w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none'
                      }
                      placeholder={'Napišite vašu poruku ovde...'}
                    />
                    {errors.message ? (
                      <p className={'mt-1 text-sm text-red-600'}>{errors.message.message}</p>
                    ) : null}
                  </div>

                  <button
                    type={'submit'}
                    className={
                      'flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 py-3 font-medium text-white transition-colors hover:bg-blue-700'
                    }>
                    <SendIcon
                      width={20}
                      height={20}
                    />
                    {'Pošalji poruku'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          className={'mt-12 overflow-hidden rounded-xl border bg-white shadow-sm'}>
          <div className={'aspect-video bg-gray-100'}>
            <iframe
              src={
                'https://www.openstreetmap.org/export/embed.html?layer=mapnik&marker=44.845819%2C20.409730&bbox=20.399730%2C44.835819%2C20.419730%2C44.855819'
              }
              width={'100%'}
              height={'100%'}
              style={{border: 0}}
              allowFullScreen
              loading={'lazy'}
              referrerPolicy={'no-referrer-when-downgrade'}
              title={'Location map'}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
