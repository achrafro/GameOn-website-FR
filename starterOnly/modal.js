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
newelement.style.color = "red"; 

 
//   fucntion pour verifier si une ville est selectionnéee

function verif_ville() {

  let ville1 = document.getElementById("location1").checked;
  let ville2 = document.getElementById("location2").checked;
  let ville3 = document.getElementById("location3").checked;
  let ville4 = document.getElementById("location4").checked;
  let ville5 = document.getElementById("location5").checked;
  let ville6 = document.getElementById("location6").checked;
   if (ville1 ||ville2 || ville3 || ville4 || ville5 || ville6) {
     return true;
   }
   else {
     return false;
   }
  
  }  

  let formulaireOK = true;

  //  Fonction validation de formulaire

function validate(e) {
//  Verification de prenom :
if (prenom.value == "" || prenom.value.length <= 2) {
 
  prenom.focus();
  newelement.innerText="Veuillez entrer 2 caractères ou plus pour le champ du prenom"
  formData[0].appendChild(newelement);
  formulaireOK = false;
   e.preventDefault();
   console.log(e);
  

   
 } 
 // verification de nom : 

else if (nom.value == "" || nom.value.length <= 2) {
   nom.focus(); 
   newelement.innerText="Veuillez entrer 2 caractères ou plus pour le champ du nom"
   formData[1].appendChild(newelement);
   formulaireOK = false;
    e.preventDefault();
 
 
 }  
 // verification de email : 


 else if  (email.value == "" || email.value.length <= 2 || email.value.indexOf(".",0) < 0  || email.value.indexOf("@",0) < 0) {
   email.focus(); 
   newelement.innerText="vous devez entrer une adresse email correcte"
   formData[2].appendChild(newelement);
   formulaireOK = false;
    e.preventDefault();

 
 }   
//  verif date de naissance : 
else if (DateDeNaissance.value == "") {
   DateDeNaissance.focus(); 
    newelement.innerText="Vous devez entrer votre date de naissance."
   formData[3].appendChild(newelement);
   formulaireOK = false;
    e.preventDefault();


 } 


// verification ville selecctionné //


else if (verif_ville() == false) {
    newelement.innerText="Vous devez Choisir une ville"
   formData[5].appendChild(newelement);
   formulaireOK = false;
    e.preventDefault();


 }


 // //  NUMERO TOURNOI verification
 else if (isNaN (parseInt(NumeroTournois.value))||  (parseInt(NumeroTournois.value)) < 0 ) {
   NumeroTournois.focus(); 
    newelement.innerText="il faut selectionner Le numero de tournoi"
   formData[4].appendChild(newelement);
   formulaireOK = false;
    e.preventDefault();


    } 


 //  condition check

 else if (chekcondition.checked == false) { 
        newelement.innerText="Vous devez vérifier que vous acceptez les termes et conditions."
       formData[6].appendChild(newelement);
       formulaireOK = false;
       e.preventDefault();

 } 



 else {
  
 alert("okkk") ;
 
    }


}

reserve.addEventListener("submit",validate);