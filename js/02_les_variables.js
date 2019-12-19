// alert(
    //"js okay");







/* Lorsque l'on a besoin de stocker une information on utilise une variable. nous allons stocker une information.

IL EXISTE PLUSIEURS TYPE DE VARIABLE

*/

//pour déclarer une variable (La créer) :
var prenom;

//pour Lui affecter une valeur :
var prenom = "Philippe";

// Afficher La valeur d'une variable :
//a- pour tester une valeur on ouvre La console du navigateur (F12) puis on écrit Le nom de lLa variable à droite des ">>" puis ENTER

// b-Afficher une alert avec La variable (NE PAS METTRE DE GUILLEMETS)
alert(prenom);

//C- On écrit dans Le script (code)
console.log(prenom);

//IL est possible d'écrire des plusieurs variables sur une seule ligne :
var nb1, nb2, nb3;
//& d'y affecter des valeurs :
nb1=1;
nb2=50;
nb3=220;

// Une instruction se termine TOUJOURS  par un point virgule.

// Le nom d'une variable peut comporter des Lettres et des chiffres mais exclut Les signes de ponctuation (espace, accent...).

// /!\ LE JS EST SENSIBLE A LA CASSE /!\

/*
mavariable different de maVariable ou ma_variable

*/

// écriture snake case => ma_variable
// écriture camelCase => maVariable


/*************************
 LES TYPES DES VARIABLES
 ************************/

 // -- typeof, me permet de connaitre le type de ma variable:
 console.log(typeof prenom);

 // -- Déclaration et affectation d'un nombre :
 var Age = 40;
 console.log(typeof Age);

 // -- Les variables de type FLOAT
 var uneDecimal = -2.984;
 console.log(typeof uneDecimal); //La console retourne "number" donc un / des chiffres.

 // -- Les variables de type BooLéens (booLean)
 // LE BOOLEEN permet de vérifier si l'information est VRAI (true) ou FALSE (faux)
 var unBoolean = false; // true
 console.log(unBoolean); // retourne false
 console.log(typeof unBoolean); // retourne boolean

 // -- Les  CONSTANTES

 // La déclaration CONST permet de créer une constante accessible UNIQUEMENT en Lecture. Sa valeur ne pourra pas être modifiée par réaffectations ultérieurs. Une constante ne peut pas être déclarée à nouveau.

 const HOST ="localhost";
 const USER = "root";
 const PASSWORD = "mysql";
/*
Donc il est impossible de faire cela :
   const USER = "philippe";
   La console me retournera => SyntaxError: redeclaration of const USER
*/
// Dans la convention on écrit les constantes en majuscule pour les reconnaitres (PASSWORD)
 var unNombre = "24";
 console.log(unNombre);// affiche 24
 console.log(typeof unNombre);// retourne string (chaine de caractère)

 // pour convertir le string (chaine de caractère) "24" en number :
 unNombre = parseFloat(unNombre); // parseFloat permet d'interpréter le string 24 en chiffre 24
 console.log(unNombre); // affiche 24
 console.log(typeof unNombre); // retourne number



// pour convertir un chiffre en string
 var nb4 = 93;
 console.log(nb4);// affiche 93
 console.log(typeof nb4);// La console interprète le nb4 comme chiffreretourne number

 nb4 = nb4.toString() // toString() permet de convertir un nombre entier ou décimal en chaine de caractère (string)
 console.log(typeof nb4);


   



  

