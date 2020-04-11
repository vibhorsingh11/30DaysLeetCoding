/**
 * Given a binary tree, you need to compute the length of the diameter of the tree. 
 * The diameter of a binary tree is the length of the longest path between any two nodes in a tree. 
 * This path may or may not pass through the root.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    if (root == null) 
        return 0; 
    // Getting the height of the left subtree
    let lheight = height(root.left); 
    // Getting the height of the right subtree
    let rheight = height(root.right); 

    let ldiameter = diameterOfBinaryTree(root.left); 
    let rdiameter = diameterOfBinaryTree(root.right); 

    return Math.max(lheight + rheight, 
                    Math.max(ldiameter, rdiameter));
};

function height(root) {
    if (root == null) 
        return 0; 
    // Returning height 
    return (1 + Math.max(height(root.left), height(root.right))); 
}