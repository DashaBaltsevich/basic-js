import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(matrix) {
  let arr = [];
  for (let i = 0; i<matrix.length; i++) {
    arr.push(matrix[i].filter(e => e==='^^'))
  }
  if (arr.length != 0) {
    return arr.flat().length
  } else return 0
}
