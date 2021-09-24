import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  if(s1.length === s2.length) {
    s1 = s1.split('').sort().join('');
    s2 = s2.split('').sort().join('');
  } else {
    s1 = Array.from(new Set(s1)).sort().join('');
    s1 = Array.from(new Set(s2)).sort().join('');
  }
  let arr = [];
  for (let i=0; i< s1.length; i++) {
    if(s1[i] === s2[i] || s1[i] === s2[i+1]) {
      arr.push(s1[i]);
    }
  }
  let num = arr.length;
  return num;
}
