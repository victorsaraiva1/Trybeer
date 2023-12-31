module.exports = {
  up: async queryInterface => (
    queryInterface.bulkInsert(
      'Products',
      [
        {
          name_product: 'Skol Lata 250ml',
          price: 2.20,
          image: 'http://localhost:3001/skol-lata-350ml.jpg',
        },
        {
          name_product: 'Heineken 600ml',
          price: 7.50,
          image: 'http://localhost:3001/heineken-600ml.jpg',
        },
        {
          name_product: 'Antarctica Pilsen 300ml',
          price: 2.49,
          image: 'http://localhost:3001/antarctica-pilsen-300ml.jpg',
        },
        {
          name_product: 'Brahma 600ml',
          price: 7.50,
          image: 'http://localhost:3001/brahma-600ml.jpg',
        },
        {
          name_product: 'Skol 269ml',
          price: 2.19,
          image: 'http://localhost:3001/skol-269ml.jpg',
        },
        {
          name_product: 'Skol Beats Senses 313ml',
          price: 4.49,
          image: 'http://localhost:3001/skol-beats-senses-313ml.jpg',
        },
        {
          name_product: 'Becks 330ml',
          price: 4.99,
          image: 'http://localhost:3001/becks-330ml.jpg',
        },
        {
          name_product: 'Brahma Duplo Malte 350ml',
          price: 2.79,
          image: 'http://localhost:3001/brahma-duplo-malte-350ml.jpg',
        },
        {
          name_product: 'Becks 600ml',
          price: 8.89,
          image: 'http://localhost:3001/becks-600ml.jpg',
        },
        {
          name_product: 'Skol Beats Senses 269ml',
          price: 3.57,
          image: 'http://localhost:3001/skol-beats-senses-269ml.jpg',
        },
        {
          name_product: 'Stella Artois 275ml',
          price: 3.49,
          image: 'http://localhost:3001/stella-artois-275ml.jpg',
        },
      ],
      {},
    )
  ),

  down: async queryInterface => queryInterface.bulkDelete('Products', null, {}),
};
