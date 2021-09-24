import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  let newarr = [];
  if( Array.isArray(arr)) {
    arr.forEach(e => {
      newarr.push(e)
    })
  } else {throw new Error("'arr' parameter must be an instance of the Array!")}
  
function a (newarr) {
      for (let i=0; i< newarr.length; i++) {
    if (newarr[i] === '--double-next') {
      if(newarr[i+1]) {
        newarr[i] = newarr[i+1]
      }
    } else if (newarr[i] === '--double-prev') {
      if (newarr[i-1]) {
        newarr[i] = newarr[i-1]
      }
    } else if (newarr[i] === '--discard-next') {
      if (newarr[i+1]) {
        newarr.splice(i, 2)
      }
    } else if (newarr[i] === '--discard-prev') {
      if (newarr[i-1]) {
        newarr.splice(i-1, 2)
      }
    }
   }
  } 
  a(newarr)
  for (let i =0; i< newarr.length; i++) {
    if (newarr[i] === '--discard-prev' ||newarr[i] === '--discard-next' || newarr[i] === '--double-prev' || newarr[i] === '--double-next' ) {
      newarr.splice(i, 1)
    }
  }
    return newarr;
}
