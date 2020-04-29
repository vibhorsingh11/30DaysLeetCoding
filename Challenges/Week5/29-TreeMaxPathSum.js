/**
 * Given a non-empty binary tree, find the maximum path sum.

 *For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.
 *
 *Example 1:
 *
 *Input: [1,2,3]
 *
 *       1
 *      / \
 *     2   3
 *
 *Output: 6
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// Variable set to minimum value
let max = Number.MIN_VALUE;;
var maxPathSum = function(root) {
    // Check if root.left and root.right == null then return root value
    if((root.left == null && root.right == null)) return root.val; 
    helper(root);
    return max;    
};
    
// Created function to recursively calculate the value of left tree path and right tree path
let helper = function(root) {
    // If root equal to null then return 0
    if(root == null)return 0;     
    // Calculate the left node values
    let left = helper(root.left);
    // Calculate the right node values
    let right = helper(root.right);
    // Calculating sum of root left node and right node;
    let sum = root.val + Math.max(left, 0) + Math.max(right, 0);
    // assigning max value from max and calculated sum
    max = Math.max(sum, max);
    sum = root.val + Math.max(0, Math.max(left, right));
    return sum;
}