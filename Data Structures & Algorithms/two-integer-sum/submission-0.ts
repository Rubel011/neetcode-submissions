class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let storeRemain = new Map();

        for (let i = 0; i < nums.length; i++) {
            let need = target - nums[i];
            if (storeRemain.has(need)) {
                return [i, storeRemain.get(need)];
            }
            storeRemain.set(nums[i], i);
        }
    }
}
