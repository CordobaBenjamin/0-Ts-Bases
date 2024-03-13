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