import validator from './validator.js';

const btnValidation= document.getElementById("btnValidation")
btnValidation.addEventListener("click", ()=> {

  validator.validate("123456")
})
