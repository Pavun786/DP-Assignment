//Question -1:

// var twoSum = function(nums, target) {
//     let res = [];
//     for(let i=0;i<nums.length;i++){
//         for(let j=i+1;j<nums.length;j++){
          
//            if(nums[i] + nums[j] == target){
//                res.push(i,j)
//            }
//         }
//     }
//     return res
// };

// console.log(twoSum([2,7,11,15],9))   //[0,1]
// console.log(twoSum([3,2,4],6))       //[1,2]

//=============================================================================


//Question-3:


// function longestSubstringLength(s) {
//     let maxLength = 0; 

//     for (let i = 0; i < s.length; i++) {
//         let Char = [];
//         let currentLength = 0; 

        
//         for (let j = i; j < s.length; j++) {
//             if (Char.includes(s[j])) {
//                 break; 
//             }
//             Char.push(s[j]); 
//             currentLength++; 
//         }

       
//         if (currentLength > maxLength) {
//             maxLength = currentLength;
//         }
//     }

//     return maxLength;
// }

// console.log(longestSubstringLength("abcabcbb")); // Output: 3
// console.log(longestSubstringLength("bbbbbbb"));
// console.log(longestSubstringLength("pwwkew"));

//=====================================================================
//Question-4:

// function kFrequent(nums, k) {
   
//     const arr = [];
//     nums.forEach(num => {
//         let found = false;
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i][0] === num) {
//                 arr[i][1]++;
//                 found = true;
//                 break;
//             }
//         }
//         if (!found) {
//             arr.push([num, 1]);
//         }
//     });

    
//     arr.sort((a, b) => b[1] - a[1]);

//     //Extract the top k elements
//     const result = [];
//     for (let i = 0; i < k; i++) {
//         result.push(arr[i][0]);
//     }

//     return result;
// }

// // Example usage:

// console.log(kFrequent([1,1,1,2,2,3],2)); // Output: [1, 2]
// console.log(kFrequent([1],1));



//============================================================================================

//Question-5:

// function isAnagram(s,t) {
    
//     if (s.length !== t.length) {
       
//         return false;
//     }

//     const sortS = s.split('').sort().join('');
//     const sortT = t.split('').sort().join('');

    
//     return sortS === sortT;
// }

// // Example usage:
// console.log(isAnagram("anagram", "nagaram")); // true
// console.log(isAnagram("rat", "car"));         // false



//=====================================================================

