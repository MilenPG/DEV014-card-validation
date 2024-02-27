const validator = {

  /*validator.isValid(creditCardNumber): creditCardNumber es un string con el número de tarjeta que se va a verificar. 
  Esta función debe retornar un boolean dependiendo si es válida de acuerdo al algoritmo de Luhn.*/
  isValid: (inputCardNumber) => {
    console.log(inputCardNumber)
  },

  /*validator.maskify(creditCardNumber): creditCardNumber es un string con el número de tarjeta y esta función debe 
  retornar un string donde todos menos los últimos cuatro caracteres sean reemplazados por un numeral (#) o 🐱. 
  Esta función deberá siempre mantener los últimos cuatro caracteres intactos, aún cuando el string sea de menor longitud. */
  maskify: (inputCardNumber) => {
    console.log(inputCardNumber)

  }

};

export default validator;
