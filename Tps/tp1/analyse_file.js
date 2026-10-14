import fs from "node:fs/promises"
import { createReadStream } from "node:fs"
import { extname } from "node:path";


export function analyse_file(path) {
   
    // analyse doit utiliser les auter fonction pour analyser
}


async function getchunkCount(path) {
  
    const flux_de_lecture = createReadStream(path)

    let mb_chunk= 0;

    // on n'invoque la methode on qui nous permet d'ecouter les evenement (il existe plusieur) 
    flux_de_lecture.on('data', (chunk) => {
         console.log(chunk);
        mb_chunk +=1
    })

    flux_de_lecture.on("end", () => {
        
    })
}




export async function getStats(path) {
    if (!path) {
        return "Argument non fourni";
    }

    if (extname(path) !== ".txt") {
        return "Le fichier doit avoir l'extension .txt.";
    }

    try {
        const stats = await fs.stat(path);

        if (!stats.isFile()) {
            return "Le chemin fourni ne désigne pas un fichier.";
        }

        return {
            size: stats.size,
            uid: stats.uid,
            gid: stats.gid,
        };
    } catch (error) {
        if (error.code === "ENOENT") {
            return "Le fichier est introuvable.";
        }

        return "Erreur de lecture du fichier.";
    }
}


export function getPhrase(text) {
    if (typeof text !== "string") {
        return 0;
    }

    let nombre = 0;
    let phraseContientDuTexte = false;

    for (const caractere of text) {
        if (caractere === "." || caractere === "!" || caractere === "?") {
            if (phraseContientDuTexte) {
                nombre++;
                phraseContientDuTexte = false;
            }
        } else if (caractere.toLowerCase() !== caractere.toUpperCase()) {
            phraseContientDuTexte = true;
        }
    }

    return nombre;
};


export function getWordCount(text) {
    if (typeof text !== "string") {
        return 0;
    }

    let nombre = 0;
    let dansUnMot = false;

    for (let i = 0; i < text.length; i++) {
        const caractere = text[i];
        const minuscule = caractere.toLowerCase();
        const majuscule = caractere.toUpperCase();

        const estUneLettre = minuscule !== majuscule;

        if (estUneLettre) {
            if (!dansUnMot) {
                nombre++;
            }
            dansUnMot = true;
        } else if (
            (caractere === "'" || caractere === "’") &&
            dansUnMot &&
            i + 1 < text.length &&
            text[i + 1].toLowerCase() !== text[i + 1].toUpperCase()
        ) {
            // Apostrophe entre deux lettres : on reste dans le même mot.
            dansUnMot = true;
        } else {
            // Espace, chiffre ou ponctuation : le mot est terminé.
            dansUnMot = false;
        }
    }

    return nombre;
};


export function getLetterCount(text) {
    if (typeof text !== "string") {
        return 0;
    }

    let nombre = 0;

    for (const caractere of text) {
        if (caractere.toLowerCase() !== caractere.toUpperCase()) {
            nombre++;
        }
    }

    return nombre;
}

















































