function sortNumbers(a, b, c) {

    let nums = [a, b, c];

    nums.sort((a, b) => b - a);

    console.log(nums[0]);
    console.log(nums[1]);
    console.log(nums[2]);
}

sortNumbers(2, 1, 3)