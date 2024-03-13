"use strict";
(() => {
    const avengers = {
        nick: "Samuel L Jackson",
        vision: "Paul Bettany",
        ironman: "Robert Downey Jr",
        activo: true,
        poder: 1500
    };
    const printAvengers = (avengers) => {
        // return console.log(avengers.poder.toFixed(2));
    };
    printAvengers(avengers);
    const avengersArr = ["Cap America", 10, true];
    const [capitan, ironman, nashe] = avengersArr;
    // console.log({ironman, capitan, nashe});
    // const {poder, vision} = avengers
    // console.log(poder.toFixed(0), vision.toUpperCase);
})();
(() => {
    const ironman = {
        name: "IronMan",
        weapon: "ArmorSuit"
    };
    const hulk = {
        name: "Hulk",
        weapon: "First"
    };
    const thor = {
        name: "Thor",
        weapon: "Hammer"
    };
    const avengers = [ironman, thor, hulk];
    for (const avenger of avengers) {
        // console.log({avenger});
    }
})();
//# sourceMappingURL=main.js.map