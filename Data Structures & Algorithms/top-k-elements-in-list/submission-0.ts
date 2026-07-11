class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        let frequencyOjb = {};
        for (let i of nums) {
            frequencyOjb[i] = (frequencyOjb[i] || 0) + 1;
        }

        let array = Object.keys(frequencyOjb).sort((a, b) => frequencyOjb[b] - frequencyOjb[a]);
        let result = [];
        for (let i = 0; i < k; i++) {
            result.push(array[i]);
        }
        return result;
    }
}
