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
  }
}

// Método sumar
const addNumbers = (string, delimiter) => {
  let add = 0;
  let split = string.split(delimiter);

  for (i = 0; i < split.length; i++) {
    if (!isNaN(parseInt(split[i]))) {
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

  if (!string.includes(delimiter)) {
    return string;
  } else { //Si encuentra una coma pasará sumar los dos elementos
    return addNumbers(string, delimiter);
  }
}



const textToCalculate = "//;\n1;2;3;98"; /* "//[delimiter]\n[numbers...]"  */
const delimiter = getDelimiter(textToCalculate);

console.log(verify(textToCalculate, delimiter));



