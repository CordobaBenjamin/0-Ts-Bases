"use strict";
(() => {
    class Mutante {
        constructor(name, realName) { }
    }
    class Xmen extends Mutante {
        salvarMundo() {
            return "Mundo Salvado";
        }
    }
    class Villians extends Mutante {
        conquistarMundo() {
            return "Mundo Conquistado";
        }
    }
    const wolverine = new Xmen("Wolverine", "Logan");
    const magneto = new Villians("Magneto", "Magnus");
    console.log(wolverine.salvarMundo);
    console.log(magneto.conquistarMundo);
    const printName = (character) => {
        console.log(character.name);
    };
    printName("wolverine");
})();
// (()=> {
//     class Avenger { 
//         constructor( 
//             private name:string, 
//             private team:string, 
//             public realName:string) {}
//             private bio ()  {
//                 return `${this.name} (${this.team})`
//             }
//     }
//     const hulk: Avenger = new Avenger("Hulk", "Avengers", "Bruce Banner");    
// })()
// (()=> {
//     class Avenger {
//         constructor(
//             public name:string,
//             public realName:string,
//         ){
//         }
//         protected getFullName() {
//             return `${this.name} ${this.realName
//         }
//     }
//     class Xmen extends Avenger {
//         constructor(
//             name:string,
//             realName:string,
//             public isMutant:boolean,
//         ){
//             super(name, realName)
//             console.log("Constructor Xmen Llamado");
//         }
//         get fullName() {
//             return `${this.name} - ${this.realName} `
//         }
//         set fullName(name:string) {
//             if (name.length < 3) {
//                 throw Error ("El nombre debe ser mayor a 3 letras")
//             } else {
//                 this.name = name;
//             }
//         }
//         getFullNameDesdeXmen() {
//         }
//     }
//     const Wolverine = new Xmen("Wolverine", "Logan", true)
//     Wolverine.fullName = "Fernando"
// })()
//# sourceMappingURL=main.js.map