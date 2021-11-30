function editNav() {
    
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
let BoutonEnvoyer = document.querySelector(".btn-submit");
let msgconfirmation = document.querySelector(".confirmation");
msgconfirmation.style.display ="none";

 //
 // Button Close By Saadi Achraf

 let btn_close = document.querySelector(".close");
 
 btn_close.onclick = function() {
 
   modalbg.style.display = "none";
 

 }
   
 
//


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
 
  
 }

let prenom = document.forms["reserve"]["first"];
let nom = document.forms["reserve"]["last"];
let email = document.forms["reserve"]["email"];
let DateDeNaissance = document.forms["reserve"]["birthdate"];
let NumeroTournois = document.forms["reserve"]["quantity"];
let chekcondition = document.forms["reserve"]["checkbox1"];
let reserve =  document.forms["reserve"];
 
//  message d'erreur ! : 

let newelement = document.createElement("p");
 
let txt = document.createTextNode("");
newelement.appendChild(txt);
 newelement.style.fontSize="16px"

 

 
  //  Fonction validation de formulaire


 //  check pour le prenom 
 var test_prenom = false;
 var test_nom = false;
 var test_email = false ; 
 var test_date_naissance = false ;
 var test_numero_tournoi = false;  
var test_condition = true ;
var test_ville = false ;


  
function verif() {

prenom.addEventListener("keyup",function(){
 if (prenom.value == "" || prenom.value.length <=1) {
  newelement.innerText="Veuillez entrer 2 caractères ou plus pour le champ du prenom"
  formData[0].appendChild(newelement);
  newelement.style.color ="RED"
  prenom.style.border ="2px solid red"
  test_prenom = false;
 
 }
 else {
  newelement.innerText="c'est bon pour prenom ";
  formData[0].appendChild(newelement);
  newelement.style.color ="green"
   prenom.style.border ="2px solid green"
   test_prenom = true;
 

 }

})

//  check pour le nom 
nom.addEventListener("keyup", function(){ 
  if (nom.value == "" || nom.value.length <=1) {

    newelement.innerText="Veuillez entrer 2 caractères ou plus pour le champ du nom"
    formData[1].appendChild(newelement);
    newelement.style.color ="RED"
    nom.style.border ="2px solid red"
    test_nom = false;
 
 
   }
  else {
    newelement.innerText="c'est bon pour le nom ";
    formData[1].appendChild(newelement);
    newelement.style.color ="green"
    nom.style.border ="2px solid green"
    test_nom = true;

    }



})
//  check pour l'email 

email.addEventListener("keyup",function(){
 
  if  (email.value == "" || email.value.length <= 2 || email.value.indexOf(".",0) < 0  || email.value.indexOf("@",0) < 0) 
  {

    newelement.innerText="Veuillez entrer un email correcte"
    formData[2].appendChild(newelement);
    newelement.style.color ="RED"
    email.style.border ="2px solid red" ;
    test_email = false ;
 
 
  }
  else {

    newelement.innerText="c'est bon pour l'email ";
    formData[2].appendChild(newelement);
    newelement.style.color ="green"
    email.style.border ="2px solid green"
    test_email = true ;

  
 
  }


})
 
//  verification de date de naisssance  //

DateDeNaissance.addEventListener("change",function(){
  if (DateDeNaissance.value == "")  {
    newelement.innerText="Veuillez entrer un date de naissance"
    formData[3].appendChild(newelement);
    newelement.style.color ="RED"
    DateDeNaissance.style.border ="2px solid red" ;
    test_date_naissance = false ;


  }
  else {

    newelement.innerText="c'est bon pour la date naissance ";
    formData[3].appendChild(newelement);
    newelement.style.color ="green"
    DateDeNaissance.style.border ="2px solid green"
    test_date_naissance = true ;


  }

})

//  verif numero tournoi ; 
NumeroTournois.addEventListener("change",function(){

 if (isNaN (parseInt(NumeroTournois.value))||  (parseInt(NumeroTournois.value)) < 0 ) {

  newelement.innerText="Veuillez entrer un numero de tournoi"
  formData[4].appendChild(newelement);
  newelement.style.color ="RED"
  NumeroTournois.style.border ="2px solid red" ;
  test_numero_tournoi = false;
}
else { 

  newelement.innerText="c'est bon pour le numero de tornoi ";
  formData[4].appendChild(newelement);
  newelement.style.color ="green"
  NumeroTournois.style.border ="2px solid green"
  test_numero_tournoi = true;

}


})

let loc = document.getElementsByName("location");
newelement.innerText="FAUT CHOISIR UNE VILLE";
  formData[5].appendChild(newelement);
  newelement.style.color ="red"
 
for (let i =0 ; i<=5;i++) { 
loc[i].addEventListener("change",function(){
  newelement.innerText="VILLE EST CHOISI";
  formData[5].appendChild(newelement);
  newelement.style.color ="green"
  test_ville = true ;

})
  

}
chekcondition.addEventListener("change",function() {
  
if (chekcondition.checked) {
  newelement.innerText="condition accepté";
  formData[6].appendChild(newelement);
  newelement.style.color ="green"
  test_condition = true ;
}
else {
  newelement.innerText="faut accepté condition ";
  formData[6].appendChild(newelement);
  newelement.style.color ="red"
  test_condition = false ;

}

})



}



 

