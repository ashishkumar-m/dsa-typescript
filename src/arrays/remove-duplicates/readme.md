# [26. Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/)

## Problem

Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Consider the number of unique elements in nums to be k​​​​​​​​​​​​​​. After removing duplicates, return the number of unique elements k.

The first k elements of nums should contain the unique numbers in sorted order. The remaining elements beyond index k - 1 can be ignored.

Custom Judge:

The judge will test your solution with the following code:
```javascript
int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
```
If all assertions pass, then your solution will be accepted.

 

- Example 1:
```
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
```
- Example 2:
```
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
```
 
- Constraints:

```
1 <= nums.length <= 3 * 104
-100 <= nums[i] <= 100
nums is sorted in non-decreasing order.
```

## Solution

Consider an array `nums`: [1,2,2,4,4,5,6,7,9,10,10,12] of length `n = 12`

Now, we have to remove the duplicates in-place and the judge only considers first `k` elements where `k = 9` i.e. number of unique elements.

The funtion should return the number of unique elements `k` i.e. `k = 9` 

The approach is to have **two pointers** `x` and `i`: 

`i` loops from `0` to `nums.length`
`x` maintains the index position that the unique element should be replaced to.

- Constraint is that the numbers are ordered in an increasing order : which means that the next number should be greater than the previous number
- So, if the number hasn't increased in the next, its not a unique element. So only if we find a unique element, we replace it at the `x`th position and increment x

### Exact Solution
```javascript
int nums = []
int x =1;
for(let i= 1; i< nums.length; i++ ){
    if(nums[i] !== nums[i-1]){
        nums[x] = nums[i];
        x++;
    }
}
return x;
 ```