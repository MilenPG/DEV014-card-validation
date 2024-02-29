import validator from './validator.js';

//"Invocar validator.isValid() y validator.maskify() según sea necesario y actualizar el resultado en la UI (interfaz de usuario)."

//Invocar el input de n° de tarjeta, para poder luego pasarle como argumento de las funciones:
const cardNumber= document.getElementById("cardNumber") // falta agregar eventListener del input

//Invocar las funciones, pasándole cardNumber:

//Llamar al botón:
const btnValidation= document.getElementById("btnValidation")
//Hacer que botón funcione:
//1. Que al escuchar el "click", el botón ejecute... 
btnValidation.addEventListener("click", ()=> {
  //2. if...> innerHTML: "¡Tu tarjeta y suscripción asociada ha sido validada exitosamente!"
  validator.isValid(cardNumber) // hacer if, invocando a validator

  //3. else...> innerHTML: "Tarjeta inválida. Por favor,chequea e intentalo otra vez.
  
})
