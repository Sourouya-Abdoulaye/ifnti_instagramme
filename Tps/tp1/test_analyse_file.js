import assert from "node:assert";
import test from "node:test";
import fs from "node:fs/promises"

import {
    getLetterCount,
    getWordCount,
    getPhrase,
    getStats,
    analyse_file
}
    from "./analyse_file.js"



// pour fonction getletter
test("test_getletter_cas_normal_compter_les_lettres_d_un_texte", () => {
    // arrange
    let text = "j'ai é manger ! ";
    let valeurAttendue = 10;

    // act
    let valeurObtenue = getLetterCount(text);

    // assert
    assert.strictEqual(valeurAttendue, valeurObtenue);
});

test("test_getletter_cas_anormal_ignorer_les_autres_caracteres", () => {
    // arrange
    let text = "A1 }[() b!é2";
    let valeurAttendue = 3;

    // act
    let valeurObtenue = getLetterCount(text);

    // assert
    assert.strictEqual(valeurAttendue, valeurObtenue);
});

test("test_getletter_cas_limite_retourner_zero_si_le_texte_est_vide", () => {
    // arrange
    let text = "";
    let valeurAttendue = 0;

    // act
    let valeurObtenue = getLetterCount(text);

    // assert
    assert.strictEqual(valeurAttendue, valeurObtenue);
});

test("test_getletter_cas_limite_retourner_zero_si_aucun_argument_n_est_fourni", () => {
    // arrange
    let valeurAttendue = 0;

    // act
    let valeurObtenue = getLetterCount();

    // assert
    assert.strictEqual(valeurAttendue, valeurObtenue);
});


// pour fonction getwords
test("test_getwords_cas_normal_compter_les_mots_d_un_texte", () => {
    // arrange
    let text = "Bonjour tout le monde";
    let valeurAttendue = 4;

    // act
    let valeurObtenue = getWordCount(text);

    // assert
    assert.strictEqual(valeurAttendue, valeurObtenue);
});


test("test_getwords_cas_limite_compter_l_apostrophe_comme_faisant_partie_du_mot", () => {
    // arrange
    let text = "J'ai 2 pommes !";
    let valeurAttendue = 2;

    // act
    let valeurObtenue = getWordCount(text);

    // assert
    assert.strictEqual(valeurAttendue, valeurObtenue);
});


test("test_getwords_cas_anormal_ignorer_les_autres_caracteres", () => {
    // arrange
    let text = "Bonjour, }[8*] 123 monde !";
    let valeurAttendue = 2;

    // act
    let valeurObtenue = getWordCount(text);

    // assert
    assert.strictEqual(valeurAttendue, valeurObtenue);
});


test("test_getwords_cas_limite_retourner_zero_si_le_texte_est_vide", () => {
    // arrange
    let text = "";
    let valeurAttendue = 0;

    // act
    let valeurObtenue = getWordCount(text);

    // assert
    assert.strictEqual(valeurAttendue, valeurObtenue);
});

test("test_getwords_cas_limite_retourner_zero_si_aucun_argument_n_est_fourni", () => {
    // arrange
    let valeurAttendue = 0;

    // act
    let valeurObtenue = getWordCount();

    // assert
    assert.strictEqual(valeurAttendue, valeurObtenue);
});


// pour getPhrase
test("test_getphrase_cas_normal_compter_plusieurs_phrases", () => {
    // arrange
    let text = "Bonjour. Comment ça va ?  ça va !";
    let valeurAttendue = 3;

    // act
    let valeurObtenue = getPhrase(text);

    // assert
    assert.strictEqual(valeurAttendue, valeurObtenue);
});


test("test_getphrase_cas_limite_ignorer_les_signes_qui_termine_une_phrase au_debut_ou_isoles", () => {
    // arrange
    let text = ". Bonjour. Comment ça va ? .[{al[*]}i va]s .  ! .     ça va !";
    let valeurAttendue = 4;

    // act
    let valeurObtenue = getPhrase(text);

    // assert
    assert.strictEqual(valeurAttendue, valeurObtenue);
});


test("test_getphrase_cas_limite_retourner_zero_si_aucun_signe_de_fin", () => {
    // arrange
    let text = "Bonjour tout le monde";
    let valeurAttendue = 0;

    // act
    let valeurObtenue = getPhrase(text);

    // assert
    assert.strictEqual(valeurAttendue, valeurObtenue);
});

test("test_getphrase_cas_limite_retourner_zero_si_le_texte_est_vide", () => {
    // arrange
    let text = "";
    let valeurAttendue = 0;

    // act
    let valeurObtenue = getPhrase(text);

    // assert
    assert.strictEqual(valeurAttendue, valeurObtenue);
});

test("test_getphrase_cas_limite_retourner_zero_si_aucun_argument_n_est_fourni", () => {
    // arrange
    let valeurAttendue = 0;

    // act
    let valeurObtenue = getPhrase();

    // assert
    assert.strictEqual(valeurAttendue, valeurObtenue);
});



// pour getstat

test("test_getstats_cas_normal_retourne_taille_uid_gid", async () => {
    // arrange
    let path = "fichier.txt";
    let uid = process.getuid()
    let gid = process.getgid()
    let size = (await fs.stat(path)).size

    let valeurAttendue = {
        size: size,
        uid: uid,
        gid: gid
    };

    // act
    let valeurObtenue = await getStats(path);

    // assert
    assert.deepStrictEqual(valeurObtenue, valeurAttendue);
});


test("getStats_retourne_un_message_si_aucun_chemin_n'est_fourni", async () => {
    // Arrange
    const valeurAttendue = "Argument non fourni";

    // Act
    const valeurObtenue = await getStats();

    // Assert
    assert.strictEqual(valeurObtenue, valeurAttendue);
});


test("getStats retourne un message si le fichier est introuvable", async () => {
    // Arrange
    const path = "./fichier_inexistant.txt";
    const valeurAttendue = "Le fichier est introuvable.";

    // Act
    const valeurObtenue = await getStats(path);

    // Assert
    assert.strictEqual(valeurObtenue, valeurAttendue);
});

test("getStats retourne un message si le fichier n'a pas l'extension .txt", async () => {
    // Arrange
    const path = "./document.pdf";
    const valeurAttendue = "Le fichier doit avoir l'extension .txt.";

    // Act
    const valeurObtenue = await getStats(path);

    // Assert
    assert.strictEqual(valeurObtenue, valeurAttendue);
});



