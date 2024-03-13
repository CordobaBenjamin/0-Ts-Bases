(()=> {

    abstract class Mutante {
        constructor(
            name:string,
            realName:string,
        ){}
    }

    class Xmen extends Mutante {
        salvarMundo () {
            return "Mundo Salvado"
        }
       
    }
    class Villians extends Mutante {
        conquistarMundo () {
            return "Mundo Conquistado"
        }
        
    }


    const wolverine = new Xmen ("Wolverine", "Logan")
    const magneto = new Villians ("Magneto", "Magnus")

    console.log(wolverine.salvarMundo);
    console.log(magneto.conquistarMundo);
    
    const printName = ( character:Mutante) => {
        console.log(character.name);
        
    }
    
    printName("wolverine");
    
    

})()