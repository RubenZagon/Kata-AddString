/**
 * GitHub de la Kata
 * https://github.com/xpeppers/string-calculator-kata
 * 
 * 
 */

// "" -> 0
// "1" -> 1
// "3" -> 3
// "1,2" ->3
// "3,5" -> 8




const existDelimiter = (string) => {
  return (string.startsWith('//')) && (string.startsWith('\n', 3));
}

const getDelimiter = (string) => {
  if (existDelimiter(string)) {
    return string.substring(2, 3);
  } else {
    return ",";
  }
}

//FUncion guardar numeros negatigos en un array.
const saveNegativeNumbers = (string) => {

  let splitString = string.split(delimiter);
  let negatNumber = [];

  for (i = 0; i < splitString.length; i++) {
    let passElementToNumber = parseInt(splitString[i]);
    if (!isNaN(passElementToNumber)) {
      if (passElementToNumber < 0 ){
        negatNumber.push(passElementToNumber);
      }
    }
  }
  return negatNumber;

}




// Método sumar
const addNumbers = (string, delimiter) => {
  let add = 0;
  let splitString = string.split(delimiter);

  for (i = 0; i < splitString.length; i++) {
    let passElementToNumber = parseInt(splitString[i]);
    if (!isNaN(passElementToNumber)) {
      if (passElementToNumber > 0 ){
        add = add + passElementToNumber;
      }
      else {
        
        throw new Error('Negativos no están permitidos: '+ saveNegativeNumbers(string));
      }
    }

  }
  return add;
}


const verify = (string, delimiter) => {
  if (string == "") {
    return 0;
  }

  if (!string.includes(delimiter)) {
    return string;
  } else { //Si encuentra una coma pasará sumar los dos elementos
    return addNumbers(string, delimiter);
  }
}


const textToCalculate = "-3,1,4,-1,-2"; /* "//[delimiter]\n[numbers...]"  */
const delimiter = getDelimiter(textToCalculate);
console.log(verify(textToCalculate, delimiter));