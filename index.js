// configuration materialize les composants
document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});


// signup
const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', (e)=> {
  e.preventDefault();

  // obtenir des informations sur l'utilisateur
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;

  // inscrire l'utilisateur
  auth.createUserWithEmailAndPassword(email, password).then( cred => {
    console.log(cred);
    const modal = document.querySelector('#modal-signup');
    // fermer le formulaire d'inscription et réinitialiser le formulaire
    M.Modal.getInstance(modal).close();
    signupForm.reset();
  })
})


// logout
const logout = document.querySelector('#logout');

logout.addEventListener('click', (e)=> {
  e.preventDefault();

  auth.signOut().then(() => {
    console.log('user déco');
  })
})



// login

const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', (e)=> {
  e.preventDefault();

  // obtenir des informations sur l'utilisateur
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  auth.signInWithEmailAndPassword(email,password) .then( cred => {
    console.log(cred.user);

    const modal = document.querySelector('#modal-login');


    // fermer le formulaire de connexion et réinitialiser le formulaire
    M.Modal.getInstance(modal).close();
    loginForm.reset();
  })

});