'use client';

import {useState} from 'react';
import {motion} from 'framer-motion';
import FilterIcon from '@icons/FilterIcon';
import {CarCard} from '@components/CarCard';
import {cars, categories, transmissionTypes} from '@data/cars';

export default function VehiclesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTransmission, setSelectedTransmission] = useState('all');
  const [maxPrice, setMaxPrice] = useState(500);
  const [showFilters, setShowFilters] = useState(false);

  const filteredCars = cars.filter(car => {
    const categoryMatch = selectedCategory === 'all' || car.category === selectedCategory;
    const transmissionMatch =
      selectedTransmission === 'all' || car.transmission === selectedTransmission;
    const priceMatch = car.pricePerDay >= 0 && car.pricePerDay <= maxPrice;
    return categoryMatch && transmissionMatch && priceMatch;
  });

  const handleReset = () => {
    setSelectedCategory('all');
    setSelectedTransmission('all');
    setMaxPrice(500);
  };

  return (
    <div className={'bg-gray-50 py-12'}>
      <div className={'mx-auto max-w-7xl px-4'}>
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          className={'mb-8'}>
          <h1 className={'mb-4 text-4xl font-bold text-gray-900'}>{'Naša vozila'}</h1>
          <p
            className={
              'text-gray-600'
            }>{`Pronađite savršeno vozilo za vaše potrebe. ${filteredCars.length} dostupnih vozila`}</p>
        </motion.div>

        <div className={'mb-8 flex items-center justify-between'}>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={
              'flex items-center gap-2 rounded-lg border bg-white px-4 py-2 transition-colors hover:bg-gray-50 lg:hidden'
            }>
            <FilterIcon
              width={16}
              height={16}
            />
            {'Filteri'}
          </button>
        </div>

        <div className={'grid gap-8 lg:grid-cols-4'}>
          <motion.aside
            initial={{opacity: 0, x: -20}}
            animate={{opacity: 1, x: 0}}
            className={showFilters ? 'block' : 'hidden lg:block'}>
            <div className={'space-y-6 rounded-xl border bg-white p-6'}>
              <div>
                <h3 className={'mb-3 font-semibold text-gray-900'}>{'Kategorija'}</h3>
                <div className={'space-y-2'}>
                  {categories.map(category => (
                    <label
                      key={category.value}
                      className={'flex cursor-pointer items-center gap-2'}>
                      <input
                        type={'radio'}
                        name={'category'}
                        value={category.value}
                        checked={selectedCategory === category.value}
                        onChange={e => setSelectedCategory(e.target.value)}
                        className={'h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500'}
                      />
                      <span className={'text-sm text-gray-700'}>{category.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className={'border-t pt-6'}>
                <h3 className={'mb-3 font-semibold text-gray-900'}>{'Menjač'}</h3>
                <div className={'space-y-2'}>
                  {transmissionTypes.map(transmission => (
                    <label
                      key={transmission.value}
                      className={'flex cursor-pointer items-center gap-2'}>
                      <input
                        type={'radio'}
                        name={'transmission'}
                        value={transmission.value}
                        checked={selectedTransmission === transmission.value}
                        onChange={e => setSelectedTransmission(e.target.value)}
                        className={'h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500'}
                      />
                      <span className={'text-sm text-gray-700'}>{transmission.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className={'border-t pt-6'}>
                <h3 className={'mb-3 font-semibold text-gray-900'}>{'Cena po danu'}</h3>
                <div className={'space-y-3'}>
                  <input
                    type={'range'}
                    min={'0'}
                    max={'500'}
                    step={'10'}
                    value={maxPrice}
                    onChange={e => setMaxPrice(Number(e.target.value))}
                    className={'w-full'}
                  />
                  <div className={'flex items-center justify-between text-sm text-gray-600'}>
                    <span>{'0€'}</span>
                    <span className={'font-medium text-gray-900'}>{`${maxPrice}€`}</span>
                  </div>
                </div>
              </div>

              <div
                onClick={handleReset}
                className={
                  'w-full rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50'
                }>
                {'Resetuj filtere'}
              </div>
            </div>
          </motion.aside>

          <div className={'lg:col-span-3'}>
            {filteredCars.length > 0 ? (
              <div className={'grid gap-6 sm:grid-cols-2 xl:grid-cols-3'}>
                {filteredCars.map((car, index) => (
                  <CarCard
                    key={car.id}
                    car={car}
                    index={index}
                  />
                ))}
              </div>
            ) : (
              <div className={'rounded-xl border bg-white p-12 text-center'}>
                <p className={'text-gray-600'}>
                  {
                    'Nema vozila koja odgovaraju zadatim filterima. Pokušajte sa drugačijim parametrima.'
                  }
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
