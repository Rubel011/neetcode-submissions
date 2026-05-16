class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;
        for (let i = 0; i < s.length; i++) {
            if (!t.includes(s[i])) {
                return false;
            }
            t = t.replace(s[i], "");
        }
        return true;
    }
}
