alert("oh my good");
// -- Déclarer un tableau INDEXÉ :
// a)
var monTableau = []; // alt gr + 5
console.log(monTableau);
// b)
var myArray = new Array;
console.log(myArray);
// myArray et monTableau sont des tableaux qui peuvent contenir plusieurs information

//Affecter des valeurs au tablau, plusieurs méthode :
//a)
var nosPrenoms = ["Christian", "Philippe", "Mamadou", "Zitouni", "Samia",];
console.log(nosPrenoms);
//b)
monTableau[0] = "Philippe";
monTableau[1] = "Samia";
monTableau[2] = "Mamadou";
monTableau[3] = "Sébastien";
monTableau[4] = "Zitouni";
console.log(monTableau);

// -- Déclarer ou affecter des valeurs à un objet

var Coordonnee = {
    prenom : "Hugo",
    nom : "LIEGEARD",
    age : 82
};
console.clear(); //permet d'éffacer Les lignes de débug qui précède la console.clear()
console.log(Coordonnee);// j'affiche toute Les informations de mon tableau
console.log(Coordonnee['prenom']);// j'affiche que le prenom
console.log(Coordonnee.nom); // j'affiche que le nom

// * on va créer 2 tableaux indexé

var listDePrenom = ["Oussmane", "Cherif", "Hugo"];
var listDeNom = ["MAMA", "CBENALLAL", "LIEGEARD"];
var Annuaire = [listDePrenom, listDePrenom];

console.log(Annuaire);
document.write();//fonction native de JS qui permet d'inscrire un résultat directement sur La page html et non plus sur La console
document.write(Annuaire[0][2] + " " + Annuaire[1][2]);
document.write("<hr>");
document.write(Annuaire[0][0]);
document.write(" ");
document.write(Annuaire[1][1]);

//tableau à 2 dimention non indexé

var contact = [
    {prenom: "Tess", nom: "EMERAN", tel: "0783 97 15 15"},
    {prenom: "Jaz", nom: "EMERAN", tel: "0783 97 13 14"},
    {prenom: "Trouble", nom: "MAN", tel: "0783 97 18 19"},
];
console.log(contact);

// console.log(AnnuaireDesStagiaires);

//--exemple à 3 dimension

var Array3Dimension = [
    {
    prenom:"Tess",
    nom : "EMERAN",
    Coordonnee:{
        email: "tess.emeran@lepoles.com",
        tel:{
            fixe: "0596 108 328",
            fax: "0596 108 632",
            port:{
                prive:"07 83 97 10 15",
                pro : "07 83 97 15 15",
            }
        },
        adresse:{
            ville:"LE GOSIER",
            cp:"97190",
            region:"Caraïbes",
            pays:{
                code:"fr",
                nom:"Guadeloupe",
            }
        }//fermeture coordonnée
    }

}//fermeture 1er 
];// fin array3D

console.log(Array3Dimension);
console.log(Array3Dimension[0].Coordonnee.email);

/************************************
         AJOUTER UN ÉLÉMENT
 ************************************/

 var couleur = ['rouge', 'jaune', 'vert',];
 console.clear();
 console.log(couleur);
 console.log(couleur.lenght); //.Lenght me permet d'afficher sur ma console le nombre d'élément que contient mon tableau

 // pour ajouter un élément dans mon tableau, je fais appel à la fonction push()
 var nbElementsDeMonTableau = couleur.push('violet');
 console.log(couleur);
 console.log(nbElementsDeMonTableau);

 // pour ajouter l'élément au début du tableau je vais faire appel à la fontion unshift
 
 var nbElementsDeMonTableau = couleur.unshift('bisque', 'Orange');
 console.clear();
 console.log(couleur);
 console.log(nbElementsDeMonTableau);

 // Pour supprimer le dernier éléments de mon tableau, je fait appel à la fontion pop()

 couleur.pop();
 console.log(couleur);
 console.log(nbElementsDeMonTableau);

 // Pour supprimer le premier éléments de mon tableau, j'utilise La fonction shift()
 couleur.shift();
 console.log(couleur);
 console.log(nbElementsDeMonTableau);









