// "" -> 0
// "1" -> 1
// "3" -> 3
// "1,2" ->3
// "3,5" -> 8


const addNumbers = (string) => {
    let add = 0;
    let split = string.split(",");
    console.log(`tamaño del split es: ${split.length}`)
  
    for (i = 0 ; i < split.length; i++) {
      add = add + parseInt(split[i]);
      console.log(`El numero a sumar es: ${split[i]}, y ahora la suma va: ${add}`);
  
    }
    return add;
  }
  
  
  const verify = (string) => {
    if (string == "") {
      return 0;
    }
  
    if (string.includes(",") == false ) {
      return string;
    } else { //Si encuentra una coma pasará sumar los dos elementos
     return addNumbers(string); 
    }
  }
  
  
  
  const textToCalculate = "1,2,2,1, 6";
  console.log(verify(textToCalculate));
  