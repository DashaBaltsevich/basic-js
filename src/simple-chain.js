import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default { 
  str: "",
  getLength() {
    return this.str.length;
  },
  addLink(value) {
    if (arguments.length != 0) {
      if (this.str.length === 0) {
        this.str += `( ${value} )`;
      } else {
        this.str += `~~( ${value} )`;
      }
    } else {
       if (this.str.length === 0) {
        this.str += `( )`;
      } else {
        this.str += `~~( )`;
      }
    }
    return this;
  },
  removeLink(position) {
    function isInteger(num) {
      return (num ^ 0) === num;
    }
    if (this.str.length != 0) {
      let arr = this.str.split('~~');
      if (typeof(position) === 'number' && isInteger(position) ===true && arr[position-1]) {
           arr.splice(position-1, 1)
           this.str = arr.join('~~'); 
       } else {
         // this.str = '';
         throw new Error("You can\'t remove incorrect link!");
        }
    }
    return this
  },
  reverseChain() {
    if (this.str.length != 0) {
      let arr = this.str.split('~~').reverse();
      this.str = arr.join('~~');
    }
    return this
  },
  finishChain() {
    return this.str;
  },

};
