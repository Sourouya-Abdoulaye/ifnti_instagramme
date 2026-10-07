// il faut toujour mettre node:nom du module pour les modules que node lui meme
// pour differencier avec les module creer nous meme
import assert from 'node:assert';
import test from 'node:test'
import { somme, ARGUMENTS_LENGTH_ERROR, TYPE_ARGUMENTS_DOEST_NOT_MATCH_ERROR } from "./math.js"


test('cas_normale', () => {
    // arrange '(preparer les donner)
    let nbr1 = 10;
    let nbr2 = 10;
    let nbr3 = 10;
    const resultatAttendu = nbr1 + nbr2 + nbr3;

    // act (on agit )
    const resultatObtenu = somme(nbr1, nbr2, nbr3);

    // console.log(resultatAttendu, resultatObtenu);
    // assert
    assert.strictEqual(resultatAttendu, resultatObtenu)
});


test('test_somme_cas_nombre_arguments_non_respecter', () => {
    /**
        * pas trois arguments => t
        */
    // arrange (preparer les donner)
    const resultatAttendu = ARGUMENTS_LENGTH_ERROR;
    // act (on agit )
    // comme on veut propager l'erreur, donc utiliser try, catch

    let resultatObtenu;
    try {
        resultatObtenu = somme(10, 10);
    } catch (error) {
        resultatObtenu = error.message
    }

    assert.strictEqual(resultatAttendu, resultatObtenu);

});


test('test_somme_cas_type_arguments_non_respecter', () => {
    let nbr1 = 10;
    let nbr2 = 10;
    let nbr3 = 10;

    // arrange (preparer les donner)
    const resultatAttendu = TYPE_ARGUMENTS_DOEST_NOT_MATCH_ERROR;

    // act (on agit )
    // comme on veut propager l'erreur, donc utiliser try, catch
    let resultatObtenu;
    try {
        resultatObtenu = somme(nbr1, nbr2, nbr3);
    } catch (error) {
        resultatObtenu = error.message
    }

    assert.strictEqual(resultatAttendu, resultatObtenu);

});













// console.log(assert);
// console.log(test);

