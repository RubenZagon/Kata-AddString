/**
 *
 * Github de la Kata
 *
 * https://github.com/xpeppers/string-calculator-kata
*/

// "" -> 0
// "1" -> 1
// "3" -> 3
// "1,2" ->3
// "3,5" -> 8

const getDelimiter = (string) => {

}


// Método sumar
const addNumbers = (string, delimiter) => {
  let add = 0;
  let split = string.split(delimiter);

  for (i = 0; i < split.length; i++) {
    if (isNaN((parseInt(split[i]))) === false) {
      //if (parseInt(split[i]) > 0 ){
      add = add + parseInt(split[i]);
      //}
      //else {
      //throw new Error('oops');
      //}
    }

  }
  return add;
}


const verify = (string, delimiter) => {
  if (string == "") {
    return 0;
  }

  if (string.includes(delimiter) == false) {
    return string;
  } else { //Si encuentra una coma pasará sumar los dos elementos
    return addNumbers(string, delimiter);
  }
}


const delimiter = getDelimiter();
const textToCalculate = "//;\n1;2"; /* "//[delimiter]\n[numbers...]"  */

console.log(verify(textToCalculate, delimiter));



