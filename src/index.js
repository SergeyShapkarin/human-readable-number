module.exports = function toReadable(number) {
  let Units = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
  };

  let Teens = {
    0: "ten",
    1: "eleven",
    2: "twelve",
    3: "thirteen",
    4: "fourteen",
    5: "fifteen",
    6: "sixteen",
    7: "seventeen",
    8: "eighteen",
    9: "nineteen"
  };

  let Tys = {
    0: "",
    2: "twenty",
    3: "thirty",
    4: "forty",
    5: "fifty",
    6: "sixty",
    7: "seventy",
    8: "eighty",
    9: "ninety"
  };

  let [unit, dozen, hundred] = number.toString().split("").reverse();
  let answer = ""

  
  if (hundred) {
    answer = answer + Units[hundred] + " hundred ";
  }


  if (dozen) {
    if (dozen != 1) {
      answer = answer + Tys[dozen] + " ";
      if (unit != 0) {
        answer = answer + Units[unit];
      }
    }
    
    if (dozen == 1) {
      answer = answer + Teens[unit] + " ";
    }
  } else {
    answer = Units[unit];
  }


  

  return answer.replace("  ", " ").trim();


}
