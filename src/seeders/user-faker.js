"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    let userArray = [
      {
        role: 1,
        username: "admin",
        phonenumber: null,
        email: "admintest@admin.com",
        password:
          "$2a$10$TB0ZOdUaSdWCJjXY5GnfquMEBw6WuBDaN5rRyGDIj4M6maqD51nES",
        status: 1,
      },
    ];
    await queryInterface.bulkInsert("User", userArray, {});
    //import showing.json
    const fs = require("fs");
    const data = fs.readFileSync("./src/seeders/showing.json", "utf8");
    const showing = JSON.parse(data);
    await queryInterface.bulkInsert(
      "Showing",
      showing.filmShowing.map((film) => {
        return {
          name: film.name,
          time: film.time,
          timeStart: film.timeStart,
          genre: film.genre.join(),
          category: film.category.join(),
          rating: film.rating,
          description: film.description,
          imgUrl: film.imgUrl,
        };
      }),
      {}
    );

    //import upcoming.json
    const data2 = fs.readFileSync("./src/seeders/upcoming.json", "utf8");
    const upcoming = JSON.parse(data2);
    await queryInterface.bulkInsert(
      "Upcoming",
      upcoming.filmUpcoming.map((film) => {
        return {
          name: film.name,
          time: film.time,
          timeStart: film.timeStart,
          genre: film.genre.join(),
          category: film.category,
          description: film.description,
          imgUrl: film.imgUrl,
        };
      }),
      {}
    );
    //
    let screenArray = [
      "screen1",
      "screen2",
      "screen3",
      "screen4",
      "screen5",
      "screen6",
      "screen7",
      "screen8",
      "screen9",
      "screen10",
    ];
    await queryInterface.bulkInsert(
      "Screen",
      screenArray.map((item) => {
        return {
          name: item,
        };
      }),
      {}
    );
    let showingScreenArray = [];
    let timeListBase = [
      "8h30 - 10h30",
      "10h30 - 12h30",
      "13h30 - 15h30",
      "15h30 - 17h30",
      "18h30 - 20h30",
      "20h30 - 22h30",
      "22h30 - 00h30",
    ];
    const getrandom2oftimeListBase = () => {
      let timeList = [...timeListBase];
      let time1 = timeList[Math.floor(Math.random() * timeList.length)]
      timeList = timeList.filter((item) => item !== time1);
      let time2 = timeList[Math.floor(Math.random() * timeList.length)]
      return [time1, time2].join();
    };

    for (let i = 1; i <= showing.filmShowing.length; i++) {
      showingScreenArray.push({
        screenId: Math.floor(Math.random() * 10) + 1,
        showingId: i,
        timeList: getrandom2oftimeListBase(),
      });
    }
    console.log(showingScreenArray);
    await queryInterface.bulkInsert("ScreenShowing", showingScreenArray, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
