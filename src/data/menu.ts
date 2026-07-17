export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number; // Numeric price for calculations
  category: 'zingers' | 'broast' | 'wings' | 'snacks' | 'combos';
  image: string;
  badge?: string;
  spicyLevel?: 0 | 1 | 2 | 3;
}

export const menuItems: MenuItem[] = [
  {
    id: 'pc-zinger-classic',
    name: 'Classic Crunch Zinger',
    description: 'Crispy, juicy chicken thigh fillet hand-breaded in our secret 15-spice recipe, topped with fresh iceberg lettuce and premium garlic mayo in a soft toasted sesame bun.',
    price: 490,
    category: 'zingers',
    image: '/images/pc 1.jfif',
    badge: 'Best Seller',
    spicyLevel: 2
  },
  {
    id: 'pc-zinger-cheese',
    name: 'Double Cheese Melt Zinger',
    description: 'Our signature crispy golden fillet loaded with double cheddar cheese slices, spicy firecracker sauce, fresh lettuce, and pickled jalapeños.',
    price: 560,
    category: 'zingers',
    image: '/images/pc 2.jfif',
    badge: 'Chef Choice',
    spicyLevel: 3
  },
  {
    id: 'pc-zinger-fire',
    name: 'Firecracker Inferno Burger',
    description: 'Extreme heat! Crispy hand-breaded chicken dipped in fiery hot glaze, layered with jalapeño mayo, pepper jack cheese, and crispy onion rings.',
    price: 580,
    category: 'zingers',
    image: '/images/pc 13.jfif',
    spicyLevel: 3
  },
  {
    id: 'pc-broast-quarter',
    name: 'Signature Chicken Broast (Quarter)',
    description: 'Islamabad’s favorite! Crisp, pressure-fried quarter chicken marinated overnight, served with crinkle-cut fries, soft dinner roll, and our famous garlic dip.',
    price: 590,
    category: 'broast',
    image: '/images/pc chicken broast.avif',
    badge: 'Legendary',
    spicyLevel: 1
  },
  {
    id: 'pc-broast-half',
    name: 'Crispy Broast Feast (Half Chicken)',
    description: 'Perfect for sharing. Half chicken (2 pieces) cooked to golden perfection, crispy on the outside, tender and juicy inside. Served with double garlic sauce, fries, and bun.',
    price: 1090,
    category: 'broast',
    image: '/images/pc 12.jfif',
    spicyLevel: 1
  },
  {
    id: 'pc-wings-spicy',
    name: 'Hot & Spicy Wings (6 Pcs)',
    description: 'Tender chicken wings tossed in our signature crunch batter and fried to order. Spicy, crunchy, and absolutely delicious.',
    price: 430,
    category: 'wings',
    image: '/images/pc 3.jfif',
    badge: 'Must Try',
    spicyLevel: 2
  },
  {
    id: 'pc-wings-honey',
    name: 'Honey BBQ Glazed Wings (6 Pcs)',
    description: 'Crispy wings coated in a sticky, sweet, and smoky Honey BBQ sauce, garnished with toasted white sesame seeds.',
    price: 470,
    category: 'wings',
    image: '/images/pc 6.jfif',
    spicyLevel: 1
  },
  {
    id: 'pc-shots-classic',
    name: 'Popcorn Chicken Shots (15 Pcs)',
    description: 'Bite-sized, tender poppers of white-meat chicken breast, seasoned in mild spices and fried for the ultimate snackable crunch.',
    price: 390,
    category: 'snacks',
    image: '/images/pc 7.jfif',
    spicyLevel: 1
  },
  {
    id: 'pc-nuggets-premium',
    name: 'Premium Chicken Nuggets (9 Pcs)',
    description: 'Tempura-breaded premium chicken nuggets, soft and juicy inside, golden-crispy outside. Served with tangy honey mustard sauce.',
    price: 410,
    category: 'snacks',
    image: '/images/pc 8.jfif',
    spicyLevel: 0
  },
  {
    id: 'pc-french-fries',
    name: 'Masala Crinkle Fries',
    description: 'Crisp crinkle-cut potatoes dusted with our custom fiery peri-peri masala mix. Served hot with ketchup.',
    price: 250,
    category: 'snacks',
    image: '/images/pc 4.webp',
    spicyLevel: 1
  },
  {
    id: 'pc-deal-1',
    name: 'Solo Crunch Deal',
    description: '1 Classic Crunch Zinger + 1 Piece Signature Broast + 1 Regular Fries + 1 Soft Drink. The ultimate single feaster!',
    price: 890,
    category: 'combos',
    image: '/images/pc deal 1.jfif',
    badge: 'Super Saver',
    spicyLevel: 2
  },
  {
    id: 'pc-deal-duo',
    name: 'Duo Feaster Combo',
    description: '2 Classic Zingers + 4 Pcs Hot & Spicy Wings + 1 Large Masala Fries + 2 Soft Drinks. Perfect for a hangout pair.',
    price: 1590,
    category: 'combos',
    image: '/images/pc 10.jfif',
    badge: 'Popular',
    spicyLevel: 2
  },
  {
    id: 'pc-deal-bucket',
    name: 'Piper’s Mega Family Bucket',
    description: '8 Pcs Crispy Chicken Broast + 12 Pcs Popcorn Shots + 2 Soft Dinner Rolls + 1 Large Fries + 1.5L Soft Drink.',
    price: 2890,
    category: 'combos',
    image: '/images/pc 11.jfif',
    badge: 'Family Size',
    spicyLevel: 2
  },
  {
    id: 'pc-wrap-spicy',
    name: 'Crunchy Chicken Tortilla Wrap',
    description: 'Crispy chicken tenders wrapped in a warm flour tortilla with diced tomatoes, onions, lettuce, and our spicy ranch sauce.',
    price: 480,
    category: 'zingers',
    image: '/images/pc 9.jfif',
    spicyLevel: 2
  }
];

export const categories = [
  { id: 'all', name: 'All Items' },
  { id: 'zingers', name: 'Zinger Burgers' },
  { id: 'broast', name: 'Signature Broast' },
  { id: 'wings', name: 'Crispy Wings' },
  { id: 'snacks', name: 'Snacks & Sides' },
  { id: 'combos', name: 'Value Combos' }
];
