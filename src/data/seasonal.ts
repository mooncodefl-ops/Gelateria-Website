import { flavours } from './flavours';

export type SeasonalCollection = {
  season: 'Summer' | 'Winter';
  italian: 'Estate' | 'Inverno';
  description: string;
  flavourIds: string[];
};

export const seasonalCollections: SeasonalCollection[] = [
  {
    season: 'Summer',
    italian: 'Estate',
    description:
      'When the sun ripens the fruit on the coast, we capture it in cream. Bright, fresh, and made to melt slowly in the afternoon heat.',
    flavourIds: ['strawberry', 'lemon-sorbet', 'pistachio'],
  },
  {
    season: 'Winter',
    italian: 'Inverno',
    description:
      'When the air turns cold, we turn to the roasting pan. Toasted nuts, dark chocolate, and warm espresso — gelato that comforts.',
    flavourIds: ['hazelnut', 'dark-chocolate', 'affogato'],
  },
];

export const seasonalFlavours = (season: 'Summer' | 'Winter') => {
  const collection = seasonalCollections.find((c) => c.season === season);
  if (!collection) return [];
  return collection.flavourIds
    .map((id) => flavours.find((f) => f.id === id))
    .filter(Boolean);
};
