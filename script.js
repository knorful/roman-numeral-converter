const convertBtn = document.getElementById("convert-btn");
const numberInput = document.getElementById("number");
const output = document.getElementById("output");
let userInput = 0;

convertBtn.addEventListener("click", () => {
  userInput = numberInput.value;
  output.innerHTML = "";
  if (!userInput && typeof userInput !== "number") {
    output.innerHTML = "Please enter a valid number";
  } else if (userInput < 1) {
    output.innerHTML = "Please enter a number greater than or equal to 1";
  } else if (userInput >= 4000) {
    output.innerHTML = "Please enter a number less than or equal to 3999";
  }

  if (output.innerHTML === "") {
    covertToRoman(userInput);
  }
});

const covertToRoman = (userInput) => {
  //create variable to hold remainder of subtraction
  let holder = userInput;
  //create numeral array
  let numeralArr = [];
  //create data structure to house numerals in desc. order
  const numerals = [
    { roman: "M", numerical: 1000 },
    { roman: "CM", numerical: 900 },
    { roman: "D", numerical: 500 },
    { roman: "CD", numerical: 400 },
    { roman: "C", numerical: 100 },
    { roman: "XC", numerical: 90 },
    { roman: "L", numerical: 50 },
    { roman: "XL", numerical: 40 },
    { roman: "X", numerical: 10 },
    { roman: "IX", numerical: 9 },
    { roman: "V", numerical: 5 },
    { roman: "IV", numerical: 4 },
    { roman: "I", numerical: 1 },
  ];

  //loop thru data structure, checking if value passed in is greater than iterated el
  for (let i = 0; i < numerals.length; i++) {
    //if so, subtract passed in value by iterated el -> assign to holder
    while (parseInt(holder) > numerals[i].numerical) {
      // push iterated el to numeral array
      numeralArr.push(numerals[i].roman);
      holder -= numerals[i].numerical;
    }
    //if passed value is equal to current iterated el
    if (parseInt(holder) == numerals[i].numerical) {
      //push iterated el to numeral array
      numeralArr.push(numerals[i].roman);
      break;
    }
  }
  //join numeral array and return result
  output.innerHTML = numeralArr.join("");
};
