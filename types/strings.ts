(()=> {
    const batman:string = "Batman";
    const hulk:string = "Hulk";
    const volcanNegro:string = "Heroe: Volcan Negro";
    const abc = 123;

    console.log(`i'm ${ hulk }, ${abc.toString}`);
    

    console.log(batman[2]?.toUpperCase() || "Esta con alfred");
    
}) ()