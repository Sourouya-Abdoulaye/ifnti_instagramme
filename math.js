
export function produits(a, b) {
    return 'produit funtion';
}

export const ARGUMENTS_LENGTH_ERROR = "le nombre d'argument n'est pas valide"
export const TYPE_ARGUMENTS_DOEST_NOT_MATCH_ERROR = "le type d'argument n'est pas valide"

export function somme (nb1, nb2, nb3)  {

    // pour pouvoir utiliser arguments, il est utliser sur les fonction simple
    if (arguments.length !== 3) {
        return ARGUMENTS_LENGTH_ERROR;

    }
    if (typeof nb1 !== "number" || typeof nb2 !== "number" || typeof nb3 !== "number") {
        return TYPE_ARGUMENTS_DOEST_NOT_MATCH_ERROR;
    }


    return nb1 + nb2 + nb3;
}


