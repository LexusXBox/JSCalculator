function buttonPress(clicked_name){
  console.log(clicked_name);
  let screen = document.getElementById("screen");
  if(screen.value.contains())
  screen.value = screen.value + document.getElementById(clicked_name).value;
}

function calculateSum(){
  let sum = document.getElementById('screen').value
  let values = [];
  let funcs = [];
  for(let i = 0; i < sum.length; i++){
    if(sum.charAt(i) == "+" || sum.charAt(i) == "-" || sum.charAt(i) == "/" || sum.charAt(i) == "*" ){
      console.log(sum.charAt(i));
      num1 = sum.substring(0,i);
      for (let j=i;j<sum.length;j++){
          if(sum.charAt(j) == "+" || sum.charAt(j) == "-" || sum.charAt(j) == "/" || sum.charAt(j) == "*" ){
            num2 = sum.substring(2+i,j+1);
      }
    }

      console.log(num1);
      console.log(num2);
      //sum.split(i)
      switch (sum.charAt(i)) {
        case "+":
        add(num1,num2);
        break;
        case "-":
        subtract(num1,num2);
        break;
        case "*":
        mul(num1,num2);
            break;
        case "/":
        divi(num1,num2);

          break;
        default:

      }
      console.log(sum.charAt(i));
    }
  }

  function add(num1,num2){
    document.getElementById('screen').value = +num1 + +num2;
  return +num1 + +num2;
  }

  function subtract(num1,num2){
    document.getElementById('screen').value = +num1 - +num2;
  return +num1 - +num2;
  }

  function mul(num1,num2){
    document.getElementById('screen').value = +num1 * +num2;
  return +num1 * +num2;
  }


}
 function divi(num1,num2){
   document.getElementById('screen').value = +num1 / +num2;
 return +num1 / +num2;
 }
