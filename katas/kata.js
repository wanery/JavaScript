/*
* Texte / Chaines de caractères / String
* fonctions utiles : indexOf, slice, charAt, toLowerCase
* cf. https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String
 */

// longueur
var texte = "un texte";
var nombreDeCaracteres = texte.length;
console.log('nombre de caracteres', nombreDeCaracteres); // 8

// TODO
var quatriemeCaractere = texte.charAt(4);
console.log('quatrieme caractere', quatriemeCaractere ); // t

// TODO
var quatriemearacteres = texte.charAt(4);
var cinquiemeCaracteres= texte.charAt(5);
console.log('quatrieme et cinquieme caractere', quatriemearacteres + " " + cinquiemeCaracteres); // t

// TODO
var majuscule = texte.toUpperCase();
console.log('majuscule', majuscule ); // UN TEXTE

// TODO
var premierMot = texte.slice(0, 3);
console.log('premierMot', premierMot ); // un

// TODO
var premierMotEnMajuscule = texte.slice(0, 3).toUpperCase();
console.log('premierMotEnMajuscule', premierMotEnMajuscule); // un

// TODO
var prenom = prompt('votre prenom ?');
console.log(prenom);

// /*
//  * nombres
//  * fonctions utiles : parseInt , parseFloat, isNaN
//  */

var valeur1 = '15';
var somme = parseInt(valeur1) + 3;
console.log('somme == 18', somme == 18 ); // true

// TODO
var age = 32;
console.log("j'ai " + age + " ans"); // j'ai 32 ans

// /*
// * boucles & tableaux
//  */

var mails = ["Joe@gmAil.com", "LEA@test.com", "Bob@gmAil.com"];
var nombreDeMails = mails.length;
console.log('nombreDeMails', nombreDeMails );

var dernierMail = mails.lastIndexOf("Bob@gmAil.com");
console.log('dernierMail', dernierMail);

// est ce que tout les mails sont gmail
var queDesGmails = "yes";
for(var i = 0 ; i < mails.length ; i++ ){
    var mailMinuscules = mails[i].toLowerCase();        
    if(mailMinuscules.indexOf("gmail")){

    } else {
        var notQueDesGmails = "no";
    }
}
console.log('tous les mails sont gmail : ', queDesGmails );

var mailsMinuscule = mails;
for(var i = 0 ; i < mailsMinuscule.length; i++ ){
    var minuscules = mailsMinuscule[i].toLowerCase();
    
    var replaceStr = minuscules.replace("@", "");
    console.log(replaceStr);
}

var mailMinusculeTwo = mails;
for(var i = 0 ; i < mailMinusculeTwo.length; i++ ){
   var minusculeTwo = mailMinusculeTwo[i].toLowerCase();

   var replacePoint = minusculeTwo.replace(".com", "");
   console.log(replacePoint);
}
    
// console.log('mails en minuscules', mailsMinuscule.toString() );


// TODO : remplacez les @ par des _
// TODO : supprimez les .com


