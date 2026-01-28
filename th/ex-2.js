
const romanMap = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000,
};

const romanToInt = function (s) {
  //Start coding here
  let nums = s.split('').map(e => romanMap[e])
  let total = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= (nums[i + 1] ?? 0)) {
      total += nums[i]
    } else {
      let temp = nums[i + 1] - nums[i]
      total += temp
      i++
    }
  }
  return total
};

const result1 = romanToInt("III"); // 3
console.log(result1);

const result2 = romanToInt("LVIII"); // 58
console.log(result2);

const result3 = romanToInt("MCMXCIV"); //1994
console.log(result3);

const result4 = romanToInt("MCMXCVII"); 
console.log(result4);

const result5 = romanToInt("MCVI");
console.log(result5)

const result6 = romanToInt("CXCV"); 
console.log(result6);
