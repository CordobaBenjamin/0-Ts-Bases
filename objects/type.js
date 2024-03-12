"use strict";
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Super Velocidad", "Viaje en el tiempo"],
    };
    let superman = {
        name: "Clark Kent",
        age: 34,
        powers: ["Super Velocidad", "Volar"],
        getName() {
            return this.name;
        }
    };
})();
