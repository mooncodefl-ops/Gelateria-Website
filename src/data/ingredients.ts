export type Ingredient = {
  id: string;
  name: string;
  italianName: string;
  description: string;
  image: string;
};

export const ingredients: Ingredient[] = [
  {
    id: 'milk',
    name: 'Whole Milk',
    italianName: 'Latte Intero',
    description:
      'Fresh from alpine farms, delivered every morning. The fat content is higher than industrial gelato — this is what gives ours its silk.',
    image:
      'https://images.pexels.com/photos/5060463/pexels-photo-5060463.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'pistachio',
    name: 'Bronte Pistachio',
    italianName: 'Pistacchio di Bronte',
    description:
      'From the volcanic soil of Mount Etna. Dearer than almonds, and worth every cent for their savoury depth.',
    image:
      'https://images.pexels.com/photos/9140857/pexels-photo-9140857.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'strawberry',
    name: 'Ligurian Strawberry',
    italianName: 'Fragola Ligure',
    description:
      'Picked at peak ripeness from the Albenga coast. We never use frozen fruit in our strawberry gelato.',
    image:
      'https://images.pexels.com/photos/302478/pexels-photo-302478.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'lemon',
    name: 'Amalfi Lemon',
    italianName: 'Limone Amalfitano',
    description:
      'The sfusato lemon — floral, fragrant, almost sweet. We zest and juice by hand, never from concentrate.',
    image:
      'https://images.pexels.com/photos/4197826/pexels-photo-4197826.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'hazelnut',
    name: 'Piedmont Hazelnut',
    italianName: 'Nocciola Tonda Gentile',
    description:
      'The Tonda Gentile from Piedmont — a protected variety with a round shape, thin skin, and extraordinary aroma.',
    image:
      'https://images.pexels.com/photos/5060298/pexels-photo-5060298.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'cacao',
    name: 'Ecuadorian Cacao',
    italianName: 'Cacao Ecuadoriano',
    description:
      'Single-origin, 70% dark. We melt and temper it ourselves, never using pre-made bases or powders.',
    image:
      'https://images.pexels.com/photos/5061036/pexels-photo-5061036.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'coffee',
    name: 'Italian Espresso',
    italianName: 'Caffè Espresso',
    description:
      'A blend of Arabica beans, pulled short and strong. The bitterness cuts the cream in our affogato perfectly.',
    image:
      'https://images.pexels.com/photos/10066817/pexels-photo-10066817.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'peach',
    name: 'Summer Peach',
    italianName: 'Pesca Estiva',
    description:
      'White peaches from the Emilia orchards, ripe enough that the juice runs down your wrist. A seasonal special.',
    image:
      'https://images.pexels.com/photos/10817520/pexels-photo-10817520.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export const makingOfSteps = [
  {
    step: '01',
    title: 'Source',
    italian: 'Selezionare',
    description: 'Each morning, fresh milk and cream arrive from the alpine farms. Fruit comes from the nearest markets — never frozen.',
    image: 'https://images.pexels.com/photos/7195128/pexels-photo-7195128.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
  {
    step: '02',
    title: 'Mix',
    italian: 'Mescolare',
    description: 'We prepare the base by hand — milk, cream, and sugar warmed slowly, never above 65°C, to keep the flavour alive.',
    image: 'https://images.pexels.com/photos/5060463/pexels-photo-5060463.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
  {
    step: '03',
    title: 'Freeze',
    italian: 'Mantecare',
    description: 'The base churns in our vertical freezers, folding in air slowly. Less air means denser, silkier gelato.',
    image: 'https://images.pexels.com/photos/5060290/pexels-photo-5060290.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
  {
    step: '04',
    title: 'Craft',
    italian: 'Creare',
    description: 'We fold in the ingredients by hand — pistachio paste, fruit purée, melted chocolate — each at its own temperature.',
    image: 'https://images.pexels.com/photos/5060298/pexels-photo-5060298.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
  {
    step: '05',
    title: 'Serve',
    italian: 'Servire',
    description: 'A spatula, a smile, and a coppetta. Gelato is best within hours of making — this is why we make it fresh, every day.',
    image: 'https://images.pexels.com/photos/39133511/pexels-photo-39133511.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
];