// function validate(e) {

//  console.log(formulaireOK);
// //  Verification de prenom :
// if (prenom.value == "" || prenom.value.length <= 2) {
//    formulaireOK = false;
//   prenom.focus();
//   e.preventDefault();
//   newelement.innerText="Veuillez entrer 2 caractères ou plus pour le champ du prenom"
//   formData[0].appendChild(newelement);
   
//  } 
//  // verification de nom : 

// else if (nom.value == "" || nom.value.length <= 2) {
//    nom.focus(); 
//    newelement.innerText="Veuillez entrer 2 caractères ou plus pour le champ du nom"
//    formData[1].appendChild(newelement);
//    formulaireOK = false;
//     e.preventDefault();
 
 
//  }  
//  // verification de email : 


//  else if  (email.value == "" || email.value.length <= 2 || email.value.indexOf(".",0) < 0  || email.value.indexOf("@",0) < 0) {
//    email.focus(); 
//    newelement.innerText="vous devez entrer une adresse email correcte"
//    formData[2].appendChild(newelement);
//    formulaireOK = false;
//     e.preventDefault();

 
//  }   
// //  verif date de naissance : 
// else if (DateDeNaissance.value == "") {
//    DateDeNaissance.focus(); 
//     newelement.innerText="Vous devez entrer votre date de naissance."
//    formData[3].appendChild(newelement);
//    formulaireOK = false;
//     e.preventDefault();


//  } 


// // verification ville selecctionné //


// else if (verif_ville() == false) {
//     newelement.innerText="Vous devez Choisir une ville"
//    formData[5].appendChild(newelement);
//    formulaireOK = false;
//     e.preventDefault();


//  }


//  // //  NUMERO TOURNOI verification
//  else if (isNaN (parseInt(NumeroTournois.value))||  (parseInt(NumeroTournois.value)) < 0 ) {
//    NumeroTournois.focus(); 
//     newelement.innerText="il faut selectionner Le numero de tournoi"
//    formData[4].appendChild(newelement);
//    formulaireOK = false;
//     e.preventDefault();


//     } 


//  //  condition check

//  else if (chekcondition.checked == false) { 
//         newelement.innerText="Vous devez vérifier que vous acceptez les termes et conditions."
//        formData[6].appendChild(newelement);
//        formulaireOK = false;
//        e.preventDefault();

//  } 



//  else  {

// reserve.style.display ="none";
// msgconfirmation.style.display ="block";



//     }


// }
 

verif(); 

reserve.addEventListener("submit",function(e){


  e.preventDefault();
if(!test_prenom || !test_nom || !test_email || !test_numero_tournoi ||!test_date_naissance ||!test_ville ||!test_condition) { 

 console.log(e);
if (test_prenom === false) {
  prenom.style.border ="solid 2px red";
  
}
 
if (test_nom === false) {
  nom.style.border ="solid 2px red";
  
}
if (test_email === false) {
  email.style.border ="solid 2px red";
  
}
if (test_date_naissance === false) {
  DateDeNaissance.style.border ="solid 2px red";
  
}
if (test_numero_tournoi === false) {
  NumeroTournois.style.border ="solid 2px red";
  
}
if (test_ville === false) {
  newelement.innerText="FAUT CHOISIR UNE VILLE";
  formData[5].appendChild(newelement);
  newelement.style.color ="red"  
}

}

 if (test_prenom && test_nom && test_email && test_numero_tournoi && test_date_naissance && test_ville && test_condition) 
{
  reserve.style.display="none"
     msgconfirmation.style.display ="flex";
 
 
 }
let testo = test_prenom && test_nom && test_email && test_numero_tournoi && test_date_naissance && test_ville && test_condition ;
 }
 
 ) 



 