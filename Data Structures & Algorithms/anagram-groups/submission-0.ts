class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let hasMap = new Map();
        for (let i of strs) {
            let sortedEle = i.split("").sort().join("");
            if (hasMap.has(sortedEle)) {
                hasMap.get(sortedEle).push(i);
            } else {
                hasMap.set(sortedEle, [i]);
            }
        }
        let ans = [];
        for (let i of hasMap.values()) {
            ans.push(i);
        }
        return ans;
    }
}
