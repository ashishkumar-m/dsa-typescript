# [Remove Element](https://leetcode.com/problems/remove-element)

## Problem

Given an integer array `nums` and an integer `val`, remove all occurrences of `val` in nums **in-place**. The order of the elements may be changed. Then return the number of elements in `nums` which are not equal to `val`.

Consider the number of elements in nums which are not equal to `val` be `k`, to get accepted, you need to do the following things:

    Change the array `nums` such that the first `k` elements of `nums` contain the elements which are not equal to `val`. The remaining elements of `nums` are not important as well as the size of `nums`.
    Return `k`.

### Custom Judge:

The judge will test your solution with the following code:

```javascript
int[] nums = [...]; // Input array
int val = ...; // Value to remove
int[] expectedNums = [...]; // The expected answer with correct length.
                            // It is sorted with no values equaling val.
int k = removeElement(nums, val); // Calls your implementation
assert k == expectedNums.length;
sort(nums, 0, k); // Sort the first k elements of nums
for (int i = 0; i < actualLength; i++) {
    assert nums[i] == expectedNums[i];
}
```

If all assertions pass, then your solution will be accepted.

## Solution

Consider an array `nums` : `[1,2,2,10,5,6,7,15,2,4,8,9]` and `val` = `2`

We can solve this problem using **two pointer** approach.

- `i` which iterates through the `nums`
- `x` which keeps track of where the `val` is found and where the `num` can be replaced

```javascript

let nums = [1,2,2,10,5,6,7,15,2,4,8,9]
let val = 2;
let x = 0;
for(let i=0; i<nums.length;i++){
    if(nums[i] != val){
        nums[x] = nums[i];
        x++;
    }
}

return x;

```