/**
    Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

    push(x) -- Push element x onto stack.
    pop() -- Removes the element on top of the stack.
    top() -- Get the top element.
    getMin() -- Retrieve the minimum element in the stack.
 */

/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.arr = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    // Adding element to array
    this.arr.push(x);    
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    // Removing last element from the array
    this.arr.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    // Returning the last element from thr array
    return this.arr[this.arr.length -1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    // Returning minimum element from the array
    return Math.min(...this.arr);
    
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */