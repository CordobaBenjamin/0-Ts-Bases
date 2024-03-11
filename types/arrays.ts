(()=> {

    const number: (string | number | boolean) [] = [1,"2",false,];
    number.push(4);
    console.log(number);

    const city = ["New York", "Buenos Aires", "Caracas"]
    city.forEach(v => console.log(v.toUpperCase ()));

})()