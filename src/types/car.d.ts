type Car = {
  id: string;
  name: string;
  brand: string;
  category: 'luxury' | 'suv' | 'sedan' | 'compact' | 'sports' | 'family';
  year: number;
  image: string;
  pricePerDay: number;
  seats: number;
  transmission: 'automatic' | 'manual';
  fuelType: 'benzin' | 'dizel' | 'električni' | 'hibrid';
  features: string[];
  available: boolean;
  description: string;
};
