const moveZeroes = function (nums) {
  //Start coding here
  
  // filter, spread
  let notZero = nums.filter(e => e !== 0)
  let zero = nums.filter(e => e === 0)
  let ans = [...notZero, ...zero]
  return ans

  //two pointer
  let left = 0
  nums
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== 0) {
      let temp = nums[right]
      nums[right] = nums[left]
      nums[left] = temp
      left++
    } 
  }
  return nums
};

const result1 = moveZeroes([0, 1, 0, 3, 12]);
console.log(result1); // [1,3,12,0,0]

const result2 = moveZeroes([0]);
console.log(result2); // [0]
