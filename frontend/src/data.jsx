import categoryImage from './images/category.png';

export const products = [
  {
    id: 1,
    name: 'Natural 1 Soap',
    images: [
      'https://image.freepik.com/free-psd/cosmetic-product-packaging-mockup_1150-40284.jpg',
      'https://image.freepik.com/free-psd/skin-care-moisturizing-cosmetic-premium-products-premium-psd_99236-248.jpg',
      'https://image.freepik.com/free-psd/cosmetic-products-assortment_23-2148608244.jpg',
      'https://image.freepik.com/free-psd/beauty-care-cosmetic-product-mock-up_23-2148891564.jpg',
    ],
    price: 30,
    brand: 'CeraVe',
    category: 'Soaps',
    countInStock: 0,
    short_description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut vestibulum lorem. Morbi porttitor feugiat',
    long_description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus. Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. ',
    discounted_price: 0,
  },

  {
    id: 2,
    name: 'Second Candle',
    images: [
      'https://image.freepik.com/free-psd/cosmetic-product-packaging-mockup_1150-40284.jpg',
      'https://image.freepik.com/free-psd/skin-care-moisturizing-cosmetic-premium-products-premium-psd_99236-248.jpg',
      'https://image.freepik.com/free-psd/cosmetic-products-assortment_23-2148608244.jpg',
      'https://image.freepik.com/free-psd/beauty-care-cosmetic-product-mock-up_23-2148891564.jpg',
    ],
    price: 30,
    brand: 'CeraVe',
    category: 'Candles',
    countInStock: 10,
    short_description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut vestibulum lorem. Morbi porttitor feugiat',
    long_description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus. Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. ',
    discounted_price: 0,
  },
  {
    id: 3,
    name: 'Natural 3 Hair Shampoo',
    images: [
      'https://image.freepik.com/free-psd/cosmetic-product-packaging-mockup_1150-40284.jpg',
      'https://image.freepik.com/free-psd/skin-care-moisturizing-cosmetic-premium-products-premium-psd_99236-248.jpg',
      'https://image.freepik.com/free-psd/cosmetic-products-assortment_23-2148608244.jpg',
      'https://image.freepik.com/free-psd/beauty-care-cosmetic-product-mock-up_23-2148891564.jpg',
    ],
    price: 30,
    brand: 'CeraVe',
    category: 'Hair',
    countInStock: 10,
    short_description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut vestibulum lorem. Morbi porttitor feugiat',
    long_description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus. Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. ',
    discounted_price: 0,
  },
];

export const categories = [
  { name: 'Soaps', image: categoryImage },
  { name: 'Candles', image: categoryImage },
  { name: 'Hair', image: categoryImage },
  { name: 'Skin', image: categoryImage },
];

export const cities = [
  { name: 'Baghdad', shipping_cost: 5 },
  { name: 'Basrah', shipping_cost: 10 },
  { name: 'Najaf', shipping_cost: 8 },
];
