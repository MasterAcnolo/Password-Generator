
const container = document.querySelector('.container');
const body = document.body;

container.addEventListener('mouseenter', () => {
  body.classList.add('hover');
});

container.addEventListener('mouseleave', () => {
  body.classList.remove('hover');
});

// Fonction pour générer des caractères de N Longueur

function generatePassword() {
    var length = document.getElementById("length").value;
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_=-+[]{}|;:',.<>?/";
    var password = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }
    document.getElementById("password").value = password;
  }


// Fonction pour copier le mot de passe
function copyPassword() {
  const passwordField = document.getElementById('password');
  
  // Sélectionne le contenu du champ de mot de passe
  passwordField.select();
  passwordField.setSelectionRange(0, 99999); // Pour mobile

  // Copie le contenu sélectionné
  document.execCommand('copy');

  // Alert pour confirmer la copie
  alert("Mot de passe copié !");
}

console.log("Navigateur : " + navigator.userAgent);
console.log("Plateforme : " + navigator.platform);

let startTime = Date.now();
let userIP = "";

// Récupérer l'IP de l'utilisateur
fetch('https://api64.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        userIP = data.ip;
    })
    .catch(error => console.error("Erreur IP :", error));

// Quand l'utilisateur quitte la page
window.addEventListener("beforeunload", () => {
    let duration = (Date.now() - startTime) / 1000; // Convertir en secondes
    let visitData = {
        ip: userIP,
        duration: duration,
        date: new Date().toLocaleString()
    };

    // Stocker dans localStorage
    let visits = JSON.parse(localStorage.getItem("visits")) || [];
    visits.push(visitData);
    localStorage.setItem("visits", JSON.stringify(visits));

    console.log("Données enregistrées :", visitData);
});
