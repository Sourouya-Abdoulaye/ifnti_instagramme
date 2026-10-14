let nb_mo = 0;
let nb_ph = 0;
let nb_let = 0;

for (let element of 'abcovul. a!') {

    element = element.trim()

    if (element === '') {
        nb_mo += 1;
        // console.log("mot .....");
    } else if (element === '.' || element === '!') {
        nb_ph += 1;
        // console.log("mot .....");
    } 
    
    if (element !== '') {
        nb_let += 1;
        // console.log("mot .....");
    }



}

console.log(nb_let, nb_mo, nb_ph);


