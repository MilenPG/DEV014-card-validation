const validator = {

  /*validator.isValid(creditCardNumber): creditCardNumber es un string con el número de tarjeta que se va a verificar. 
  Esta función debe retornar un boolean dependiendo si es válida de acuerdo al algoritmo de Luhn.*/
  isValid: (inputCardNumber) => {
    const luhnArr=[]
    //const byTwo= []
    const cardNumber = inputCardNumber.split('').map(num=> Number(num)) // 1. Transformar string a array
    for (let i=cardNumber.length-1; i>=0; i--) { //2. Recorrer array inversamente
      if (cardNumber[i] % 2 ===0) { //3. Si la posición es par...
        if (cardNumber[i]*2>10) { //4. Multiplicar valor de índice*2 y si el resultado es >10, SUMAR DIGITOS Y LUEGO PUSH AL luhnArr
          console.log(cardNumber[i]*2+" sumar digitos y pushear a luhnArr")
        } else {
          luhnArr.push(cardNumber[i]*2) //5. Multiplicar valor de índice*2 y si el resultado es < 10, PUSH AL luhnArr
        }
      } else {
        luhnArr.push(cardNumber[i])
      } // else if (campo vacío) {throw Error} ?????
      console.log("Array para suma final "+luhnArr)

    }
  

    /*
    1. Crear 3 array vacíos: 1. para numero inverso 2. arr para 3. suma final? 
    2. Recorrer array inversamente y pushearlos al 1 arr creado
    3. Recorrer nuevo array y crear bucle que en cada pasada 
        a.if (inv[i] no es par) {push(inv[i]).luhnArr}
          else (inv[i] es par) {
            let byTwo=[] 
            push(inv[i]*10).byTwo {
              for (){
                if (byTen[i]<10) {pushear a luhnArr}
                else {sumar digitos por elto. y pushear la suma a luhnArr -let sumByTen=0; / let splitByTen = byTen[i].split('') / sumByTen+=splitByTen[i]-}
              }
            }
          }
          ciclo for para suma final (luhnSum+= luhnArr[i])
          if (luhnSum....) {return valid}
          else {return invalid}*/

    console.log("Verificando: "+cardNumber)
  },

  /*validator.maskify(creditCardNumber): creditCardNumber es un string con el número de tarjeta y esta función debe 
  retornar un string donde todos menos los últimos cuatro caracteres sean reemplazados por un numeral (#) o 🐱. 
  Esta función deberá siempre mantener los últimos cuatro caracteres intactos, aún cuando el string sea de menor longitud. */
  maskify: (inputCardNumber) => {
    console.log(inputCardNumber)

  }

};

export default validator;
