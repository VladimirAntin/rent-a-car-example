'use client';

import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {motion} from 'framer-motion';
import SendIcon from '@icons/SendIcon';
import CalendarIcon from '@icons/CalendarIcon';

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  pickupDate: string;
  returnDate: string;
  message: string;
}

interface BookingFormProps {
  carName?: string;
}

export function BookingForm({carName}: BookingFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm<BookingFormData>();

  const onSubmit = (_data: BookingFormData) => {
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      reset();
    }, 3000);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className={'rounded-xl border bg-white p-6 shadow-sm'}>
      <h3 className={'mb-6 text-xl font-semibold text-gray-900'}>
        {carName ? `Rezerviši ${carName}` : 'Rezerviši vozilo'}
      </h3>

      {submitted ? (
        <motion.div
          initial={{opacity: 0, scale: 0.9}}
          animate={{opacity: 1, scale: 1}}
          className={'rounded-lg bg-green-50 p-6 text-center'}>
          <div className={'mb-2 text-4xl'}>{'✓'}</div>
          <h4 className={'mb-2 font-semibold text-green-900'}>{'Uspešno poslato!'}</h4>
          <p className={'text-sm text-green-700'}>
            {'Kontaktiraćemo vas u najkraćem roku sa detaljima o rezervaciji.'}
          </p>
        </motion.div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={'space-y-4'}>
          <div>
            <label
              htmlFor={'booking-name'}
              className={'mb-1 block text-sm font-medium text-gray-700'}>
              {'Ime i prezime *'}
            </label>
            <input
              id={'booking-name'}
              type={'text'}
              {...register('name', {required: 'Ime je obavezno'})}
              className={
                'w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none'
              }
            />
            {errors.name ? (
              <p className={'mt-1 text-sm text-red-600'}>{errors.name.message}</p>
            ) : null}
          </div>

          <div>
            <label
              htmlFor={'booking-email'}
              className={'mb-1 block text-sm font-medium text-gray-700'}>
              {'Email *'}
            </label>
            <input
              id={'booking-email'}
              type={'email'}
              {...register('email', {
                required: 'Email je obavezan',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Unesite validan email',
                },
              })}
              className={
                'w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none'
              }
            />
            {errors.email ? (
              <p className={'mt-1 text-sm text-red-600'}>{errors.email.message}</p>
            ) : null}
          </div>

          <div>
            <label
              htmlFor={'booking-phone'}
              className={'mb-1 block text-sm font-medium text-gray-700'}>
              {'Telefon *'}
            </label>
            <input
              id={'booking-phone'}
              type={'tel'}
              {...register('phone', {required: 'Telefon je obavezan'})}
              className={
                'w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none'
              }
            />
            {errors.phone ? (
              <p className={'mt-1 text-sm text-red-600'}>{errors.phone.message}</p>
            ) : null}
          </div>

          <div className={'grid gap-4 sm:grid-cols-2'}>
            <div>
              <label
                htmlFor={'booking-pickup'}
                className={'mb-1 flex items-center gap-1 text-sm font-medium text-gray-700'}>
                <CalendarIcon
                  width={14}
                  height={14}
                />
                {'Datum preuzimanja *'}
              </label>
              <input
                id={'booking-pickup'}
                type={'date'}
                {...register('pickupDate', {required: 'Datum preuzimanja je obavezan'})}
                min={today}
                className={
                  'w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none'
                }
              />
              {errors.pickupDate ? (
                <p className={'mt-1 text-sm text-red-600'}>{errors.pickupDate.message}</p>
              ) : null}
            </div>

            <div>
              <label
                htmlFor={'booking-return'}
                className={'mb-1 flex items-center gap-1 text-sm font-medium text-gray-700'}>
                <CalendarIcon
                  width={14}
                  height={14}
                />
                {'Datum vraćanja *'}
              </label>
              <input
                id={'booking-return'}
                type={'date'}
                {...register('returnDate', {required: 'Datum vraćanja je obavezan'})}
                min={today}
                className={
                  'w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none'
                }
              />
              {errors.returnDate ? (
                <p className={'mt-1 text-sm text-red-600'}>{errors.returnDate.message}</p>
              ) : null}
            </div>
          </div>

          <div>
            <label
              htmlFor={'booking-message'}
              className={'mb-1 block text-sm font-medium text-gray-700'}>
              {'Poruka'}
            </label>
            <textarea
              id={'booking-message'}
              {...register('message')}
              rows={4}
              className={
                'w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none'
              }
              placeholder={'Dodatne napomene ili pitanja...'}
            />
          </div>

          <button
            type={'submit'}
            className={
              'flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700'
            }>
            <SendIcon
              width={16}
              height={16}
            />
            {'Pošalji zahtev'}
          </button>
        </form>
      )}
    </div>
  );
}
