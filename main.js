"use strict";
(() => {
    // Objetos
    const batimovil = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4
    };
    const bumblebee = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar() {
            console.log("Disparando");
        }
    };
    // Villanos debe de ser un arreglo de objetos personalizados
    const villanos = [{
            nombre: "Lex Luthor",
            edad: 54,
            mutante: false
        }, {
            nombre: "Erik Magnus Lehnsherr",
            edad: 49,
            mutante: true
        }, {
            nombre: "James Logan",
            edad: undefined,
            mutante: true
        }];
    const charles = {
        poder: "psiquico",
        estatura: 1.78
    };
    const apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
    };
    // Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
    let mystique;
    mystique = charles;
    mystique = apocalipsis;
})();
(() => {
    const fullName = (firstName, lastName, upper) => {
        if (upper) {
            return `${firstName} ${lastName}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName}`.toLowerCase();
        }
        // return `${firstName} ${lastName || ""}`;
    };
    const name = fullName("Tony", "Stark", true);
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || ""}`;
    };
    const name = fullName("Tony");
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName("tony", "stark");
    console.log({ name });
})();
(() => {
    const fullName = (fistName, ...restArgs) => {
        return `${fistName} ${restArgs.join(" ")}`;
    };
    const superman = fullName("Clark", "Joseph", "Kent", "Cordoba");
    console.log(superman);
})();
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hola ${name};`;
    const saveTheWorld = () => `El mundo esta salvado!`;
    let myFunction;
    myFunction = addNumber;
    console.log(myFunction(1, 2));
    myFunction = greet;
    console.log(myFunction("horacio"));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
(() => {
    const hero = "Flash";
    function returnName() {
        return hero;
    }
    const activateBatiSignal = () => {
        return "BatiSignal On!";
    };
    console.log(typeof activateBatiSignal);
    const heroName = returnName();
})();
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Super Velocidad", "Viaje en el tiempo"],
    };
    flash = {
        name: "Bruce Banner",
        age: 50,
        powers: ["Super Fueza"],
        getName() {
            return this.name;
        }
    };
    // console.log( flash.getName() );
})();
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
(() => {
    let myCustomVariable = "Fernando";
    console.log(myCustomVariable);
    myCustomVariable = "hola";
    console.log(typeof myCustomVariable);
    myCustomVariable = 10;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: "Bruce",
        age: 25,
        powers: ["Invisible"],
    };
    console.log(typeof myCustomVariable);
})();
//# sourceMappingURL=main.js.map