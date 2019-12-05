
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

    personer.push({
        navn: inpNavn.value,
        epost: inpEpost.value 
    });

}

function visPersoner(snap) {
    const person = snap.val();
    personliste.innerHTML += `
        <article>
            <p>${person.navn}</p>
            <p>${person.epost}</p>
        </article>
    `;
}


personer.on("child_added", visPersoner);


 