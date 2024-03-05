import validator from './validator.js';

const cardNumber= document.getElementById("cardNumber")// ¿aquí debería aplicar el MASKIFY?
const btnValidation= document.getElementById("btnValidation")

//Invocar el input de n° de tarjeta, para poder luego pasarle como argumento de las funciones:
document.getElementById("cardNumber").addEventListener("input", function(){
  console.log(cardNumber.value)
})

//1. Que al escuchar el "click", el botón ejecute isValid... 
btnValidation.addEventListener("click", ()=> {
  if (validator.isValid(cardNumber.value)===true) {
    document.getElementById("validationSpan").innerHTML= `<span class="valid-card">¡Tu tarjeta y suscripción asociada ha sido validada exitosamente!</span>` //2. if...> innerHTML: "¡Tu tarjeta y suscripción asociada ha sido validada exitosamente!"
  } else {
    document.getElementById("validationSpan").innerHTML= `<span class="invalid-card">Tarjeta inválida. Por favor, chequea e intentalo otra vez.</span>`} //3. else...> innerHTML: "Tarjeta inválida. Por favor,chequea e intentalo otra vez.
 

  

}) 
