// Constats
export const ARGUMENTS_LENGTH_ERROR = "le nombre d'argument n'est pas valide"
export const TYPE_ARGUMENTS_DOEST_NOT_MATCH_ERROR = "le nombre d'argument n'est pas valide"

const somme = (a, b, c) => {

    if (typeof a === "number" || typeof b === "number" || typeof c === "number") {
        throw new Error(TYPE_ARGUMENTS_DOEST_NOT_MATCH_ERROR);
    }

    if (a === undefined || b === undefined || c === undefined) {
        throw new Error(ARGUMENTS_LENGTH_ERROR);
    }
    return a + b + c;
}


/**
 * somme : (nbr1, nbr3, nbr2) son des number => number
 * cas normal: 1,2,3 => 6
 * cas non normal: propager un erreure avec le bon message
 * ->arg manquante 
 * ->valeur nom number (NAN)
 */

test_somme_cas_normale()
test_somme_cas_nombre_arguments_non_respecter()

function test_somme_cas_normale() {
    // arrange '(preparer les donner)
    let nbr1 = 10;
    let nbr2 = 10;
    let nbr3 = 10;
    const resultatAttendu = nbr1 + nbr2 + nbr3;

    // act (on agit )
    const resultatObtenu = somme(nbr1, nbr2, nbr3);

    // assert
    if (resultatAttendu === resultatObtenu) {
        console.log("PASSED....")
    } else {
        console.log("FAILED....")
    }
}


// si on lui donne 3 arguments normalement ca doit echouer
function test_somme_cas_nombre_arguments_non_respecter() {
    /**
     * pas trois arguments => t
     */
    // arrange (preparer les donner)

    const resultatAttendu = TYPE_ARGUMENTS_DOEST_NOT_MATCH_ERROR;

    // act (on agit )
    // comme on veut propager l'erreur, donc utiliser try, catch

    let resultatObtenu;
    try {
        resultatObtenu = somme();
    } catch (error) {
        resultatObtenu = error.message
    }


    // assert
    if (resultatAttendu === resultatObtenu) {
        console.log("PASSED....")

    } else {
        console.log("FAILED....")
    }
}

function test_somme_cas_type_arguments_non_respecter() {


    let nbr1 = "";
    let nbr2 = [];
    let nbr3 = 10;

    // arrange (preparer les donner)
    const resultatAttendu = TYPE_ARGUMENTS_DOEST_NOT_MATCH_ERROR;

    // act (on agit )
    // comme on veut propager l'erreur, donc utiliser try, catch

    let resultatObtenu;
    try {
        resultatObtenu = somme(nbr1,nbr2,nbr3);
    } catch (error) {
        resultatObtenu = error.message
    }


    // assert
    if (resultatAttendu === resultatObtenu) {
        console.log("PASSED....")

    } else {
        console.log("FAILED....")
    }
}






// exporter les fonction
export default somme;