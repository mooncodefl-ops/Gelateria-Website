export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  aspect: 'portrait' | 'landscape' | 'square' | 'wide';
  span: 'small' | 'medium' | 'large' | 'tall' | 'wide';
};

export const galleryImages: GalleryImage[] = [
  {
    id: 'g1',
    src: 'https://images.pexels.com/photos/5060290/pexels-photo-5060290.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Macro swirl of creamy gelato with spatula texture',
    caption: 'The spatula through cream',
    aspect: 'landscape',
    span: 'large',
  },
  {
    id: 'g2',
    src: 'https://images.pexels.com/photos/2244332/pexels-photo-2244332.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Ice cream cone held in hand against sunny sky',
    caption: 'A cone, mid-summer',
    aspect: 'portrait',
    span: 'tall',
  },
  {
    id: 'g3',
    src: 'https://images.pexels.com/photos/32972513/pexels-photo-32972513.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Affogato with espresso being poured over vanilla gelato',
    caption: 'Affogato — the pour',
    aspect: 'portrait',
    span: 'medium',
  },
  {
    id: 'g4',
    src: 'https://images.pexels.com/photos/9227978/pexels-photo-9227978.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Extreme macro of smooth vanilla gelato texture',
    caption: 'Texture, up close',
    aspect: 'landscape',
    span: 'wide',
  },
  {
    id: 'g5',
    src: 'https://images.pexels.com/photos/39133511/pexels-photo-39133511.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Gelato shop interior with display counter',
    caption: 'The counter, Bari',
    aspect: 'portrait',
    span: 'tall',
  },
  {
    id: 'g6',
    src: 'https://images.pexels.com/photos/3225499/pexels-photo-3225499.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Assorted gelato flavours in display freezer',
    caption: 'The daily selection',
    aspect: 'landscape',
    span: 'medium',
  },
  {
    id: 'g7',
    src: 'https://images.pexels.com/photos/5061195/pexels-photo-5061195.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Close-up of gelato scoops in metal trays',
    caption: 'Fresh from the freezer',
    aspect: 'portrait',
    span: 'medium',
  },
  {
    id: 'g8',
    src: 'https://images.pexels.com/photos/11136513/pexels-photo-11136513.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Nutella-filled crepes with hazelnuts on rustic wood',
    caption: 'Crepes, folded with care',
    aspect: 'portrait',
    span: 'tall',
  },
  {
    id: 'g9',
    src: 'https://images.pexels.com/photos/9140857/pexels-photo-9140857.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Pistachio gelato with nuts in a cone',
    caption: 'Pistachio, green gold',
    aspect: 'portrait',
    span: 'medium',
  },
  {
    id: 'g10',
    src: 'https://images.pexels.com/photos/3379706/pexels-photo-3379706.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Hand holding ice cream cone in sunny outdoor setting',
    caption: 'Passed across the counter',
    aspect: 'portrait',
    span: 'tall',
  },
  {
    id: 'g11',
    src: 'https://images.pexels.com/photos/17628616/pexels-photo-17628616.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Berry sorbet with strawberries and blueberries',
    caption: 'Summer sorbetto',
    aspect: 'portrait',
    span: 'medium',
  },
  {
    id: 'g12',
    src: 'https://images.pexels.com/photos/1683546/pexels-photo-1683546.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Assorted ice cream scoops with mint and biscuits',
    caption: 'A coppetta for two',
    aspect: 'landscape',
    span: 'wide',
  },
];
