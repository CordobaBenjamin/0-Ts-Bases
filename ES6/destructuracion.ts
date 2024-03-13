(() => {

    type Avengers = {
        nick: string;
        vision: string;
        ironman: string;
        activo: boolean;
        poder: number;
    }

    const avengers:Avengers = {
        nick: "Samuel L Jackson",
        vision: "Paul Bettany",
        ironman: "Robert Downey Jr",
        activo: true,
        poder: 1500
    }

    const printAvengers = (avengers:Avengers) => {
        // return console.log(avengers.poder.toFixed(2));
        
    }
    printAvengers(avengers)

    const avengersArr:[string, number, boolean] = ["Cap America", 10, true]

    const [capitan , ironman, nashe] = avengersArr;
    // console.log({ironman, capitan, nashe});
    
    // const {poder, vision} = avengers

    // console.log(poder.toFixed(0), vision.toUpperCase);
    
})()