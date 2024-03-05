const validator = {

  isValid: (inputCardNumber) => {
    const luhnArr= [];
    let luhnSum = 0;
    const cardNumber = inputCardNumber.split('').map(num=> Number(num)) // 1. Transformar string a array
    for (let i=cardNumber.length-1; i>=0; i--) { //2. Recorrer array inversamente
      if (cardNumber[i] % 2 ===0) { //3. Si la posición del elemento es par...
        if (cardNumber[i]*2>=10) { //4. Multiplicar valor de índice*2 y si el resultado es >10, SUMAR DIGITOS Y LUEGO PUSH AL luhnArr
          const number = cardNumber[i]*2
          luhnArr.push(number.toString().split('').reduce(function(r, n) { return r + parseInt(n) }, 0)) //4.1 OPCIÓN 1 SUMA DÍGITOS Y PUSH AL luhnArr
          
          /*let sumGreaterTen=0;  //4.2 OPCION 2 SUMA DIGITOS
          for (let i=0; i<cardNumber[i].length; i++) {
            sumGreaterTen += (cardNumber[i])[i]
          }
          luhnArr.push(sumGreaterTen)*/
          //console.log(cardNumber[i]*2 +" sumar digitos y pushear a luhnArr")
        } else {
          luhnArr.push(cardNumber[i]*2) //5. Multiplicar valor de índice*2 y si el resultado es < 10, PUSH AL luhnArr
        }
      } else {
        luhnArr.push(cardNumber[i])
      } // else if (campo vacío) {throw Error} ?????  
      for (let i=0; i<luhnArr.length; i++) {
        luhnSum+= luhnArr[i]
      }
      console.log(luhnArr)
      console.log("Resultado suma final: "+luhnSum) //6. Suma final
    }
    if (luhnSum>9 && luhnSum % 10===0){ 
      return true //7. RETORNO DE BOOLEANS
    } else { 
      return false
    }
    /*console.log("Verificando: "+cardNumber)
    console.log("Array para suma final: "+luhnArr)
    console.log("Validar: "+luhnSum)*/
    
  },

  /*validator.maskify(creditCardNumber): creditCardNumber es un string con el número de tarjeta y esta función debe 
  retornar un string donde todos menos los últimos cuatro caracteres sean reemplazados por un numeral (#) o 🐱. 
  Esta función deberá siempre mantener los últimos cuatro caracteres intactos, aún cuando el string sea de menor longitud. */
  maskify: (inputCardNumber) => {
    console.log(inputCardNumber)

  }

};

export default validator;
