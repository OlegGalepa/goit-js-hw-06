const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
e.preventDefault();
    const {
 elements: { email, password }
 } = e.currentTarget;
let result = { email: email.value, password: password.value };
	if (email.value === '' || password.value === '') {
		 alert("the field is not filled!");
} else console.log(result)

	e.currentTarget.reset();
}


