const INITIAL_STATE = {
  sections: [
    {
      title: 'Fruits',
      imageUrl: 'https://image.shutterstock.com/image-photo/set-fruits-on-black-background-260nw-275784326.jpg',
      id: 1,
      linkUrl: 'shop/fruits'
    },
    {
      title: 'Pure Milk & Products',
      imageUrl: 'https://image.freepik.com/free-photo/milk-glass-dark-background_79161-469.jpg',
      id: 2,
      linkUrl: 'shop/milk'
    },
    {
      title: 'Homemade Pickles',
      imageUrl: 'https://st4.depositphotos.com/4940251/23477/i/450/depositphotos_234773176-stock-photo-close-traditional-raw-mango-pickle.jpg',
      id: 3,
      linkUrl: 'shop/pickles'
    },
    {
      title: 'Organic Vegetables',
      imageUrl: 'https://c8.alamy.com/comp/HJBFAW/colorful-fruits-and-vegetables-on-black-background-dieting-healthy-HJBFAW.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/vegetables'
    },
    {
      title: 'Homemade Masale',
      imageUrl: 'https://us.123rf.com/450wm/espies/espies1801/espies180100016/92642144-colourful-spices-for-garam-masala-food-ingredients-for-garam-masala-indian-spice-mix-with-powder-sel.jpg?ver=6',
      size: 'large',
      id: 5,
      linkUrl: 'shop/masale'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
