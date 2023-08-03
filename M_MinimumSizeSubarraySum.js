/**
 * https://leetcode.com/problems/minimum-size-subarray-sum/
 * O(n^2) -> O(n)
 *
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    const n = nums.length;
    let ans = n + 1;
    for (let left = 0; left < n; left++) {
        let sum = 0;
        for (let right = left; right < n; right++) {
            const size = right - left + 1;
            if (size >= ans) break;
            sum += nums[right];
            if (sum >= target) ans = size;
        }
    }
    return ans === n + 1 ? 0 : ans;
};
//Phiên bản cải tiến của chatGPT
var GPT_minSubArrayLen = function (target, nums) {
    const n = nums.length;
    let left = 0;
    let sum = 0;
    let ans = n + 1;
    for (let right = 0; right < n; right++) {
        sum += nums[right];

        // Kiểm tra nếu tổng cửa sổ con từ left đến right đủ lớn để thỏa mãn yêu cầu
        while (sum >= target) {
            // Cập nhật kết quả nếu cửa sổ con hiện tại nhỏ hơn kết quả hiện tại
            ans = Math.min(ans, right - left + 1);
            // Di chuyển con trỏ left để thu nhỏ cửa sổ con
            sum -= nums[left];
            left++;
        }
    }

    return ans === n + 1 ? 0 : ans;
};

const target = 4;
const nums = [1, 4, 4];
export default minSubArrayLen(target, nums);
