(()=>{
    const hero:string = "Flash";

    function returnName ():string {
        return hero;
    }

    const activateBatiSignal = ():string => { 
        return "BatiSignal On!"
    }    

    console.log(typeof activateBatiSignal);
    
    const heroName = returnName()
})()