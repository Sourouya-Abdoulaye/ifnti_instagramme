import { log } from "node:console"
import fs from "node:fs/promises"
import { createReadStream, createWriteStream } from "node:fs"

async function lire_un_fichier(path) {
    try {
        // pour atttendre 
        const data = await fs.readFile(path, "utf8")
        // retourne un buffer, memoire tempont on ne touche pas directement le fichier 
        // cest lorsquer on va appliquer les modification , il va toucher
        console.log(data);
    } catch (error) {
        console.log(error);
        console.log("Erreur lors de la lecture du fichier");
    }
}


async function ecrire_dans_un_fichier(path) {
    try {

        let content;
        for (let index = 0; index <= (10000); index++) {
            content += "contenue " + index + "\n"
        }
        // pour atttendre 
        const data = await fs.writeFile(path, content, {
            flag: "w"
        })
        // retourne un buffer, memoire tempont on ne touche pas directement le fichier 
        // cest lorsquer on va appliquer les modification , il va toucher
        console.log("jai ecris ");
        // console.log(data);
    } catch (error) {
        // console.log(error);
        console.log("Erreur lors de la l'ecriture du fichier");
    }
}

// write_and_read_file("files/fichier1.txt");

async function write_and_read_file(path) {

    try {
        let my_file = await fs.open(path, "r+")

        await my_file.writeFile("utf-8 que j'ai ajouter\n")

        const data = await my_file.readFile("utf-8")

        console.log("les donner avec open");
        console.log(data);
        console.log("les donner terminer avec open");

        await my_file.close()
    } catch (error) {

    }

}

// statistique_file("files/fichier1.txt");

async function statistique_file(path) {

    try {
        const stats = await fs.stat(path)
        console.log(stats);
        // console.log(stats.isFile());
    } catch (error) {
        console.log(error);
    }

}


function lire_un_fichier_en_stream(path) {
    const flux_de_lecture = createReadStream(path,"utf-8")
    // console.log(flux_de_lecture);

    let message_complet=" ";

    // on n'invoque la methode on qui nous permet d'ecouter les evenement (il existe plusieur) 
    flux_de_lecture.on('data', (chunk) => {
        console.log("================================================");
        // console.log(chunk.length);
        message_complet +="=========================\n"+chunk
        console.log("================================================");


    })

    flux_de_lecture.on("end", () => {
         console.log("End flux de lecture.....")
        console.log(message_complet)
    })



    // flux_de_lecture.close()

}





// javascript fait , hosting des fonction simple et variable, mais pas les collback
// lire_un_fichier("files/fichier1.txt")
// ecrire_dans_un_fichier("files/fichier1.txt");
// lire_un_fichier("/home/abdoulaye/Téléchargements/kali-linux-2026.2-installer-amd64.iso");
await ecrire_dans_un_fichier("files/fichier1.txt");
await lire_un_fichier_en_stream("files/fichier1.txt");