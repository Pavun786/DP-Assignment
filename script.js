// Question -2
// function PalindromicSubstring(s) {
//     if (s.length === 0) return "";

//     let longest = "";

//     for (let i = 0; i < s.length; i++) {
//         for (let j = i; j < s.length; j++) {
//             let substring = s.substring(i, j + 1);
//             if (isPalindrome(substring) && substring.length > longest.length) {
//                 longest = substring;
//             }
//         }
//     }

//     return longest;
// }

// function isPalindrome(s) {
//     let left = 0;
//     let right = s.length - 1;

//     while (left < right) {
//         if (s[left] !== s[right]) {
//             return false;
//         }
//         left++;
//         right--;
//     }

//     return true;
// }

// // Examples
// console.log(PalindromicSubstring("babad"));  // Output: "bab" or "aba"
// console.log(PalindromicSubstring("cbbd"));   // Output: "bb"


//==========================================================

//Question -3 :

// function RepeatingCount(sequence, word) {
    
//     let K = 0;
//     let repeatedWord = word;

//      while (sequence.includes(repeatedWord)) {
//         K++;
//         repeatedWord += word;
//     }

//     return K;
// }

// // Example usage:
// console.log(RepeatingCount("ababc", "ab")); // Output: 2
// console.log(RepeatingCount("ababc", "ba")); // Output: 1
// console.log(RepeatingCount("ababc", "ac")); // Output: 0



//=============================================================================

//Question-4

// function maxSubArray(nums) {
//     let maxSum = -Infinity;

//     for (let i = 0; i < nums.length; i++) {
//         let currentSum = 0;
//         for (let j = i; j < nums.length; j++) {
//             currentSum += nums[j];
//             if (currentSum > maxSum) {
//                 maxSum = currentSum;
//             }
//         }
//     }

//     return maxSum;
// }

// // Example usage:
// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6
// console.log(maxSubArray([1])); // Output: 1
// console.log(maxSubArray([5, 4, -1, 7, 8])); // Output: 23