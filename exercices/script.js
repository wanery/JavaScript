 // devinettes
    function une(){

      var premiereQuestion = "De quelle couleur est le cheval blanc d'Henri IV ?";
      var deuxiemeQuestion = "Combien y a t-il de sept nains ?";

      var reponsePremiereQuestion = "blanc";
      var optionPremiere = "BLANC";

      var reponseDeuxiemeQuestion = "sept";
      var optionDeuxieme = "7";
      
      var questionUne = prompt(premiereQuestion);
      
       
      if (questionUne === reponsePremiereQuestion  || questionUne === optionPremiere) {
        console.log("Bravo");
      } else {
        console.log("Erreur");

          questionUne = prompt(premiereQuestion);
          if (questionUne === reponsePremiereQuestion || questionUne === optionPremiere) {
            console.log('Bravo, réussite sur la deuxième tentative');
          } else {
            console.log("Malheuresement c'est faux");
          }
      }

      var questionDeux = prompt(deuxiemeQuestion);
        if (questionDeux === reponseDeuxiemeQuestion || questionDeux === optionDeuxieme) {
          console.log("Un 2/2 !");
        } else {
          console.log("Erreur");

            questionDeux = prompt(deuxiemeQuestion);
            if (questionDeux === reponseDeuxiemeQuestion || questionDeux === optionDeuxieme) {
              console.log("Bravo, tu as réussi");
            } else {
              console.log("Non, c'est faux");
            }
        }

    }

    // devine un chiffre
    function deux() {

      var phrase = "Choisissez un chiffre compris entre 0 et 9 :";
      var choix = Math.ceil(Math.random() * 10);
      console.log(choix);
      

      var utilisateur = prompt(phrase);
      var convertir = parseInt(utilisateur);

      if (isNaN(utilisateur) ){
        alert("Ce  n'est pas que j'attends !");
      } else {

          if (convertir === choix) {
            console.log("Bien joué !");
          } else {
            console.log("Faux, veuillez reéssayer");

              utilisateur = prompt(phrase);
              if (convertir === choix) {
                console.log("Tu l'as trouvé a ta dernière chance");
              } else {
                console.log("Erreur");
              }
          }

      }
    }
   
    // calculatrice
    function trois() {

      var operateur = "Quel opérateur: +, -, *, /, ?";
      var chiffre = "Choisis un chiffre :";
      var chiffreDeux = "Choisis un chiffre :";
      var resultat;
      
      var choixOperateur = prompt(operateur);
      var int = parseInt(prompt(chiffre) );
      var inTwo = parseInt(prompt(chiffreDeux) );
      
      if (isNaN(int) || isNaN(inTwo) ){
        alert("Valeur est invalide !");

      } else {
        switch(choixOperateur) {
          case '+':
            resultat = int + inTwo;
            break;
          case '-':
            resultat = int - inTwo;
            break;
          case '*':
            resultat = int * inTwo;
            break;
          case '/':
            resultat = int / inTwo;
            break;
          default:
            alert("Erreur");
            break;
        }
        alert(resultat);
      }
    }

    // pyramide boucle for
    function boucleFor(){

      var signe = "##########";
      var compte = 0;
      var prendSigne = "";

      for(var i = 0; i < signe.length; i++){
        prendSigne +=signe[i];
        console.log(prendSigne);
        compte++;
      }

      var entier = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      var comptEntier = 0;
      var prendEntier = "";

      for(var i = 0; i < entier.length; i++){
        prendEntier+= entier[i];
        console.log(prendEntier);
        comptEntier++;
      }

      var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
      var compteAlphabet = 0;
      var prendAlphabet = "";

      for(var i = 0; i < alphabet.length; i++) {
        prendAlphabet+= alphabet[i];
        console.log(prendAlphabet);
        compteAlphabet;
      }
    }

    // pyramide boucle while
    function bouclWhile(){
      var signes = "#############";
      var compteSignes = 0;
      var prendSignes = "";

      while(compteSignes < signes.length) {
        prendSignes+=signes[compteSignes];
        console.log(prendSignes);
        compteSignes++;
      }

      var entier = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      var comptEntier = 0;
      var prendEntier = "";

      while(comptEntier < entier.length) {
        prendEntier+= entier[comptEntier];
        console.log(prendEntier);
        comptEntier++;
      }

      var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
      var compteAlphabet = 0;
      var prendAlphabet = "";

      while(compteAlphabet < alphabet.length) {
        prendAlphabet+= alphabet[compteAlphabet];
        console.log(prendAlphabet);
        compteAlphabet++;
      }

    }
    
    // fizzbuzzz 
    function multiple(){
      for(i = 0; i < 10; i++) {
        if( i % 5 === 0 && i % 7 === 0) {
          console.log("FizzBuzz");

        } else if (i % 7 === 0) {
          console.log("Fizz");

        } else if(i % 5 === 0) {
          console.log("Buzz");

        } else {
         console.log(i);
        }
      }
         
    }
    
    // moyenne
    function moyenne() {
      var eleve = "Saississez 10 notes compris entre 0 et 20 :";
      var notes = [];

        for(i = 0; i < 10; i++){
          var eleveNote = parseInt(prompt(eleve) );
          notes.push(eleveNote);
        }

          if(isNaN(eleveNote) ) {
            console.log("Ce n'est pas ce que j'attends");
          } else {
            console.log("Vos notes sont : " + notes + ".");
          }
        
        var addition = 0;
        for(i = 0; i < notes.length; i++) {
          addition = addition + notes[i];
        }

        var moyenne = addition / notes.length;
        console.log(moyenne);
    }

    // Login & Password
    function loginAndPassword() {

      
      /** demande
       *  identifiant
       *  mot de passe
       */

      /** verifier
       * idetifiant et mot de passe > 4 caracteres
       * identifiant contient @
       * identifiant & mot de passe = joe@gmail.com & 12345
       */
      
      // chaînes de caractères (question)
      var identifiant = "Quel est votre identifiant :";
      var motDePasse = "Quel est votre mot de passe :";
      
      // envoie prompt
      var identifiantUtilisateur = prompt(identifiant);
      var motDePasseUtilisateur = prompt(motDePasse);

      // valeurs
      var vraieIdentifiant = "joe@gmail.com";
      var vraieMotDePasse = "12345";

      if (identifiantUtilisateur.length > 4 && motDePasseUtilisateur.length > 4) {

          if (identifiantUtilisateur.indexOf("@") && identifiantUtilisateur === vraieIdentifiant){
            
            if (motDePasseUtilisateur === vraieMotDePasse) {
              console.log("GOOD");
              console.log("Bienvenue :" + identifiantUtilisateur + "!");
            }

          } else {
            console.log("NOT GOOD");
          }
      }

    }
                
    // Calcul mental
    function calculMental() { 
      var choix = Math.ceil(Math.random() * 3);
      var operation;
      
      switch (choix) {
        case 1:
          operation = "+";
          break;
        case 2:
          operation = "*";
          break;
        case 3:
          operation = "-";
          break;
        default:
          console.log(choix);
          break;
      }
      console.log(operation);

      var entierUn = Math.ceil(Math.random() * 10);
      console.log(entierUn);

      var entierDeux = Math.ceil(Math.random() * 10);
      console.log(entierDeux);

      var calcul = "Combien font: " + entierUn + operation + entierDeux + " ?";
    
      var choixCalcul = parseInt(prompt(calcul) );

      var resultat = eval(entierUn + operation + entierDeux);
      // console.log(resultat); 
      
      if (choixCalcul === resultat) {
        console.log("Bravo");
      } else {
        console.log("Faux");

        choixCalcul = parseInt(prompt(calcul) );
        if (choixCalcul === resultat) {
          console.log("Bravo");
        } else {
          console.log("Faux");
        }
      }

    }
    



