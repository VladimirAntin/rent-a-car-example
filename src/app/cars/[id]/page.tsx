import {notFound} from 'next/navigation';
import {cars} from '@data/cars';
import CarDetailClient from './CarDetailClient';
import {memo} from 'react';

export function generateStaticParams() {
  return cars.map(car => ({id: car.id}));
}

interface PageProps {
  params: Promise<{id: string}>;
}

const VehicleDetailPage = async ({params}: PageProps) => {
  const {id} = await params;
  const car = cars.find(c => c.id === id);

  if (!car) {
    notFound();
  }

  const similarCars = cars.filter(c => c.category === car.category && c.id !== car.id).slice(0, 3);

  return (
    <CarDetailClient
      car={car}
      similarCars={similarCars}
    />
  );
};

export default memo(VehicleDetailPage);
