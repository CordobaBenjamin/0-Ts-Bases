(()=> {

    const fullName = ( firstName:string, lastName:string):String => {
        return `${firstName} ${lastName}`;
    }

    const name = fullName ("tony", "stark")
    
    console.log({name});
    

})()