const SHOP_DATA = {
  fruits: {
    id: 1,
    title: 'Fruits',
    routeName: 'fruits',
    items: [
      {
        id: 1,
        name: 'Kesar',
        imageUrl: 'https://t3.ftcdn.net/jpg/03/52/97/82/240_F_352978208_ODXAB5veajndezLUqVRpYKAFCvPRk6Dz.jpg',
        price: 180
      },
      {
        id: 2,
        name: 'Peaches',
        imageUrl: 'https://ak.picdn.net/shutterstock/videos/4162456/thumb/1.jpg',
        price: 130
      },
      {
        id: 3,
        name: 'Jamun',
        imageUrl: 'https://res.cloudinary.com/du8msdgbj/images/v1555478423/c6tkoh3mezzjdlrvaeps/jamun.jpg',
        price: 105
      },
      {
        id: 4,
        name: 'Pomegranates/Anar',
        imageUrl: 'https://thumbor.thedailymeal.com/9nGb0CUE2BG0I2MIwN0MVZit1Lo=/870x565/https://www.thedailymeal.com/sites/default/files/story/pom_flickr2_crop.jpg',
        price: 170
      },
      {
        id: 5,
        name: 'Orange',
        imageUrl: 'https://image.shutterstock.com/image-photo/orange-leaf-against-black-background-600w-112237322.jpg',
        price: 160
      },
      {
        id: 6,
        name: 'Apple',
        imageUrl: 'data:image/jpeg;base64,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',
        price: 140
      },
      {
        id: 7,
        name: 'Hapus Mango',
        imageUrl: 'https://images.assettype.com/indynetwork%2F2018-06%2Fb5a067ba-d50d-4f83-b944-3ed4b0372ecd%2F050978df_fcf9_4613_b24d_2fdec6708c57.jpg?w=1170',
        price: 160
      },
      {
        id: 8,
        name: 'Cheries',
        imageUrl: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/05/30/15/cherries.jpg?w968h681',
        price: 140
      },
    ]
  },
  milk: {
    id: 2,
    title: 'Milk & Products',
    routeName: 'milk',
    items: [
      {
        id: 10,
        name: 'Pure Cream Milk',
        imageUrl: 'https://ak.picdn.net/shutterstock/videos/21587131/thumb/1.jpg',
        price: 45
      },
      {
        id: 11,
        name: 'Homemade Curd',
        imageUrl: 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX1683678.jpg',
        price: 35
      },
      {
        id: 12,
        name: 'Pure Butter',
        imageUrl: 'https://ak.picdn.net/shutterstock/videos/2680655/thumb/1.jpg',
        price: 110
      },
      {
        id: 13,
        name: 'Homemade Ghee',
        imageUrl: 'https://livingsmartandhealthy.com/wp-content/uploads/2019/01/ghee-500x375.jpg',
        price: 160
      },
      {
        id: 14,
        name: 'Cheese',
        imageUrl: 'https://thumbs.dreamstime.com/b/piece-cheese-isolated-black-background-piece-cheese-isolated-black-background-horizontal-photo-168637612.jpg',
        price: 160
      },
      {
        id: 15,
        name: 'Panner',
        imageUrl: 'https://t3.ftcdn.net/jpg/02/98/87/18/240_F_298871858_vK29Sm9s7c6T9HZNVBlzcaz0JKhp0Spm.jpg',
        price: 160
      },
      {
        id: 16,
        name: 'Peda',
        imageUrl: 'https://st4.depositphotos.com/7238240/29699/i/1600/depositphotos_296995220-stock-photo-pedha-indian-sweet-milk-fudge.jpg',
        price: 190
      },
      {
        id: 17,
        name: 'Rabadi',
        imageUrl: 'https://image.shutterstock.com/image-photo/sweet-rabdi-lachha-rabri-basundi-260nw-1230247381.jpg',
        price: 200
      }
    ]
  },
  pickles: {
    id: 3,
    title: 'Homemade Pickles',
    routeName: 'pickles',
    items: [
      {
        id: 18,
        name: 'Dill Pickles',
        imageUrl: 'https://www.pbs.org/food/wp-content/blogs.dir/2/files/2014/09/thk-pickles600.jpg',
        price: 125
      },
      {
        id: 19,
        name: 'Green Chilli Pickle',
        imageUrl: 'https://thumbs.dreamstime.com/b/green-chilli-pickle-marinated-mustard-seeds-oil-dark-gothic-style-still-life-concept-147315829.jpg',
        price: 90
      },
      {
        id: 20,
        name: 'Mango',
        imageUrl: 'https://thumbs.dreamstime.com/b/homemade-mixed-raw-mango-pickle-prepared-oil-spices-mixed-mango-pickle-127379299.jpg',
        price: 90
      },
      {
        id: 21,
        name: 'Lemmon',
        imageUrl: 'https://i.ytimg.com/vi/GYYbJER_bJ0/maxresdefault.jpg',
        price: 80
      }
    ]
  },
  masale: {
    id: 4,
    title: 'Masale',
    routeName: 'masale',
    items: [
      {
        id: 23,
        name: 'Cardamom',
        imageUrl: 'https://thumbs.dreamstime.com/b/cardamom-fresh-white-background-95627899.jpg',
        price: 80
      },
      {
        id: 24,
        name: 'Cloves',
        imageUrl: 'data:image/jpeg;base64,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',
        price: 50
      },
      {
        id: 25,
        name: 'Chilli',
        imageUrl: 'https://image.freepik.com/free-photo/red-chilli-pepper-powder-white-background_55610-589.jpg',
        price: 80
      },
      {
        id: 26,
        name: 'Garam Masala',
        imageUrl: 'https://thumbs.dreamstime.com/b/garam-masala-indian-spice-mix-19101285.jpg',
        price: 80
      }
    ]
  },
  vegetables: {
    id: 5,
    title: 'Vegetables',
    routeName: 'vegetables',
    items: [
      {
        id: 30,
        name: 'Lauky',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61WiDPDIoJL._SX466_.jpg',
        price: 25
      },
      {
        id: 31,
        name: 'Karela',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSmvLfCI1l0_-7wVEBvhywSYx5ty1Gb3SJv19xIypqrTE9UZ9Ly&usqp=CAU',
        price: 20
      },
      {
        id: 32,
        name: 'Tinda',
        imageUrl: 'https://189662-567937-3-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/03/Comp2-15.jpg',
        price: 25
      },
      {
        id: 33,
        name: 'Parwal',
        imageUrl: 'https://i.ytimg.com/vi/RpiZ6soLgsw/maxresdefault.jpg',
        price: 25
      },
      {
        id: 34,
        name: 'Tomato',
        imageUrl: 'https://ak.picdn.net/shutterstock/videos/19947409/thumb/1.jpg',
        price: 40
      },
      {
        id: 35,
        name: 'Bhindi',
        imageUrl: 'https://lh3.googleusercontent.com/proxy/Pdy8peJfZlFw0Y9nmFzP7SDRPA1iQ5MRvkJtxrFV4-ndpEmqOO7KCtirPWXeoPVk40_Yyk55fBWyAJQwQPqscacp_apd4Obs0iQFy4y98kaHBRPRBQ_SK_D87e1bSTn_Dw',
        price: 25
      }
    ]
  }
};

export default SHOP_DATA;
