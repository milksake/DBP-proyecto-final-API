const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');
const btn = document.getElementById('btn');

const expresiones = {
	username: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	password: /^.{4,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const campos = {
	username: false,
	email: false,
	password: false,
	password2: false,
}

function enableButton() {
  if (campos.username && campos.email && campos.password && campos.password2){
    btn.disabled = false;
  }
  else{
    btn.disabled = true;
  }
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "username":
      validarCampo(expresiones.username, e.target, 'username');
		break;
		case "email":
      validarCampo(expresiones.email, e.target, 'email');
		break;
		case "password":
      validarCampo(expresiones.password, e.target, 'password');
      validarPassword2();
		break;
    case "password2":
      validarPassword2();
    break;
	}
  enableButton();
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.querySelector(`#${campo}-input .form__input-error`).classList.remove('form__input-error-activo');
		campos[campo] = true;
	} else {
		document.querySelector(`#${campo}-input .form__input-error`).classList.add('form__input-error-activo');
		campos[campo] = false;
	}
}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');
	if(inputPassword1.value !== inputPassword2.value){
		document.querySelector(`#password2-input .form__input-error`).classList.add('form__input-error-activo');
		campos['password2'] = false;
	} else {
		document.querySelector(`#password2-input .form__input-error`).classList.remove('form__input-error-activo');
		campos['password2'] = true;
	}
}

btn.disabled = true;
inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});
