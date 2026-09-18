function canJump(nums) {
    let maxNums = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > maxNums) {
            return false;
        }
        maxNums = Math.max(maxNums, i + nums[i]);

    if (maxNums >= nums.length - 1){
        return true
    }
    }

    return true
}

const nums = [2,3,1,1,4];
const num = [3, 2, 1, 0, 4]

console.log(canJump(nums));
console.log(canJump(num));