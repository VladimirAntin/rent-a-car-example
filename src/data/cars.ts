export interface Car {
  id: string;
  name: string;
  brand: string;
  category: 'luxury' | 'suv' | 'sedan' | 'compact' | 'sports' | 'family';
  year: number;
  image: string;
  pricePerDay: number;
  seats: number;
  transmission: 'automatic' | 'manual';
  fuelType: 'petrol' | 'diesel' | 'electric' | 'hybrid';
  features: string[];
  available: boolean;
  description: string;
}

export const cars: Car[] = [
  {
    id: '1',
    name: 'Porsche 911',
    brand: 'Porsche',
    category: 'luxury',
    year: 2024,
    image:
      'https://images.unsplash.com/photo-1632154939368-1a92207d8af3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    pricePerDay: 350,
    seats: 4,
    transmission: 'automatic',
    fuelType: 'petrol',
    features: [
      'Klima',
      'Kožna sedišta',
      'GPS navigacija',
      'Premium audio sistem',
      'Sportski paket',
    ],
    available: true,
    description:
      'Doživite vrhunsku performansu i eleganciju sa legendarnim Porsche 911. Savršen izbor za posebne prilike.',
  },
  {
    id: '2',
    name: 'Range Rover Sport',
    brand: 'Land Rover',
    category: 'suv',
    year: 2024,
    image:
      'https://images.unsplash.com/photo-1604054094723-3a949e4a8993?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    pricePerDay: 280,
    seats: 5,
    transmission: 'automatic',
    fuelType: 'diesel',
    features: [
      '4x4',
      'Panorama krov',
      'Grejanje sedišta',
      'Parking senzori',
      'Adaptive cruise control',
    ],
    available: true,
    description:
      'Luksuzni SUV koji kombinuje eleganciju, moć i svestranost. Idealan za porodične putovanje i avanture.',
  },
  {
    id: '3',
    name: 'BMW Serija 5',
    brand: 'BMW',
    category: 'sedan',
    year: 2024,
    image:
      'https://images.unsplash.com/photo-1629791191284-1930e995d7e6?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    pricePerDay: 180,
    seats: 5,
    transmission: 'automatic',
    fuelType: 'hybrid',
    features: ['Klima', 'Harman Kardon audio', 'LED farovi', 'Keyless entry', 'Head-up display'],
    available: true,
    description:
      'Poslovni sedan koji spaja udobnost, tehnologiju i dinamiku vožnje. Savršen za poslovne sastanke.',
  },
  {
    id: '4',
    name: 'Volkswagen Golf',
    brand: 'Volkswagen',
    category: 'compact',
    year: 2023,
    image:
      'https://images.unsplash.com/photo-1748466246283-06cd4d772675?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    pricePerDay: 60,
    seats: 5,
    transmission: 'manual',
    fuelType: 'diesel',
    features: ['Klima', 'Bluetooth', 'USB', 'Parking senzori', 'Centralno zaključavanje'],
    available: true,
    description:
      'Ekonomičan i praktičan automobil za gradsku vožnju. Odličan izbor za svakodnevnu upotrebu.',
  },
  {
    id: '5',
    name: 'Fiat 500',
    brand: 'Fiat',
    category: 'sports',
    year: 2024,
    image:
      'https://images.unsplash.com/photo-1661770106487-cd1173974762?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    pricePerDay: 400,
    seats: 2,
    transmission: 'automatic',
    fuelType: 'petrol',
    features: ['Откидни кров', 'Masažna sedišta', 'Performance mode'],
    available: true,
    description:
      'Luksuzni sportski roadster za nezaboravna iskustva. Uživajte u vožnji uz vetar u kosi.',
  },
  {
    id: '6',
    name: 'Mercedes-Benz V-Class',
    brand: 'Mercedes-Benz',
    category: 'family',
    year: 2023,
    image: 'https://images.pexels.com/photos/17455633/pexels-photo-17455633.jpeg',
    pricePerDay: 200,
    seats: 7,
    transmission: 'automatic',
    fuelType: 'diesel',
    features: ['Klima - dve zone', 'TV sistem', 'Frižider', 'Električna vrata', 'ISOFIX'],
    available: true,
    description:
      'Prostrani i komforni minivan za velike porodice. Maksimalan komfor za sva putovanja.',
  },
  {
    id: '7',
    name: 'Tesla Model 3',
    brand: 'Tesla',
    category: 'sedan',
    year: 2024,
    image:
      'https://images.unsplash.com/photo-1561580125-028ee3bd62eb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    pricePerDay: 150,
    seats: 5,
    transmission: 'automatic',
    fuelType: 'electric',
    features: [
      'Autopilot',
      'Premium interior',
      'Veliki touchscreen',
      'Supercharger pristup',
      'Bez emisije',
    ],
    available: true,
    description: 'Električni automobil budućnosti sa naprednom tehnologijom i ekološkom svešću.',
  },
  {
    id: '8',
    name: 'Audi Q7',
    brand: 'Audi',
    category: 'suv',
    year: 2023,
    image:
      'https://images.unsplash.com/photo-1615063029891-497bebd4f03c?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    pricePerDay: 220,
    seats: 7,
    transmission: 'automatic',
    fuelType: 'diesel',
    features: [
      'Quattro 4x4',
      'Virtual cockpit',
      'Matrix LED farovi',
      'Bang & Olufsen audio',
      '3 reda sedišta',
    ],
    available: true,
    description:
      'Premium SUV sa sedam sedišta. Kombinacija luksuza, prostora i quattro tehnologije.',
  },
];

export const categories = [
  {value: 'all', label: 'Sve kategorije'},
  {value: 'luxury', label: 'Luksuzna'},
  {value: 'suv', label: 'SUV'},
  {value: 'sedan', label: 'Sedan'},
  {value: 'compact', label: 'Kompaktna'},
  {value: 'sports', label: 'Sportska'},
  {value: 'family', label: 'Porodična'},
];

export const transmissionTypes = [
  {value: 'all', label: 'Svi tipovi'},
  {value: 'automatic', label: 'Automatski'},
  {value: 'manual', label: 'Manuelni'},
];
