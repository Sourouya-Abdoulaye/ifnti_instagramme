# Reflexion Test

## fonction getLetterCount 
### Test des lettres
Donner un texte avec des minuscules, des majuscules et des lettres accentuées. Vérifier que toutes sont comptées.
### Test du texte mélangé
Donner un texte qui contient des lettres, des chiffres, des espaces et de la ponctuation. Vérifier que seules les lettres sont comptées. Tester aussi une chaîne composée uniquement de 
### chiffres : le résultat attendu est 0.
Test du texte vide  
Donner une chaîne vide. Le résultat attendu est 0



## Fonction getWordCount
La fonction getWordCount prend un texte en paramètre et retourne le nombre de mots qu’il contient.

Un mot est composé de lettres. Les majuscules et les lettres accentuées sont comptées comme des lettres. Les espaces, les chiffres seuls et la ponctuation séparent les mots, mais ne sont pas comptés. Une apostrophe entre deux lettres reste à l’intérieur du même mot : par exemple, « J'ai » compte comme un seul mot.

### Tests
- Cas normal : donner un texte contenant plusieurs mots et vérifier le nombre obtenu.
- Texte avec chiffres et ponctuation : vérifier que les chiffres seuls et la ponctuation ne sont pas comptés comme des mots.
- Apostrophe : vérifier qu’un mot comme « J'ai » est compté comme un seul mot.
- Texte vide : le résultat attendu est 0.
- Aucun argument fourni : le résultat attendu est 0.

### Choix d’implémentation
La fonction parcourt le texte une seule fois avec une boucle for...of. Elle n’utilise pas de regex et ne crée pas de tableau intermédiaire. Cela évite de faire une copie supplémentaire du texte et convient mieux à un texte volumineux.



## Fonction getphrase
La fonction getphrase prend un texte en paramètre et retourne son nombre de phrases.
Une phrase se termine par un point, un point d’exclamation ou un point d’interrogation.
Si le texte est vide ou absent, le résultat attendu est 0.



## Fonction getstats

La fonction getstats prend en paramètre le chemin d’un fichier texte avec l’extension .txt. Elle retourne uniquement la taille du fichier en octets, son uid et son gid. Elle récupère ces informations sans lire le contenu du fichier.

Si aucun chemin n’est fourni, si le fichier n’existe pas ou s’il ne s’agit pas d’un fichier .txt, la fonction signale une erreur.

uid : identifiant du propriétaire du fichier.
`gid : identifiant du groupe auquel appartient le fichier. Ce n’est pas guid.
size : taille du fichier en octets.
deepStrictEqual : vérifie que deux objets ont le même contenu. Ici, on compare les trois informations retournées par getstats à celles obtenues directement avec fs.stat.
rejects : vérifie qu’une fonction asynchrone signale une erreur. On l’utilise pour tester un chemin absent ou un fichier inexistant.



















## Fonction getchunkCount

Un chunk est un bloc de données transmis par un stream. La fonction getchunkCount compte le nombre de blocs reçus du stream.

Le nombre de chunks dépend du découpage effectué par le stream. Pour tester la fonction, j’utiliserai donc des streams dont le nombre de blocs émis est connu. Un stream qui émet trois blocs doit retourner 3 ; un stream sans données doit retourner 0.



























































