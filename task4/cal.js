function calculate() {
  let a = parseFloat(document.getElementById("num1").value);
  let b = parseFloat(document.getElementById("num2").value);
  let op = document.getElementById("operation").value;
  let result;

  if (isNaN(a) || isNaN(b)) {
    result = "Please enter valid numbers!";
  } 
  else if (op === "add") {
    result = "Result: " + (a + b);
  } 
  else if (op === "sub") {
    result = "Result: " + (a - b);
  } 
  else if (op === "mul") {
    result = "Result: " + (a * b);
  } 
  else if (op === "div") {
    if (b === 0) {
      result = "Division by zero not allowed!";
    } else {
      result = "Result: " + (a / b);
    }
  } 
  else {
    result = "Invalid operation!";
  }

  document.getElementById("result").innerText = result;
}