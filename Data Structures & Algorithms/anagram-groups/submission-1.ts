class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let hasMap = new Map();
        for (let i = 0; i < strs.length; i++) {
            let sorted = strs[i].split("").sort().join("");

            if (hasMap.has(sorted)) {
                let value = hasMap.get(sorted);
                value.push(strs[i]);
            } else {
                hasMap.set(sorted, [strs[i]]);
            }
        }

        let output = [];

        for (let i of hasMap.values()) {
            output.push([...i]);
        }

        return output;
    }
}
