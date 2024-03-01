import validator from './validator.js';

const cardNumber= document.getElementById("cardNumber")// ¿aquí debería aplicar el MASKIFY?
const btnValidation= document.getElementById("btnValidation")

//Invocar el input de n° de tarjeta, para poder luego pasarle como argumento de las funciones:
document.getElementById("cardNumber").addEventListener("input", function(){
  console.log(cardNumber.value)
})

//1. Que al escuchar el "click", el botón ejecute isValid... 
btnValidation.addEventListener("click", ()=> {
  //2. if...> innerHTML: "¡Tu tarjeta y suscripción asociada ha sido validada exitosamente!"
  validator.isValid(cardNumber.value) // hacer if, invocando a validator que debe retornar TRUE o FALSE.

  //3. else...> innerHTML: "Tarjeta inválida. Por favor,chequea e intentalo otra vez.

}) 
