/**
 Given a non-empty, singly linked list with head node head, return a middle node of linked list.

    If there are two middle nodes, return the second middle node.
    Example 1:

    Input: [1,2,3,4,5]
    Output: Node 3 from this list (Serialization: [3,4,5])
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    // Using two pointers to get the middle list. slowptr will move single node and fastprt will move 2 node
    var slowptr = head;
    var fastptr = head;
    // Iterating till the fastptr is not null or next of fast ptr is not null
	while(fastptr != null && fastptr.next != null){
        // Traversing the list and updating fastptr & slowptr
        fastptr = fastptr.next.next;
		slowptr = slowptr.next;
    }
    // returning slowptr as it is pointing towards the list from the middle
	return slowptr;
};