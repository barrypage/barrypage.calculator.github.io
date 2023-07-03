
let current_time = document.getElementById("current_time");
setInterval(() => {
  let date = new Date();
  let time = date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
  current_time.innerHTML = time;
}, 1000);

let operators = ["%", "/", "*", "-", "+", "="];
let firstResult = [];
let secondResult = [];
let thirdResult = [];
let total = "";
let displayTotal = document.getElementById("result1");
let displayTotal2 = document.getElementById("result2");
// let displayTotal3 = document.getElementById("result3");
const buttons = document.querySelectorAll("button")

const calculate = (buttonValue) => {
  console.log(buttonValue);

  if(buttonValue === "=" && displayTotal !== ""){
    total = eval(total.replace("%", "/100"));
    secondResult.pop();
    displayTotal2.innerHTML = "";
    secondResult.push(total);
    displayTotal2.innerHTML = secondResult[0];

    // if(displayTotal2.innerHTML !== "" || displayTotal2.innerHTML !== 0){
    //   thirdResult.pop();
    //   displayTotal3.innerHTML = "";
    //   thirdResult.push(secondResult[0]);
    // }
  }
  else if (buttonValue === "AC"){
    total = "0";
    secondResult.pop();
    displayTotal2.innerHTML = "";
  }
  else if (buttonValue === "DEL"){
    total = total.toString().slice(0, -1);
  } else {
    if (total === "" && operators.includes(buttonValue)) return;
    total += buttonValue;
  };
  displayTotal.innerHTML = total;
};



buttons.forEach((button) => {
  button.addEventListener("click", (select) => calculate(select.target.dataset.value));
});

