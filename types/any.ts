(()=> {
 let bsAs:any;
 let nY:any = "ABC";

 bsAs = "Moron"
 console.log(bsAs.charAt(2));

 bsAs= "1982"
 console.log((bsAs as string).charAt(2));

 bsAs = 1982
 console.log((<number> bsAs).toFixed(2));
 
 
 
 
})()