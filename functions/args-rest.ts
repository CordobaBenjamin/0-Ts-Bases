(()=> {
    const fullName = (fistName:string, ...restArgs:string[]) => {
        return `${fistName} ${restArgs.join(" ")}`
    }
    const superman = fullName ("Clark", "Joseph", "Kent", "Cordoba")
    console.log(superman);
    
})()