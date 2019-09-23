
const testNums = [1, 2, 3, 4];

function sumFor(nums){
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}

console.log(sumFor(testNums));

function sumWhile(nums) {
  let total = 0;
  let i = 0;
  while (i < nums.length) {
    total += nums[i];
    i++;
  }
  return total;
}

console.log(sumWhile(testNums));

function sumRecur(nums) {
  if (nums.length ===0) {
    return 0;
  }
  return nums[0] + sumRecur(nums.slice(1, nums.length));
}

console.log(sumRecur(testNums));

function sumSimple(nums) {
  return _.reduce(nums, function(memo, num){ return memo + num; }, 0);
}

console.log(sumSimple(testNums));