
const auth = firebase.auth();

function signup() {
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("Usuário cadastrado com sucesso!");
    })
    .catch((error) => {
      alert(error.message);
    });
}

function login() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      document.getElementById('user-info').innerText = "Bem-vindo, " + user.email;
    })
    .catch((error) => {
      alert(error.message);
    });
}

function logout() {
  auth.signOut().then(() => {
    document.getElementById('user-info').innerText = "";
    alert("Deslogado com sucesso.");
  });
}
