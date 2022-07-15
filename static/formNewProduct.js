const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');
const btn = document.getElementById('btn');

const expresiones = {
	name: /^[a-zA-Z0-9\_\-\s]{4,}$/,
  price: /\d{1,}/,
	description: /^[a-zA-Z0-9\_\-\s]{4,}$/,
}

const campos = {
	product_name: false,
	price: false,
	description: false,
  image: false,
}

function enableButton() {
  if (campos.product_name && campos.price && campos.description && campos.image){
    document.querySelector(`#select .form__input-error`).classList.remove('form__input-error-activo');
    btn.disabled = false;
  }
  else{
    document.querySelector(`#select .form__input-error`).classList.add('form__input-error-activo');
    btn.disabled = true;
  }
}

const validarFormulario = (e) => {
  console.log(e.target.name);
	switch (e.target.name) {
		case "product_name":
      validarCampo(expresiones.name, e.target, 'product_name');
		break;
		case "price":
      validarCampo(expresiones.price, e.target, 'price');
		break;
		case "description":
      validarCampo(expresiones.description, e.target, 'description');
		break;
    case "file":
      validarFile();
    break;
	}
  enableButton();
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		campos[campo] = true;
	} else {
		campos[campo] = false;
	}
}

const validarFile = () => {
  if(document.getElementById("uploadFile").value != "") {
    campos.image = true;
  }
  else{
    campos.image = false;
  }
}

btn.disabled = true;
inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});
