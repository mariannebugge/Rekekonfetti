
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDBPkBJmoDJWH4QqNJaG0iJjkm5yRmHyl8",
    authDomain: "rekekonfetti.firebaseapp.com",
    databaseURL: "https://rekekonfetti.firebaseio.com",
    projectId: "rekekonfetti",
    storageBucket: "rekekonfetti.appspot.com",
    messagingSenderId: "643849791411",
    appId: "1:643849791411:web:ce80adfb0f9989f8b14dc6",
    measurementId: "G-99C21LBQ99"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();



  const database = firebase.database();
  const personer = database.ref("personer");


// Referere til HTML-elementer

const inpNavn = document.getElementById("inpNavn");
const inpEpost = document.getElementById("inpEpost");
const skjema = document.getElementById("skjema");
const personliste = document.getElementById("personliste");

skjema.onsubmit = (evt) => {
    evt.preventDefault();

    knapp.display = "true";
    setTimeout(forsvinn, 1000);

    personer.push({
        navn: inpNavn.value,
        epost: inpEpost.value 
    });

}


/* Kode for å fjerne knappen */
const knapp = document.getElementById("btn-2");
const tekst = document.getElementById("info-tekst");

function forsvinn() {
    
        knapp.style.display = "none";
        tekst.style.display = "block";
    
}



 