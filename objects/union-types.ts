(()=>{

    type hero = {
        name: string;
        age: number;
        powers: string[];
        getName?: () => string;
    }

    let myCustomVariable: (string | number | hero) = "Fernando"
    console.log(myCustomVariable);
    
    myCustomVariable= "hola"
    console.log(typeof myCustomVariable);

    myCustomVariable= 10
    console.log(typeof myCustomVariable);

    myCustomVariable = {
        name: "Bruce",
        age: 25,
        powers: ["Invisible"],

    }
    console.log(typeof myCustomVariable);

    


})()