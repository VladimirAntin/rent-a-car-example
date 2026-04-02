const contactInfo: {icon: IconName; title: string; content: string; link?: string}[] = [
  {
    icon: 'location',
    title: 'Adresa',
    content: 'Glavna 45, 11080 Zemun, Beograd',
    link: undefined as string | undefined,
  },
  {
    icon: 'phone',
    title: 'Telefon',
    content: '+381 11 234 5678',
    link: 'tel:+381112345678',
  },
  {
    icon: 'mail',
    title: 'Email',
    content: 'info@rentacar.rs',
    link: 'mailto:info@rentacar.rs',
  },
  {
    icon: 'clock',
    title: 'Radno vreme',
    content: 'Pon - Pet: 08:00 - 20:00\nSub: 09:00 - 17:00\nNed: Zatvoreno',
    link: undefined as string | undefined,
  },
];

export default contactInfo;
