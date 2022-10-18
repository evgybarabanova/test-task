'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Items', [
      { date: new Date(), name: 'Село', count: 1, distance: 100 },
      { date: new Date(), name: 'Город', count: 2, distance: 200 },
      { date: new Date(), name: 'Страна', count: 3, distance: 300 },
      { date: new Date(), name: 'Планета', count: 4, distance: 400 },
      { date: new Date(), name: 'Улица', count: 5, distance: 500 },
      { date: new Date(), name: 'Солнечная Система', count: 6, distance: 600 },
      { date: new Date(), name: 'Поселение', count: 7, distance: 700 },
      { date: new Date(), name: 'Поселок', count: 8, distance: 800 },
      { date: new Date(), name: 'Деревня', count: 9, distance: 900 },
      { date: new Date(), name: 'Край', count: 10, distance: 1000 },
      { date: new Date(), name: 'Регион', count: 11, distance: 1100 },
      { date: new Date(), name: 'Республика', count: 12, distance: 1200 },
      { date: new Date(), name: 'Область', count: 13, distance: 1300 },
      { date: new Date(), name: 'Район', count: 14, distance: 1400 },
      { date: new Date(), name: 'Квартал', count: 15, distance: 1500 },
      { date: new Date(), name: 'Проспект', count: 16, distance: 1600 },
      { date: new Date(), name: 'Автономия', count: 17, distance: 1700 },
      { date: new Date(), name: 'Галактика', count: 18, distance: 1800 },
      { date: new Date(), name: 'Квартира', count: 19, distance: 1900 },
      { date: new Date(), name: 'Дом', count: 20, distance: 2000 },
      { date: new Date(), name: 'Область', count: 13, distance: 1300 },
      { date: new Date(), name: 'Район', count: 14, distance: 1400 },
      { date: new Date(), name: 'Квартал', count: 15, distance: 1500 },
      { date: new Date(), name: 'Проспект', count: 16, distance: 1600 },
      { date: new Date(), name: 'Автономия', count: 17, distance: 1700 },
      { date: new Date(), name: 'Галактика', count: 18, distance: 1800 },
      { date: new Date(), name: 'Квартира', count: 19, distance: 1900 },
      { date: new Date(), name: 'Дом', count: 20, distance: 2000 }
    ], {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Items', null, {});
  }
};
