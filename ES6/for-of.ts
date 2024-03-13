(()=> {

    type avenger = {
        name:string;
        weapon:string;

    }

    const ironman:avenger = {
        name: "IronMan",
        weapon: "ArmorSuit"
    }

    const hulk:avenger = {
        name: "Hulk",
        weapon: "First"
    }

    const thor:avenger = {
        name: "Thor",
        weapon: "Hammer"
    }

    const avengers = [ ironman, thor, hulk]

    for (const avenger of avengers) {
        // console.log({avenger});
        
    }

})()