(()=> {

    let flash: {name: string , age?: number, powers: string[], getName?: () => string}  = {
        name: "Barry Allen",
        age: 24,
        powers: ["Super Velocidad", "Viaje en el tiempo"],
      
    }

     flash = {
        name: "Bruce Banner",
        age: 50,
        powers: ["Super Fueza"],
        getName () {
            return this.name
        }
     
    }

    // console.log( flash.getName() );
    

})()