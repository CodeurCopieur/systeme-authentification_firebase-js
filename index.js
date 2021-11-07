// configuration materialize les composants
document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});


const signupForm = document.querySelector('#signup-form');
const modal = document.querySelector('#modal-signup');

signupForm.addEventListener('submit', (e)=> {
  e.preventDefault();

  // obtenir des informations sur l'utilisateur
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;

  // inscrire l'utilisateur
  auth.createUserWithEmailAndPassword(email, password).then( cred => {
    console.log(cred);

    // fermer le formulaire d'inscription et réinitialiser le formulaire
    M.Modal.getInstance(modal).close();
    signupForm.reset();
  })
})