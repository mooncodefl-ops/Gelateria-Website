export type Flavour = {
  id: string;
  name: string;
  italianName: string;
  category: 'Classic' | 'Chocolate' | 'Fruit' | 'Nuts' | 'Seasonal' | 'Special';
  description: string;
  story: string;
  ingredients: string[];
  allergens: string[];
  seasonal: 'summer' | 'winter' | 'year-round' | null;
  image: string;
  color: {
    name: string;
    bg: string;
    text: string;
    accent: string;
  };
};

export const flavours: Flavour[] = [
  {
    id: 'pistachio',
    name: 'Pistachio',
    italianName: 'Pistacchio',
    category: 'Nuts',
    description:
      'Slow-roasted Bronte pistachios, stone-ground into a velvety base. Savoury, deep, and unmistakably green — no colouring, no compromise.',
    story:
      'Our pistachio comes from the volcanic slopes of Mount Etna, where the small, intense Bronte pistachio earns its nickname: green gold.',
    ingredients: ['Bronte pistachios', 'Whole milk', 'Cream', 'Cane sugar'],
    allergens: ['Milk', 'Tree nuts'],
    seasonal: 'year-round',
    image:
      'https://images.pexels.com/photos/9140857/pexels-photo-9140857.jpeg?auto=compress&cs=tinysrgb&w=1200',
    color: {
      name: 'pistachio',
      bg: '#E8E8D0',
      text: '#6B7B3F',
      accent: '#A8B86B',
    },
  },
  {
    id: 'dark-chocolate',
    name: 'Dark Chocolate',
    italianName: 'Cioccolato Fondente',
    category: 'Chocolate',
    description:
      'Single-origin Ecuadorian cacao, 70% dark, melted into a dense, glossy gelato that coats the palate like silk.',
    story:
      'We melt and temper the cacao ourselves, folding it into the base at exactly 32°C — the temperature where chocolate becomes velvet.',
    ingredients: ['Ecuadorian cacao', 'Whole milk', 'Cream', 'Cane sugar'],
    allergens: ['Milk'],
    seasonal: 'year-round',
    image:
      'https://images.pexels.com/photos/5061036/pexels-photo-5061036.jpeg?auto=compress&cs=tinysrgb&w=1200',
    color: {
      name: 'cocoa',
      bg: '#E0D0C5',
      text: '#6B4226',
      accent: '#8B5A3C',
    },
  },
  {
    id: 'strawberry',
    name: 'Strawberry',
    italianName: 'Fragola',
    category: 'Fruit',
    description:
      'Sun-ripened strawberries from the Ligurian coast, macerated in their own juice and folded through fresh cream.',
    story:
      'In June, we drive to the Albenga farms and pick the strawberries ourselves. By evening, they are gelato.',
    ingredients: ['Ligurian strawberries', 'Whole milk', 'Cream', 'Cane sugar', 'Lemon juice'],
    allergens: ['Milk'],
    seasonal: 'summer',
    image:
      'https://images.pexels.com/photos/5535556/pexels-photo-5535556.jpeg?auto=compress&cs=tinysrgb&w=1200',
    color: {
      name: 'berry',
      bg: '#F0D5DC',
      text: '#B5445E',
      accent: '#D4708A',
    },
  },
  {
    id: 'lemon-sorbet',
    name: 'Lemon Sorbet',
    italianName: 'Sorbetto al Limone',
    category: 'Fruit',
    description:
      'Amalfi Coast lemons, juiced at dawn. A clean, bright sorbetto that tastes like the first day of summer.',
    story:
      'The sfusato lemon grows on terraced cliffs above the sea. Its oil is floral, its juice electric. We use both.',
    ingredients: ['Amalfi lemons', 'Cane sugar', 'Water'],
    allergens: [],
    seasonal: 'summer',
    image:
      'https://images.pexels.com/photos/8713082/pexels-photo-8713082.jpeg?auto=compress&cs=tinysrgb&w=1200',
    color: {
      name: 'lemon',
      bg: '#F5EDC8',
      text: '#8B7B1A',
      accent: '#E8C547',
    },
  },
  {
    id: 'hazelnut',
    name: 'Hazelnut',
    italianName: 'Nocciola',
    category: 'Nuts',
    description:
      'Tonda Gentile hazelnuts from Piedmont, roasted until golden and ground into a smooth, nutty crema.',
    story:
      'The Tonda Gentile is the only hazelnut with a protected origin. Its round shape and delicate skin make it the finest in the world.',
    ingredients: ['Piedmont hazelnuts', 'Whole milk', 'Cream', 'Cane sugar'],
    allergens: ['Milk', 'Tree nuts'],
    seasonal: 'winter',
    image:
      'https://images.pexels.com/photos/5060456/pexels-photo-5060456.jpeg?auto=compress&cs=tinysrgb&w=1200',
    color: {
      name: 'hazelnut',
      bg: '#E8DCC8',
      text: '#8B6B4A',
      accent: '#C9A57B',
    },
  },
  {
    id: 'affogato',
    name: 'Affogato',
    italianName: 'Affogato al Caffè',
    category: 'Special',
    description:
      'A scoop of vanilla bean gelato drowned in a shot of hot espresso. Warm, cold, bitter, sweet — all at once.',
    story:
      'Affogato means "drowned." It is the simplest dessert in Italy and perhaps the most perfect.',
    ingredients: ['Vanilla bean gelato', 'Single-origin espresso'],
    allergens: ['Milk'],
    seasonal: 'year-round',
    image:
      'https://images.pexels.com/photos/32972513/pexels-photo-32972513.jpeg?auto=compress&cs=tinysrgb&w=1200',
    color: {
      name: 'espresso',
      bg: '#D8C8BC',
      text: '#4A2F22',
      accent: '#6B4226',
    },
  },
];

export const flavourCategories = [
  'All',
  'Classic',
  'Chocolate',
  'Fruit',
  'Nuts',
  'Seasonal',
  'Special',
] as const;
