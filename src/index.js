import validator from './validator.js';

const cardNumber= document.getElementById("cardNumber")
const btnValidation= document.getElementById("btnValidation")
const maskedNumber= document.getElementById("maskedNumber")

cardNumber.addEventListener("input", function(){
  maskedNumber.textContent= `Validar n° de tarjeta: ${validator.maskify(cardNumber.value)}`
})

btnValidation.addEventListener("click", ()=> {
  if (validator.isValid(cardNumber.value)===true) {
    document.getElementById("validationSpan").innerHTML= `<span class="valid-card">¡Tu tarjeta y suscripción asociada ha sido validada exitosamente!</span>` //2. if...> innerHTML: "¡Tu tarjeta y suscripción asociada ha sido validada exitosamente!"
  } else {
    document.getElementById("validationSpan").innerHTML= `<span class="invalid-card">Tarjeta inválida. Por favor, inténtalo otra vez.</span>` //3. else...> innerHTML: "Tarjeta inválida. Por favor,chequea e intentalo otra vez.
  }
}) 
