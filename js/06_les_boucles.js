alert("Oooohhh my Goood");

/************************
       LES BOUCLES
************************/

//Il y a différents types de boucle, les plus utilisées sont la boucle " FOR " et La boucle "WHILE" *-* Boucle FOR():

for(let i = 0; i <= 5; i++ ){
    document.write('<p>Nombre de tour(s) : <strongle> de boucle(s) : <em style="background:yellow;">'+ i +'</em></p>');
}

document.write("<hr>");

/*
Pour i = 0 => j'initialise le départ de la boucle à 0
Pour i<= 5; => tant que la valeur de i est inférieur ou égale à 5 i++; => j'incrémente (j'ajoute) un tour de boucle

En gros je donne l'instruction de faire un tour de boucle suplémentaire dans que La valeur de i n'est pas égale ou supérieur à 5*/

var j = 0;
while(j <=5){
    document.write('<p>Nombre de tour(s) de boucle(s) : <em style="background:yellow;">'+ j +'</em></p>');
    // ATTENTION A NE PAS OUBLIER L'INCRÉMENTATION
    j++; 
}

document.write("<hr>");

// -- Supposons Le tableau suivant :
var Prenoms = ['Jean', 'Marc', 'Mathieu', 'Luc', 'Pierre', 'Paul', 'Jacques', 'Hugo'];

/**
 * CONSIGNE : Grâce à une boucle FOR,
 * affichez La Liste des prénoms
 * du tableau ci-dessus dans La console,
 * ou sur votre page.
 */

 console.log(Prenoms);
 for(let i = 0; i <Prenoms.length; i++){
     console.log(Prenoms[i]);
     document.write(Prenoms[i]);
     document.write(" / ");
} 
