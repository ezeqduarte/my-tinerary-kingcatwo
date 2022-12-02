let hotels = [
  {
    id: "ho1",
    name: "The Harbourview",
    photo: [
      "https://images.pexels.com/photos/5563472/pexels-photo-5563472.jpeg?auto=compress&cs=tinysrgb&w=1600",
      " https://i.natgeofe.com/n/108a3edc-7197-46bd-8baa-7367d30e39a6/book-and-bed-bookstoe-hotel-tokyo-japan.jpg?w=795&h=530",
      "https://images.adsttc.com/media/images/563c/db64/e58e/ce00/0f00/0002/large_jpg/TOM_ROE_SENSE_OF_PLACE.jpg?1446828875",
    ],
    capacity: 40000,
    description:
      "In this modern hotel located in a cristal skycraper you can enjoy te best comodities and is only 2 mins to the bus.",
    cityId: "city1",
    userId: "admn0",
  },
  {
    id: "ho2",
    name: "Hyatt Place Bangkok Sukhumvit",
    photo: [
      "https://i.natgeofe.com/n/5adfa643-6722-4fc3-ab7b-301d7d2050ad/igloo-golden-crown-levin-iglut-levi-finland.jpg?w=795&h=528.75",
      " https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1600 ",
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hoshinoya-kyoto-floating-tearoom-3-1549906559.jpg ",
    ],
    capacity: 10000,
    description:
      "A modern hotel full of informal restaurants is just 3 min of luxury shops in the comercial Emporium center.",
    cityId: "city2",
    userId: "admn0",
  },
  {
    id: "ho3",
    name: "Cisne Azul",
    photo: [
      "https://www.travelandleisure.com/thmb/rXM-f7JouFgixkf3kxqWRObf4YE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/burj-al-arab-jumeirah-dubai-lead-AMECITYHOTELSWB20-1e5d98ddfbd441bba2df31ddb839108f.jpg",
      "https://media.cntraveller.com/photos/611beb3280db5ca184e70cf5/master/w_1920%2Cc_limit/wickannish.jpg",
      "https://www.travelandleisure.com/thmb/HaAgtnns6Cp6Tb08MJq8xXOHzH0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/soneva-jani-sunset-view-maldives-SONEVA0421-74b37591d80441ce87831a41da518e49.jpg",
    ],
    capacity: 10000,
    description:
      "A beautiful and relaxing place close to the beach, nice for couples or families.",
    cityId: "city3",
    userId: "admn0",
  },
  {
    id: "ho4",
    name: "Steigenberger Hotel El Tahrir Cairo",
    photo: [
      "https://i.natgeofe.com/n/108a3edc-7197-46bd-8baa-7367d30e39a6/book-and-bed-bookstoe-hotel-tokyo-japan.jpg?w=795&h=530",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/34687298.jpg?k=95558a4f06c02cf922911301c846d382eafe1a091b088918d798e7cd5ecf3bad&o=&hp=1",
      "https://img.freepik.com/free-photo/leisure-beautiful-health-garden-landscape_1203-4856.jpg?w=2000",
    ],
    capacity: 25000,
    description:
      "Steigenberger is a reallly luxury and giant hotel at Cairo with beautiful wievs.",
    cityId: "city4",
    userId: "admn0",
  },
  {
    id: "ho5",
    name: "Tea-Time",
    photo: [
      "https://img.freepik.com/free-photo/leisure-beautiful-health-garden-landscape_1203-4856.jpg?w=2000",
      " https://cdn.pixabay.com/photo/2017/05/31/10/23/manor-house-2359884_960_720.jpg ",
      "https://cdn.cnn.com/cnnnext/dam/assets/160509165851-1--monastero-sta-rosa-super-169.jpg",
    ],
    capacity: 8000,
    description:
      "If you like tea and bakery come to Tea-Time hotel in London, ideal for families and couples.",
    cityId: "city5",
    userId: "admn0",
  },
  {
    id: "ho6",
    name: "LaFleur Monclaire",
    photo: [
      "https://cdn.pixabay.com/photo/2015/09/18/01/02/pool-944908_960_720.jpg",
      "https://cdn.pixabay.com/photo/2017/04/28/22/14/room-2269591_960_720.jpg ",
      "https://images.pexels.com/photos/2598638/pexels-photo-2598638.jpeg?auto=compress&cs=tinysrgb&w=1600  ",
    ],
    capacity: 5000,
    description:
      "LaFleaur Monclaire is one of the top rated hotels in Paris, a really good option for families with pets.",
    cityId: "city6",
    userId: "admn0",
  },
  {
    id: "ho7",
    name: "Isola Sacra",
    photo: [
      "https://cdn.pixabay.com/photo/2013/07/19/00/18/water-165219_960_720.jpg ",
      "https://cdn.pixabay.com/photo/2021/08/27/01/33/bedroom-6577523__340.jpg ",
      "https://cdn.pixabay.com/photo/2014/07/10/17/17/hotel-389256__340.jpg",
    ],
    capacity: 2000,
    description:
      "Isola Sacra has a really good gastronomy, if you are a pizza and pasta lover this is the place.",
    cityId: "city7",
    userId: "admn0",
  },
  {
    id: "ho8",
    name: "The Grand Uddhav",
    photo: [
      "https://cdn.pixabay.com/photo/2016/08/26/20/30/hotel-1623064__340.jpg ",
      "https://cdn.pixabay.com/photo/2016/10/13/09/06/travel-1737168__340.jpg ",
      "https://cdn.pixabay.com/photo/2017/04/28/22/16/room-2269594__340.jpg ",
    ],
    capacity: 60000,
    description:
      "Grand Uddhav is a luxury option for the most demanding clients, expensive but worth it.",
    cityId: "city8",
    userId: "admn0",
  },
  {
    id: "ho9",
    name: "Erten Konak Hotel",
    photo: [
      "https://cdn.pixabay.com/photo/2014/05/18/19/15/walkway-347319__340.jpg ",
      "https://cdn.pixabay.com/photo/2015/11/06/11/45/interior-1026452__340.jpg ",
      "https://cdn.pixabay.com/photo/2014/06/05/08/12/hotel-lobby-362568__340.jpg",
    ],
    capacity: 15000,
    description:
      "Come and enjoy the best service and native food at Erten Konak.",
    cityId: "city9",
    userId: "admn0",
  },
  {
    id: "ho10",
    name: "Berjaya Times Square Hotel",
    photo: [
      "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1600  ",
      "https://images.pexels.com/photos/277572/pexels-photo-277572.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
    capacity: 8000,
    description:
      "Berjaya has the most beautiful pool and an excellent attention, a good option if you like to stay at the hotel",
    cityId: "city10",
    userId: "admn0",
  },
  {
    id: "ho11",
    name: "Hilton",
    photo: [  "https://images.pexels.com/photos/261388/pexels-photo-261388.jpeg?auto=compress&cs=tinysrgb&w=1600 ",
    "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=1600 ",
    "https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=1600",],
    capacity: 18000,
    description:
      "It is an famous Argentinian hotel, usually u gonna find a lot of celebrities in the principal hall.",
    cityId: "city11",
    userId: "admn0",
  },
  {
    id: "ho12",
    name: "Keihan Tsukiji Ginza Grande",
    photo: ["https://images.pexels.com/photos/261395/pexels-photo-261395.jpeg?auto=compress&cs=tinysrgb&w=1600  ",
    "https://images.pexels.com/photos/7786785/pexels-photo-7786785.jpeg?auto=compress&cs=tinysrgb&w=1600 ",
    "https://images.pexels.com/photos/5563472/pexels-photo-5563472.jpeg?auto=compress&cs=tinysrgb&w=1600"],
    capacity: 23000,
    description:
      "Keihan is one of the most wanted hotels in Tokyo, known for its ecellent native food and massages",
    cityId: "city12",
    userId: "admn0",
  },
];


export default hotels;







