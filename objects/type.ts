(()=> {

    type hero = {
        name: string;
        age: number;
        powers: string[];
        getName?: () => string;
    }
   
    let flash: hero  = {
        name: "Barry Allen",
        age: 24,
        powers: ["Super Velocidad", "Viaje en el tiempo"],
      
    }

    let superman: hero  = {
        name: "Clark Kent",
        age: 34,
        powers: ["Super Velocidad", "Volar"],
        getName() {
            return this.name;
        }
      
    }
 

})()