
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