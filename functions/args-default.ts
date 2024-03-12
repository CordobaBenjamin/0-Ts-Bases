(()=> {

    const fullName = ( firstName:string, lastName:string, upper:boolean):String => {
        if (upper) {
            return `${firstName} ${lastName}`.toUpperCase()
        } else {
            return `${firstName} ${lastName}`.toLowerCase()
        }

        // return `${firstName} ${lastName || ""}`;
    }

    const name = fullName ("Tony", "Stark", true)
    
    console.log({name});
    

})()