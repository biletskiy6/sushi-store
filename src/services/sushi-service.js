export default class SushiService {
  getResource = async url => {
    const data = await fetch(url);
    return data;
  };
  getCategories = () => {
    let categories = [
      { id: 1, title: "Суши" },
      { id: 2, title: "Роллы" },
      { id: 3, title: "Сеты" },
      { id: 4, title: "Горячие блюда" },
      { id: 5, title: "Пицца" }
    ];
    return new Promise((resolve, reject) => {
      resolve(categories);
    });
  };
  getProducts = () => {
    let data = [
      {
        id: 0,
        title: "Филадельфия",
        image: "http://sushiyam.mk.ua/wp-content/uploads/2019/05/nagasaki.png",
        price: 100,
        description: "икра масаго, унаги соус, соус, окунь, сливочный сыр",
        count: 0,
        categoryId: 2
      },
      {
        id: 1,
        title: "Калифорния",
        image: "http://sushiyam.mk.ua/wp-content/uploads/2019/05/nagasaki.png",
        price: 300,
        description: "икра масаго, унаги соус, соус, окунь, сливочный сыр",
        count: 0,
        categoryId: 2
      },
      {
        id: 2,
        title: "Пицца Италия",
        image: "http://sushiyam.mk.ua/wp-content/uploads/2019/05/nagasaki.png",
        price: 200,
        description: "икра масаго, унаги соус, соус, окунь, сливочный сыр",
        count: 0,
        categoryId: 5
      },
      {
        id: 3,
        title: "Пицца Салями",
        image: "http://sushiyam.mk.ua/wp-content/uploads/2019/05/nagasaki.png",
        price: 100,
        description: "икра масаго, унаги соус, соус, окунь, сливочный сыр",
        count: 0,
        categoryId: 5
      },
      {
        id: 4,
        title: "Гренки с сыром",
        image: "http://sushiyam.mk.ua/wp-content/uploads/2019/05/nagasaki.png",
        price: 500,
        description: "икра масаго, унаги соус, соус, окунь, сливочный сыр",
        count: 0,
        categoryId: 4
      }
    ];
    return new Promise((resolve, reject) => {
      resolve(data);
    });
  };
}
