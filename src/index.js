import validator from './validator.js';

/* invocar validator.isValid() y validator.maskify() según sea necesario y actualizar el resultado en la UI (interfaz de usuario).*/
const cardNumber= document.getElementById("cardNumber") // falta agregar eventListener del input
const btnValidation= document.getElementById("btnValidation")

btnValidation.addEventListener("click", ()=> {
  validator.isValid(cardNumber)
})
