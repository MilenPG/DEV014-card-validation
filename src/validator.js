const validator = {

  isValid: (inputCardNumber) => {
    const luhnArr= [];
    let luhnSum = 0;
    const cardNumber = inputCardNumber.split('').map(num=> Number(num)) // 1. Transformar string a array
    const invCardNumber = cardNumber.reverse() //2. Invertir array
    for (let i=0; i<invCardNumber.length; i++) { //3. Recorrer array 
      console.log("string i ",i)
      if (i % 2 !==0) { //4. Si la posición del elemento es par...
        if (invCardNumber[i]*2>=10) { //5. Multiplicar valor de índice*2 y si el resultado es >10, SUMAR DIGITOS Y LUEGO PUSH AL luhnArr
          const number = invCardNumber[i]*2
          luhnArr.push(number.toString().split('').reduce(function(r, n) { return r + parseInt(n) }, 0)) //4.1 OPCIÓN 1 SUMA DÍGITOS Y PUSH AL luhnArr
        } else {
          luhnArr.push(invCardNumber[i]*2) //6. Multiplicar valor de índice*2 y si el resultado es < 10, PUSH AL luhnArr
        }
      } else {
        luhnArr.push(invCardNumber[i]) // 7. Push eltos. en posiciones impares
      } // else if (campo vacío) {throw Error} ?????  
    
    }  
    for (let i=0; i<luhnArr.length; i++) {
      luhnSum+= luhnArr[i] //8. Suma final
    }
    console.log(luhnArr)
    console.log("Resultado suma final: "+luhnSum) 
    if (luhnSum>9 && luhnSum % 10===0){ 
      return true //9. RETORNO DE BOOLEANS
    } else { 
      return false
    }
  },

  maskify: (inputCardNumber) => {
    const mask = "#" // 1. Crear la máscara
    const maskedCardNumber = inputCardNumber.slice(0,-4).replace(/./g,mask) // 2. Tomar desde el índice 0 al -4, y reemplazar caracteres por la máscara.
    return maskedCardNumber.concat(inputCardNumber.slice(-4)) // 3. Retornar la concat de caracteres enmascarados y los últimos 4.  
  }

};

export default validator;
