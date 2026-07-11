export function removeDuplicates(nums:number[]):number{
    let x = 1;
    if(!nums || !nums.length) return 0;
    for(let i=1; i < nums.length; i++){
        if(nums[i]! !== nums[i-1]!){
            nums[x] = nums[i]!;
            x++;
        }
    }
    return x;
}