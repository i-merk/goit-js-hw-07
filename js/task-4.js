const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const formData = new FormData(loginForm);
  const email = formData.get('email').trim();
  const password = formData.get('password').trim();

  if (!email || !password) {
    alert('All form fields must be filled in');
    return;
  }

  const formValues = {
    email: email,
    password: password,
  };
  console.log(formValues);
  loginForm.reset();
});
